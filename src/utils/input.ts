export const toggleInputPassword = (
  button: Element,
  input: HTMLInputElement,
) => {
  if (button.getAttribute('data-is-visible') === 'true') {
    input.type = 'password'
    button.setAttribute('data-is-visible', 'false')
  } else {
    input.type = 'text'
    button.setAttribute('data-is-visible', 'true')
  }
}
