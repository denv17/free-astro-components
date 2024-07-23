export const DOMLoaded = (callback: () => void) => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback)
  } else {
    callback()
  }
}

export const toggleInputPassword = (button: Element, input: HTMLInputElement) => {
  if (button.classList.contains('is-visible')) {
    input.type = 'password'
    button.classList.remove('is-visible')
  } else {
    input.type = 'text'
    button.classList.add('is-visible')
  }
}