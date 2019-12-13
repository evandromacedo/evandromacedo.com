import React from 'react'
import { Link } from 'gatsby'

const invalidPaths = ['/about/', '/projects/', '/search/']

const isActive = className => ({ location, isCurrent }) => {
  const activeClassObject = { className: className + ' active' }

  if (isCurrent) return activeClassObject
  if (!invalidPaths.includes(location.pathname)) return activeClassObject
  return { className }
}

const CustomBlogLink = ({ className, ...props }) => (
  <Link getProps={isActive(className)} {...props}>
    {props.children}
  </Link>
)

export default CustomBlogLink
