export const ElObserver = (Selector: string, Callback: Function) => {
  const Observer = new MutationObserver((mutationList, observer) => {
    const El = document.querySelector(Selector) as HTMLElement | null
    if (El) {
      Callback(El)
      observer.disconnect()
    }
  })

  Observer.observe(document.body, { childList: true, subtree: true })
}
