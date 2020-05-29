import React from 'react'
import { Typography, InputAdornment, CircularProgress } from '@material-ui/core'
import Icon, { IconProps } from '../Icon'

export interface AdornmentProps {
  icon: IconProps | React.ReactNode
  position?: 'start' | 'end'
}

const Adornment = (props: AdornmentProps) => {
  const { icon, position = 'start' } = props

  console.log('!!!!!', icon)

  // const adornmentPosition = icon
  //   ? `${icon.position}Adornment`
  //   : 'startAdornment'
  return (
    <InputAdornment {...{ position }}>
      <Icon name={icon.name} />
    </InputAdornment>
  )
}

export default Adornment

// const adornment = (isLoading || icon) && {
//   [adornmentPosition]: (
//     <InputAdornment
//       position={(icon && icon.position) || 'start'}
//       className={isLarge ? classes.largeInput : ''}
//     >
//       {isLoading ? (
//         <CircularProgress size={20} />
//       ) : (
//         <Icon
//           color={icon!.color}
//           icon={icon.name}
//           size={isLarge ? 'inherit' : undefined}
//         />
//       )}
//     </InputAdornment>
//   )
// }
