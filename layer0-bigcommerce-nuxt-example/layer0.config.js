'use strict';

// This file was automatically added by layer0 deploy.
// You should commit this file to source control.

module.exports = {
  backends: {},
  includeNodeModules: true,
  connector: '@layer0/nuxt',
  server: {
    path: './dist/_layer0/server.js'
  },
  includeFiles: {
    'config/**': true,
    'api/**': true,
    'utils/**': true,
    '.env': true
  }
};
