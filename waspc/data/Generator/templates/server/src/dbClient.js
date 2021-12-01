{{={= =}=}}
import Prisma from '@prisma/client'
{=# isAuthEnabled =}
import { hashPassword } from './core/auth.js'
import EntityValidationError from './core/EntityValidationError.js'
{=/ isAuthEnabled =}

{=# isAuthEnabled =}
const PASSWORD_FIELD = 'password'

{=/ isAuthEnabled =}
const createDbClient = () => {
  const prismaClient = new Prisma.PrismaClient()

  {=# isAuthEnabled =}

  prismaClient.$use(async (params, next) => {
    // Ensure strong plaintext password. Must come before hashing middleware.
    // Throws an EntityValidationError on the first validation that fails.
    if (params.model === '{= userEntityUpper =}' && params.action === 'create') {
        const data = params.args.data || {}

        const defaultValidations = [
          { name: 'email must be present', fn: data => !!data.email },
          { name: 'password must be present', fn: data => !!data.password },
          { name: 'password must be at least 8 characters', fn: data => data.password.length >= 8 },
          { name: 'password must contain a number', fn: data => /\d/.test(data.password) },
        ]

        let validations = params.args._waspSkipDefaultValidations ? [] : defaultValidations
        if (Array.isArray(params.args._waspCustomValidations)) {
          validations = validations.concat(params.args._waspCustomValidations)
        }

        for (const validation of validations) {
          if (!validation.fn(data)) {
            throw new EntityValidationError('{= userEntityUpper =}', validation.name)
          }
        }

        // Remove from downstream Prisma processing to avoid "Unknown arg" error
        delete params.args._waspSkipDefaultValidations
        delete params.args._waspCustomValidations
    }

    const result = next(params)

    return result
  })

  prismaClient.$use(async (params, next) => {
    // Make sure password is always hashed before storing to the database.
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

    const result = next(params)

    return result
  })

  {=/ isAuthEnabled =}
  return prismaClient
}

const dbClient = createDbClient()

export default dbClient
