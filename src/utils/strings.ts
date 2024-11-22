export const clearSymbolOfText = (text?: string) => {
  if (!text) return ''
  return text.replace(/(\W)/gm, ' ').trim()
}

export const toCapitalize = (text?: string) => {
  if (!text) return ''
  return text[0].toUpperCase() + text.slice(1).toLowerCase()
}

export const toSnakeCase = (text?: string) => {
  if (!text) return ''
  return clearSymbolOfText(text)
    .split(' ')
    .filter((value) => value)
    .join('_')
}
