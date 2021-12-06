{{={= =}=}}
import { hashPassword } from '../auth.js'
import AuthError from '../AuthError.js'

const EMAIL_FIELD = 'email'
const PASSWORD_FIELD = 'password'

// Ensure strong plaintext password.
// Throws an AuthError on the first validation that fails.
const registerUserEntityValidation = (prismaClient) => {
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
  // registerUserEntityValidation must come before registerPasswordHashing
  registerUserEntityValidation(prismaClient)
  registerPasswordHashing(prismaClient)
}

const validateUserData = (data, args, action) => {
  data = data || {}

  const defaultValidations = [
    { validates: EMAIL_FIELD, message: 'email must be present', validator: email => !!email },
    { validates: PASSWORD_FIELD, message: 'password must be present', validator: password => !!password },
    { validates: PASSWORD_FIELD, message: 'password must be at least 8 characters', validator: password => password.length >= 8 },
    { validates: PASSWORD_FIELD, message: 'password must contain a number', validator: password => /\d/.test(password) },
  ]

  const validations = [
    ...(args._waspSkipDefaultValidations ? [] : defaultValidations),
    ...(args._waspCustomValidations || [])
  ]

  // Validations always run on create, but only when the field is present for updates
  for (const v of validations) {
    if (action === 'create' || data.hasOwnProperty(v.validates)) {
      if (!v.validator(data[v.validates])) {
        throw new AuthError(v.message)
      }
    }
  }
}
