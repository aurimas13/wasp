export const errorMessage = (e) => {
  return `Error: ${e.message} ${e.data && e.data.message ? '- Details: ' + e.data.message : ''}`
}
