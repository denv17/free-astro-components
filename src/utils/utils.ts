export const DOMLoaded = (callback: () => void) => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback)
  } else {
    callback()
  }
}

export const isTouchDevice = () => {
  return window.matchMedia('(pointer: coarse)').matches
}
