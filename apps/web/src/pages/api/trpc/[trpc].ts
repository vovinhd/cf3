/**
 * This file contains tRPC's HTTP response handler
 */
import * as trpcNext from '@trpc/server/adapters/next'
import { createTRPCContext } from 'api'
import { appRouter } from 'api'
import { NextApiResponse, NextApiRequest } from 'next/types'

// export default trpcNext.createNextApiHandler({
//   router: appRouter,
//   /**
//    * @link https://trpc.io/docs/context
//    */
//   createContext: createTRPCContext,
//   // /**
//   //  * @link https://trpc.io/docs/error-handling
//   //  */
//   // onError({ error }) {
//   //   if (error.code === 'INTERNAL_SERVER_ERROR') {
//   //     // send to bug reporting
//   //     console.error('Something went wrong', error)
//   //   }
//   // },
//   // /**
//   //  * Enable query batching
//   //  */
//   // batching: {
//   //   enabled: true,
//   // },

//   // /**
//   //  * @link https://trpc.io/docs/caching#api-response-caching
//   //  */
//   // // responseMeta() {
//   // //   // ...
//   // // },
// })

const allowCors = (fn) => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT',
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
  )
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  return await fn(req, res)
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Let the tRPC handler do its magic

  return trpcNext.createNextApiHandler({
    router: appRouter,
    createContext: createTRPCContext,
  })(req, res)
}

export default allowCors(handler)
