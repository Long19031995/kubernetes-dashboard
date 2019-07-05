export const getAge = (timestamp) => {
  const numberDay = Math.round((new Date() - new Date(timestamp)) / 86400000)

  if (numberDay > 1) {
    return numberDay + ' days'
  } else {
    return numberDay + ' day'
  }
}