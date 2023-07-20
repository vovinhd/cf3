import { helloRouter } from './router/hello'
import { postsRouter } from './router/posts'
import { createTRPCRouter } from './trpc'

export const appRouter = createTRPCRouter({
  hello: helloRouter,
  posts: postsRouter
})

// export type definition of API
export type AppRouter = typeof appRouter
