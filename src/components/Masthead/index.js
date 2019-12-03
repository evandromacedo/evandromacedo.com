import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const Masthead = ({ addInfo }) => (
  <S.MastheadWrapper>
    <S.MastheadHeading>Evandro</S.MastheadHeading>
    <S.MastheadLowerText>
      <S.MastheadSubheading>Macedo</S.MastheadSubheading>
      <S.MastheadAddInfo>{addInfo}</S.MastheadAddInfo>
    </S.MastheadLowerText>
  </S.MastheadWrapper>
)

Masthead.defaultProps = {
  addInfo: "'s random thoughts",
}

Masthead.propTypes = {
  addInfo: PropTypes.string,
}

export default Masthead
