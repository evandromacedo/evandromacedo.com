const coffeeCount = timeToRead => {
  if (timeToRead <= 5) return '☕️'
  return Array.from({ length: Math.floor(timeToRead / 5) }).map(() => '☕️')
}

export default coffeeCount
