import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

const Link = ({ children, to }) => <S.Link to={to}>{children}</S.Link>

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Link
