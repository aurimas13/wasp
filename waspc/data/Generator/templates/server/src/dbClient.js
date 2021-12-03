{{={= =}=}}
import Prisma from '@prisma/client'

import { registerAuthMiddleware } from './core/auth/middleware.js'

const createDbClient = () => {
  const prismaClient = new Prisma.PrismaClient()

  {=# isAuthEnabled =}

  registerAuthMiddleware(prismaClient)

  {=/ isAuthEnabled =}

  return prismaClient
}

const dbClient = createDbClient()

export default dbClient
