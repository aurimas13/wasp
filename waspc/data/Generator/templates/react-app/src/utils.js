export const showError = (e) => {
  window.alert(`Error: ${e.message} ${(e.data ? '\n' + JSON.stringify(e.data) : '')}`)
}
