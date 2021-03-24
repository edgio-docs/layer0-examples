import * as sapper from '@sapper/app'
import installDevtools from '@layer0/devtools/install'
import { install as installSW } from '@layer0/prefetch/window'

sapper.start({
  target: document.querySelector('#sapper'),
})

installDevtools()
installSW()
