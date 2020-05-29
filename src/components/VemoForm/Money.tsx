import React from 'react'
import Number from './Number'

const Money = (props: any) => {
  return (
    <Number {...props} decimalScale={2} icon={{name: "Money"}} />
  )
}

export default Money
