export const stringToHTML = function (str: string) {
  const parser = new DOMParser()
  const doc = parser.parseFromString(str, 'text/html')
  return doc
}
