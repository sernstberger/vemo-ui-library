const fs = require('fs-extra')
const path = require('path')
const component = require('./component')
const Mustache = require('mustache')

// const fileString = Mustache.render(template, {
//   paths,
//   componentName: getComponentName(destPath),
// });

var template = `import React from 'react'

const {{ name }} = () => {
  return (
    <div>alksjflaksjf {{ name }}</div>
  )
}

export default {{ name }}`

const array = ['thing', 'blah']

const BUILD_PATH = path.join(__dirname, '..', 'foo')

array.map(yep => {
  const OUTPUT_FILE = path.join(BUILD_PATH, `finished/${yep}.js`)
  const rendered = Mustache.render(template, { name: yep })
  fs.outputFile(OUTPUT_FILE, rendered)
})
