import React, { useState, useEffect } from 'react'
import { Lightbulb } from 'styled-icons/fa-regular/Lightbulb'
import * as S from './styled'

const ThemeLightbulb = () => {
  const [theme, setTheme] = useState(null)

  const isLightMode = theme === 'light'

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChangeCallbacks.push(() => {
      setTheme(window.__theme)
    })
  }, [])

  const setPreferredTheme = () => {
    window.__setPreferredTheme(isLightMode ? 'dark' : 'light')
  }

  return (
    <S.ThemeBulbWrapper onClick={setPreferredTheme} title="Change Theme">
      <Lightbulb size="2.4rem" />
    </S.ThemeBulbWrapper>
  )
}

export default ThemeLightbulb
