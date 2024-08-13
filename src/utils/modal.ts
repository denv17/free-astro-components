import { isTouchDevice } from '../utils/utils'

export const openModal = (modal: HTMLDialogElement) => {
  const body = document.body

  body.style.overflow = 'hidden'
  modal.classList.remove('ac-modal--close')
  modal.showModal()

  if (isTouchDevice()) {
    enableTouchControls(modal)
  }

  modal.addEventListener(
    'click',
    (event) => {
      if (event.target === modal) {
        closeModal(modal)
      }
    },
    { once: true },
  )
}

export const closeModal = (modal: HTMLDialogElement) => {
  const body = document.body
  modal.close()
  if (isTouchDevice()) {
    disableTouchControls(modal)
  }
  setTimeout(() => {
    modal.classList.add('ac-modal--close')
    body.style.overflow = 'auto'
  }, 200)
}

const enableTouchControls = (modal: HTMLDialogElement) => {
  let startY = 0
  let currentY = 0
  let isScrolling = false

  const isScrollable = (element: HTMLElement) => {
    return element.scrollHeight > element.clientHeight
  }

  const getClosestScrollableElement = (element: HTMLElement) => {
    while (element && element !== modal) {
      if (isScrollable(element)) {
        return element
      }
      element = element.parentElement as HTMLElement
    }
    return null
  }

  const isScrollAtTop = (element: HTMLElement) => {
    return element.scrollTop === 0
  }

  const handleTouchStart = (event: TouchEvent) => {
    startY = event.touches[0].clientY
    const targetElement = event.target as HTMLElement
    const scrollableElement = getClosestScrollableElement(targetElement)

    if (scrollableElement && !isScrollAtTop(scrollableElement)) {
      isScrolling = true
    } else {
      isScrolling = false
    }
  }

  const handleTouchMove = (event: TouchEvent) => {
    if (isScrolling) return
    currentY = event.touches[0].clientY
    const translateY = Math.max(0, currentY - startY)

    modal.style.transition = 'none'
    modal.style.opacity = `${1 - translateY / 250}`
    modal.classList.remove('ac-modal--animated')
    modal.style.transform = `translateY(${translateY}px)`

    if (translateY > 250) {
      modal.close()
      modal.classList.add('ac-modal--animated')
      modal.classList.add('ac-modal--close')
    }
  }

  const handleTouchEnd = () => {
    modal.style.transform = 'translateY(0)'
    modal.style.opacity = '1'
    modal.style.transition = 'transform 0.2s ease-in-out'
  }

  modal.addEventListener('touchstart', handleTouchStart, { passive: true })
  modal.addEventListener('touchmove', handleTouchMove, { passive: true })
  modal.addEventListener('touchend', handleTouchEnd, { passive: true })
  ;(modal as any).handleTouchStart = handleTouchStart
  ;(modal as any).handleTouchMove = handleTouchMove
  ;(modal as any).handleTouchEnd = handleTouchEnd
}

const disableTouchControls = (modal: HTMLDialogElement) => {
  modal.removeEventListener('touchstart', (modal as any).handleTouchStart)
  modal.removeEventListener('touchmove', (modal as any).handleTouchMove)
  modal.removeEventListener('touchend', (modal as any).handleTouchEnd)
}
