const getPathname = () => {
  const pathname = typeof window !== 'undefined' && window.location.pathname
  return pathname
}

export default getPathname
