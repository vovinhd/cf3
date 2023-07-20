import { z } from 'zod'

import { createTRPCRouter, publicProcedure } from '../trpc'

export const postsRouter = createTRPCRouter({
  personalizedGreeting: publicProcedure
    .input(z.string())
    .query(({ ctx, input }) => {
      return 'Hello ' + input
    }),
  listPosts: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.post.findMany()
}),
})
