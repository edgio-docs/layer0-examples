// This file was automatically added by layer0 deploy.
// You should commit this file to source control.
import { Router } from '@layer0/core/router'
import { sapperRoutes } from '@layer0/sapper'
import getPrerenderRequests from './layer0/getPrerenderRequests'
import { API_CACHE_HANDLER, SSR_CACHE_HANDLER } from './layer0/cache'

export default new Router()
  .prerender(getPrerenderRequests)
  .match('/api/:build_id/:path*', API_CACHE_HANDLER)
  .match('/', SSR_CACHE_HANDLER)
  .match('/category/:name', SSR_CACHE_HANDLER)
  .match('/product/:name', SSR_CACHE_HANDLER)
  .use(sapperRoutes) // automatically adds routes for all files under /src/routes
