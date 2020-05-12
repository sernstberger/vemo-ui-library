import React, { isValidElement } from 'react'
import clsx from 'clsx'

// Caveat, this will not work with connected components and prevents render comparisions as
// each clone is technically a new instance.
// You'll want utilize at the deepest node possible for maximum props,
// you may need to implement differently if your render tree has advanced behaviors.

const maskFS = (Component, useWrapper = false, component = "span") => {
  if (useWrapper && (isValidElement(Component) || typeof Component === 'string' || typeof Component === 'number')) {
    return maskFS(React.createElement(component || "span", {}, [Component]))
  }

  if (isValidElement(Component)) {
    return React.cloneElement(Component, {
      className: clsx('fs-block', Component.props.className)
    })
  }

  // eslint-disable-next-line no-console
  console.warn(`Unable to mask [${typeof Component}]`)
  return Component
}

const noop = null

export { maskFS, noop }
