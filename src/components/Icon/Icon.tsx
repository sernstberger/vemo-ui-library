import React from 'react'
import * as IconList from './index'

const Icon = (props: any) => {
  const { name } = props
  const SelectedIcon = IconList[name]
  return <SelectedIcon />
}

export default Icon
