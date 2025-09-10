export function decodedValue(value: string[]): number {
  const [first, second] = value.map(colorCode)
  return first * 10 + second
}

const colorCode = (color: string) => {
  return COLORS.indexOf(color)
}

export const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']