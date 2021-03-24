import installDevtools from '@layer0/devtools/install'
import install from '@layer0/prefetch/window/install'

document.addEventListener('DOMContentLoaded', () => {
  console.info('[layer0 browser] DOMContentLoaded -> running install()')
  install({
    forcePrefetchRatio: 0.5 // forcely prefetch 50% of non-cached content for higher hit rate
  })
  console.info('[layer0 browser] DOMContentLoaded -> running installDevtools()')
  installDevtools()
})
