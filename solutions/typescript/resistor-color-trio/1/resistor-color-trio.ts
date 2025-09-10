export function decodedResistorValue([color1, color2, exponent]: string[]): string {

  const resistance = Number(`${colorCodes[color1]}${colorCodes[color2]}${ '0'.repeat(colorCodes[exponent]) }`)
  const {unit, value} = getUnit(resistance)
  
  return `${value} ${unit}ohms`
}

const colorCodes: { [color: string]: number } = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
}

const getUnit = (value: number): {unit:string, value: number} => {
  if (value >= 1e9) return {unit: 'giga', value: value / 1e9}
  if (value >= 1e6) return {unit: 'mega', value: value / 1e6}
  if (value >= 1e3) return {unit: 'kilo', value: value / 1e3}
  return {unit: '', value}
}