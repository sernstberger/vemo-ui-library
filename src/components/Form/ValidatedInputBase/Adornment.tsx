import React from 'react'
import { Typography, InputAdornment, CircularProgress } from '@material-ui/core'
import Icon, { IconProps } from '../../Icon'

interface AdornmentProps {
  icon: IconProps | React.ReactNode
  position?: 'start' | 'end'
  // color?: string
}

const Adornment = (props: AdornmentProps) => {
  const { icon, position = 'start', color = 'inherit' } = props

  // const adornmentPosition = icon
  //   ? `${icon.position}Adornment`
  //   : 'startAdornment'
  return {
    startAdornment: (
      <InputAdornment
        position={(icon && icon.position) || 'start'}
        // className={isLarge ? classes.largeInput : ''}
      >
        {isANodeandstuff ? (
          <CircularProgress size={20} />
        ) : (
          <Icon
            color={icon!.color}
            icon={icon!.icon}
            // size={isLarge ? 'inherit' : undefined}
          />
        )}
      </InputAdornment>
    )
  }
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
