import React from 'react'
import * as Something from './index'

const Icon = (props: any) => {
  const { name } = props
  const Bar = Something[name]
  return <Bar />
}

export default Icon
