import PropTypes from 'prop-types'
import { maskFS } from '../../utils/fullstory'

const FSMask = ({ children, useWrapper, component }) => {
  return maskFS(children, ['string', 'number'].includes(typeof children) || useWrapper, component)
}

FSMask.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.number]).isRequired,
  useWrapper: PropTypes.bool,
  component: PropTypes.oneOf(["div", "span"])
}

FSMask.defaultProps = {
  useWrapper: false,
  component: null
}

export default FSMask
