import React, { useState, useEffect } from 'react'

import { Lightbulb as LightBulb } from 'styled-icons/fa-regular/Lightbulb'
import { Lightbulb as DarkBulb } from 'styled-icons/fa-solid/Lightbulb'

import * as S from './styled'

const ThemeLightbulb = () => {
  const [theme, setTheme] = useState(null)

  const isLightMode = theme === 'light'

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  const Icon = isLightMode ? LightBulb : DarkBulb

  return (
    <S.ThemeBulbWrapper
      onClick={() => {
        window.__setPreferredTheme(isLightMode ? 'dark' : 'light')
      }}
    >
      <Icon size="2.4rem" title="Change Theme" />
    </S.ThemeBulbWrapper>
  )
}

export default ThemeLightbulb
