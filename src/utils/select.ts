export const openSelect = (
  event: Event,
  options: NodeListOf<HTMLButtonElement>,
  select: HTMLSelectElement
): Promise<void> => {
  event.preventDefault()
  select.classList.add('is-open')

  return new Promise((resolve) => {
    let hasSelectedOption = false

    options.forEach((option: HTMLButtonElement) => {
      option.removeAttribute('disabled')
      if (option.classList.contains('is-selected')) {
        hasSelectedOption = true
        option.focus()
      }
    })

    if (!hasSelectedOption && options.length > 0) {
      options[0].focus()
    }

    setTimeout(() => resolve(), 0)
  })
}

export const closeSelect = (
  options: NodeListOf<HTMLButtonElement>,
  select: HTMLSelectElement
) => {
  select.classList.remove('is-open')
  options.forEach((option: HTMLButtonElement) => {
    option.setAttribute('disabled', 'disabled')
  })
}

export const selectOption = (
  index: number,
  options: NodeListOf<HTMLButtonElement>,
  option: Element,
  select: HTMLSelectElement
) => {
  select.selectedIndex = index + 1
  select.classList.add('is-selected')
  options.forEach((option: Element) => option.classList.remove('is-selected'))
  option.classList.add('is-selected')
}

export const handleDocumentMousedown = (
  event: MouseEvent,
  options: NodeListOf<HTMLButtonElement>,
  select: HTMLSelectElement,
  popover: HTMLElement,
  isOpen: boolean,
  setIsOpen: (isOpen: boolean) => void
) => {
  if (!isOpen) return

  const target = event.target as HTMLElement | null
  const insideSelect = select.contains(target)
  const insidePopover = popover?.contains(target)

  if (!insideSelect && !insidePopover) {
    closeSelect(options, select)
    setIsOpen(false)
  }
}

export const handleDocumentKeydown = (
  event: KeyboardEvent,
  options: NodeListOf<HTMLButtonElement>,
  select: HTMLSelectElement,
  isOpen: boolean,
  setIsOpen: (isOpen: boolean) => void
) => {
  if (!isOpen) return

  const activeElement = document.activeElement as HTMLElement
  const focusedOption = Array.from(options).indexOf(
    activeElement as HTMLButtonElement
  )

  if (event.key === 'Escape') {
    closeSelect(options, select)
    setIsOpen(false)
  }

  if (event.key === 'ArrowDown') {
    event.preventDefault()
    focusNextOption(focusedOption, options, 1)
  }
  if (event.key === 'ArrowUp') {
    event.preventDefault()
    focusNextOption(focusedOption, options, -1)
  }
}

export const focusNextOption = (
  currentIndex: number,
  options: NodeListOf<HTMLButtonElement>,
  direction: number
) => {
  if (currentIndex === -1) return
  const nextIndex =
    (currentIndex + direction + options.length) % options.length
  options[nextIndex].focus()
}