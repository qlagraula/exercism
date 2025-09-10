export class DnDCharacter {
  public hitpoints: number
  public strength: number
  public dexterity: number
  public constitution: number
  public intelligence: number
  public wisdom: number
  public charisma: number

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore()
    this.dexterity = DnDCharacter.generateAbilityScore()
    this.constitution = DnDCharacter.generateAbilityScore()
    this.intelligence = DnDCharacter.generateAbilityScore()
    this.wisdom = DnDCharacter.generateAbilityScore()
    this.charisma = DnDCharacter.generateAbilityScore()
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution)
  }

  public static generateAbilityScore(): number {
    const dices = Array<number>(4)
      .fill(0)
      .map(() => DnDCharacter.generateRandomDiceRollScore())
      .sort((a, b) => a - b)

    dices.shift()
    return dices.reduce((a, b) => a + b, 0)
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2)
  }

  private static generateRandomDiceRollScore(): number {
    return Math.floor(Math.random() * 6) + 1
  }
}
