const fs = require('fs-extra')
const path = require('path')
const component = require('./component')
const Mustache = require('mustache')

// const fileString = Mustache.render(template, {
//   paths,
//   componentName: getComponentName(destPath),
// });

var template = `import React from 'react'

const Component = () => {
  return (
    <div>alksjflaksjf</div>
  )
}

export default Component`
var rendered = Mustache.render(template, { name: 'Luke' })

const array = ['thing', 'blah']

const BUILD_PATH = path.join(__dirname, '..', 'foo')

array.map(yep => {
  const OUTPUT_FILE = path.join(BUILD_PATH, `finished/${yep}.js`)
  fs.outputFile(OUTPUT_FILE, rendered)
})
