export const toggleInputPassword = (button: Element, input: HTMLInputElement) => {
  if (button.classList.contains('is-visible')) {
    input.type = 'password'
    button.classList.remove('is-visible')
  } else {
    input.type = 'text'
    button.classList.add('is-visible')
  }
}