import { helloRouter } from './router/hello'
import { postRouter } from './router/posts'
import { createTRPCRouter } from './trpc'

export const appRouter = createTRPCRouter({
  post: postRouter,
  hello: helloRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
