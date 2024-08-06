export const handleTabButtonClick = (button: HTMLButtonElement) => {
  const tab = button.closest('[data-tab]') as HTMLElement

  const tabButtons = tab.querySelectorAll(
    ':scope > [data-tab-header] [data-tab-button]',
  ) as NodeListOf<HTMLElement>
  const tabPanes = tab.querySelectorAll(
    ':scope > [data-tab-body] > [data-tab-pane]',
  ) as NodeListOf<HTMLElement>

  desactivateAll(tabButtons, tabPanes)
  activateTab(button, tabButtons, tabPanes)
}

const desactivateAll = (
  tabButtons: NodeListOf<HTMLElement>,
  tabPanes: NodeListOf<HTMLElement>,
) => {
  tabButtons.forEach((button) => {
    button.setAttribute('aria-selected', 'false')
  })
  tabPanes.forEach((pane) => {
    pane.setAttribute('aria-hidden', 'true')
  })
}

const activateTab = (
  button: HTMLButtonElement,
  tabButtons: NodeListOf<HTMLElement>,
  tabPanes: NodeListOf<HTMLElement>,
) => {
  const index = Array.from(tabButtons).indexOf(button)

  button.setAttribute('aria-selected', 'true')
  if (tabPanes[index]) {
    tabPanes[index].setAttribute('aria-hidden', 'false')
  }
}
