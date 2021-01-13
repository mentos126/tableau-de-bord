export const removeHtmlElement = function (formElement: Element, selectors: string) {
  formElement.querySelectorAll(selectors).forEach(element => {
    element.parentNode.removeChild(element)
  })
}
