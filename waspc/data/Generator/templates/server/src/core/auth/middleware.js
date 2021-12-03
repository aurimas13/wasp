{{={= =}=}}
import { hashPassword } from '../auth.js'
import AuthError from '../AuthError.js'

const EMAIL_FIELD = 'email'
const PASSWORD_FIELD = 'password'

const validateUserData = (data, args, action) => {
  data = data || {}

  // By default, a given validation v will only run if data.hasOwnProperty(v.validates)
  // To force it to run for some action(s), add them to always_on. This is useful for
  // presence checks we always want to run during 'create', for example, but we can optionally
  // skip on 'update' if the data is not present/being updated.
  // always_on may contain one or more of the following: 'create', 'update', and 'updateMany'
  const defaultValidations = [
    { validates: EMAIL_FIELD, message: 'email must be present', validator: data => !!data.email, always_on: ['create'] },
    { validates: PASSWORD_FIELD, message: 'password must be present', validator: data => !!data.password, always_on: ['create'] },
    { validates: PASSWORD_FIELD, message: 'password must be at least 8 characters', validator: data => data.password.length >= 8 },
    { validates: PASSWORD_FIELD, message: 'password must contain a number', validator: data => /\d/.test(data.password) },
  ]

  const validations = [
    ...(args._waspSkipDefaultValidations ? [] : defaultValidations),
    ...(args._waspCustomValidations || [])
  ]

  for (const v of validations) {
    // If this validation must run, or it optionally can run and has the field
    if ((v.always_on && v.always_on.includes(action)) || data.hasOwnProperty(v.validates)) {
      if (!v.validator(data)) {
        throw new AuthError(v.message)
      }
    }
  }
}

// Ensure strong plaintext password. Must come before hashing middleware.
// Throws an AuthError on the first validation that fails.
const registerPasswordValidation = (prismaClient) => {
  prismaClient.$use(async (params, next) => {
    if (params.model === '{= userEntityUpper =}') {
      if (['create', 'update', 'updateMany'].includes(params.action)) {
        validateUserData(params.args.data, params.args, params.action)
      } else if (params.action === 'upsert') {
        validateUserData(params.args.create.data, params.args, 'create')
        validateUserData(params.args.update.data, params.args, 'update')
      }

      // Remove from downstream Prisma processing to avoid "Unknown arg" error
      delete params.args._waspSkipDefaultValidations
      delete params.args._waspCustomValidations
    }

    return next(params)
  })
}

// Make sure password is always hashed before storing to the database.
const registerPasswordHashing = (prismaClient) => {
  prismaClient.$use(async (params, next) => {
    if (params.model === '{= userEntityUpper =}') {
      if (['create', 'update', 'updateMany'].includes(params.action)) {
        if (params.args.data.hasOwnProperty(PASSWORD_FIELD)) {
          params.args.data[PASSWORD_FIELD] = await hashPassword(params.args.data[PASSWORD_FIELD])
        }
      } else if (params.action === 'upsert') {
        if (params.args.create.data.hasOwnProperty(PASSWORD_FIELD)) {
          params.args.create.data[PASSWORD_FIELD] =
            await hashPassword(params.args.create.data[PASSWORD_FIELD])
        }
        if (params.args.update.data.hasOwnProperty(PASSWORD_FIELD)) {
          params.args.update.data[PASSWORD_FIELD] =
            await hashPassword(params.args.update.data[PASSWORD_FIELD])
        }
      }
    }

    return next(params)
  })
}

export const registerAuthMiddleware = (prismaClient) => {
  registerPasswordValidation(prismaClient)
  registerPasswordHashing(prismaClient)
}
