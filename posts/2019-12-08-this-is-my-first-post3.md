---
title: This is my first post
description: And this is his description
date: 2019-12-08 03:56:23
tags: [dev, javascript, react]
---

## This is `an h2`

```jsx{numberLines: true}
const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const toggleMenu = () => setMenuIsOpen(!menuIsOpen)
  const closeMenu = () => setMenuIsOpen(false)
  const mastheadInfo = info[getPathname()] || info['/']

  return (
    <S.HeaderWrapper>
      <S.HeaderPresentation>
        <Me />
        <Masthead addInfo={mastheadInfo} />
        <S.HeaderLinks>
          <ThemeBulb />
          <SocialLinks />
        </S.HeaderLinks>

        {/* Mobile only - toggle MenuLinks */}
        <S.HeaderToggleMenu title="Open Menu" onClick={toggleMenu}>
          {!menuIsOpen && <MenuIcon />}
          {menuIsOpen && <CloseIcon />}
        </S.HeaderToggleMenu>
      </S.HeaderPresentation>

      <MenuLinks isOpen={menuIsOpen} closeMenu={closeMenu} />
    </S.HeaderWrapper>
  )
}
```

Isso é um texto que vai ter `Snackbar(teste)` inline ta ligado.

```
E isso aqui é um bloco de código
```

> Isso aqui é um código `const letter = 'a'` só que em blockquote

![Desert](/desert.jpg)

### This is an h3

Lorem ipsum dolor _sit amet consectetur_ adipisicing elit. Adipisci, maxime et ipsa id, minima nam impedit libero ut neque hic sed ex dolor accusantium, qui eveniet? Asperiores [this is a link](https://link) corrupti quas placeat illo, nostrum maiores, aperiam, eum aliquam perspiciatis quos laboriosam vero?

Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, maxime et ipsa id, minima nam impedit libero ut neque hic sed ex dolor accusantium, qui eveniet? Asperiores corrupti quas placeat illo, nostrum maiores, aperiam, eum aliquam perspiciatis quos laboriosam vero?

> Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, maxime et ipsa id, minima nam impedit libero ut neque hic sed ex dolor accusantium, qui eveniet? Asperiores corrupti quas placeat illo, nostrum maiores, aperiam, eum aliquam perspiciatis quos laboriosam vero?

Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, maxime et ipsa id, minima nam impedit libero ut neque hic sed ex dolor accusantium, qui eveniet? Asperiores corrupti quas placeat illo, nostrum maiores, aperiam, eum aliquam perspiciatis quos laboriosam vero?

- this is
- a fuckin
- unordered
  - list

---

1. an
1. ordered
1. list
   1. ok
   1. ok
   1. ok
