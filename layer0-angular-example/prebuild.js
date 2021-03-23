const fs = require('fs')

const BUILD_ID = new Date().getTime()
fs.writeFileSync('BUILD_ID', BUILD_ID)
