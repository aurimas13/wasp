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
  } catch(e) {
    if (e instanceof AuthError) {
      throw new HttpError(422, 'Validation failed', { message: e.message })
    } else if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2002') {
      // Warn about unique constraint for email already existing
      throw new HttpError(422, 'Save failed',
        {
          message: `A user with the same ${e.meta.target.join(', ')} already exists.`,
          target: e.meta.target
        })
    } else {
      // Do not add any extra Prisma error info for security sake
      throw new HttpError(422, 'Save failed')
    }
  }

  res.send()
})
