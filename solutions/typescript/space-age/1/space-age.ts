const earthOrbitalPeriodInSeconds = 365.25 * 24 * 60 * 60

const planetOrbitalPeriods = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
} as const

export function age(
  planet: keyof typeof planetOrbitalPeriods,
  seconds: number
): number {
  const ageInEarthYears = seconds / earthOrbitalPeriodInSeconds
  return parseFloat((ageInEarthYears / planetOrbitalPeriods[planet]).toFixed(2))
}
