import React from 'react'

import Me from '../Me'
import Masthead from '../Masthead'
import SocialLinks from '../SocialLinks'
import ThemeBulb from '../ThemeBulb'
import MenuLinks from '../MenuLinks'

const Header = () => (
  <div
    style={{
      // maxWidth: '1138px',
      // margin: '0 auto',
      // padding: '16px',
      textAlign: 'center',
      display: 'grid',
      // gridAutoFlow: 'column',
      gridTemplateColumns: 'auto 1fr auto',
      alignItems: 'end',
      gridGap: '1.6rem',
    }}
  >
    <Me />
    <Masthead />
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        height: '100%',
      }}
    >
      <ThemeBulb />
      <SocialLinks />
    </div>
    <MenuLinks />
  </div>
)

export default Header
