import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styled'

const Masthead = ({ addInfo }) => (
  <S.MastheadWrapper>
    {/* Desktop Masthead */}
    <S.MastheadHeading>Evandro</S.MastheadHeading>
    <S.MastheadLowerText>
      <S.MastheadSubheading>Macedo</S.MastheadSubheading>
      <S.MastheadAddInfo>'s {addInfo}</S.MastheadAddInfo>
    </S.MastheadLowerText>

    {/* Mobile Masthead */}
    <S.MastheadMobile to="/">
      Evandro Macedo<S.MastheadAddInfoMobile>'s {addInfo}</S.MastheadAddInfoMobile>
    </S.MastheadMobile>
  </S.MastheadWrapper>
)

Masthead.defaultProps = {
  addInfo: 'random thoughts',
}

Masthead.propTypes = {
  addInfo: PropTypes.string,
}

export default Masthead
