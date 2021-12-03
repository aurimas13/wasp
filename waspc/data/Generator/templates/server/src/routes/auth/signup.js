{{={= =}=}}
import Prisma from '@prisma/client'
import prisma from '../../dbClient.js'
import { handleRejection } from '../../utils.js'
import AuthError from '../../core/AuthError.js'
import HttpError from '../../core/HttpError.js'

export default handleRejection(async (req, res) => {
  const userFields = req.body || {}

  try {
    await prisma.{= userEntityLower =}.create({ data: userFields })
    res.send()
  } catch(e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      throw new HttpError(422, 'Save failed', { prisma_error_code: e.code })
    } else if (e instanceof AuthError) {
      throw new HttpError(422, 'Validation failed', { entity: e.entityName, message: e.message })
    }
    throw new HttpError(500)
  }

})
