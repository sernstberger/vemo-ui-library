const fs = require('fs-extra')
const path = require('path')

const array = ['thing', 'blah']

const BUILD_PATH = path.join(__dirname, '..', 'foo')

array.map(yep => {
  const OUTPUT_PATH = path.join(BUILD_PATH, `bar/${yep}.js`)
  fs.outputFile(OUTPUT_PATH, '<div>alskdfj</div>')
})
