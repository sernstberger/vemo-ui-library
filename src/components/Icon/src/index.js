const fs = require('fs-extra')
const path = require('path')
const Mustache = require('mustache')
const iconsArray = require('./iconsArray')

var template = `
// ************************************************************ //
// ** DO NOT directly edit this file - it is auto-generated! ** //
// ************************************************************ //

import React from 'react'
import BuildIcon, { IconProps } from '../src/BuildIcon'

const {{ name }} = (props: IconProps) => (
  <BuildIcon
    {...props}
    path="{{ path }}"
  />
)

export default {{ name }}
`

const BUILD_PATH = path.join(__dirname, '..', './')

iconsArray.map(icon => {
  const OUTPUT_FILE = path.join(BUILD_PATH, `dist/${icon.name}.tsx`)
  const rendered = Mustache.render(template, { name: icon.name, path: icon.path })
  fs.outputFile(OUTPUT_FILE, rendered)
})
