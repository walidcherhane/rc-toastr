export const darken = (color: string, amount: number) => {
  const usePound = color[0] === '#'
  const num = parseInt(color.slice(1), 16)
  let r = (num >> 16) + amount
  if (r > 255) r = 255
  else if (r < 0) r = 0
  let b = ((num >> 8) & 0x00ff) + amount
  if (b > 255) b = 255
  else if (b < 0) b = 0
  let g = (num & 0x0000ff) + amount
  if (g > 255) g = 255
  else if (g < 0) g = 0
  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
}
