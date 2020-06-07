import React from 'react'
import Number from './Number'

const Percentage = (props: any) => {
  return (
    <Number {...props} icon={{name: "Money", position: 'end'}} />
  )
}

export default Percentage
