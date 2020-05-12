const fs = require('fs-extra')
const path = require('path')
const Mustache = require('mustache')
const iconsArray = require('./iconsArray')

var template = `
// ************************************************************ //
// ** DO NOT directly edit this file - it is auto-generated! ** //
// ************************************************************ //

import React from 'react'
import Icon, { IconProps } from './Icon'

const {{ name }} = (props: IconProps) => (
  <Icon
    {...props}
    path="{{ path }}"
  />
)

export default {{ name }}
`

const BUILD_PATH = path.join(__dirname, '..', './')

iconsArray.map(icon => {
  const OUTPUT_FILE = path.join(BUILD_PATH, `src/${icon.name}.tsx`)
  const rendered = Mustache.render(template, { name: icon.name, path: icon.path })
  fs.outputFile(OUTPUT_FILE, rendered)
})
