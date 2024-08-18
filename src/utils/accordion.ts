export const setAccordionHeight = (
  accordions: NodeListOf<HTMLDetailsElement>,
) => {
  const originalStates = Array.from(accordions).map(
    (accordion) => accordion.open,
  )

  accordions.forEach((accordion) => {
    accordion.classList.remove('accordion-item--animated')
    resetAccordionHeight(accordion)
    assignHeight(accordion)
  })

  accordions.forEach((accordion, index) => {
    accordion.open = originalStates[index]
    accordion.classList.add('accordion-item--animated')
  })
}

const resetAccordionHeight = (accordion: HTMLDetailsElement) => {
  accordion.style.removeProperty('--ac-accordion-item-expanded')
  accordion.style.removeProperty('--ac-accordion-item-collapsed')
}

const assignHeight = (accordion: HTMLDetailsElement) => {
  accordion.open = false
  const collapsedHeight = accordion.offsetHeight

  accordion.open = true
  const expandedHeight = accordion.scrollHeight

  accordion.style.setProperty(
    '--ac-accordion-item-expanded',
    `${expandedHeight}px`,
  )
  accordion.style.setProperty(
    '--ac-accordion-item-collapsed',
    `${collapsedHeight}px`,
  )
}
