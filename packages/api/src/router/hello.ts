import { z } from 'zod'

import { createTRPCRouter, publicProcedure } from '../trpc'

export const helloRouter = createTRPCRouter({
  personalizedGreeting: publicProcedure
    .input(z.string())
    .query(({ ctx, input }) => {
      return 'Hello ' + input
    }),
  greeting: publicProcedure.query(({ ctx }) => {
    return 'Hello from tRPC'
  }),
})
