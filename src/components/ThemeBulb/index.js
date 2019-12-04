import React, { useState, useEffect, memo } from 'react'

import { Lightbulb } from 'styled-icons/fa-regular/Lightbulb'

import * as S from './styled'

const ThemeLightbulb = () => {
  const [theme, setTheme] = useState(null)

  const isLightMode = theme === 'light'

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  const setPreferredTheme = () => {
    window.__setPreferredTheme(isLightMode ? 'dark' : 'light')
  }

  return (
    <S.ThemeBulbWrapper onClick={setPreferredTheme}>
      <Lightbulb size="2.4rem" title="Change Theme" />
    </S.ThemeBulbWrapper>
  )
}

export default memo(ThemeLightbulb)
