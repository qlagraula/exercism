export function isPangram(sentence: string): boolean {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
  const lowerCaseSentence = sentence.toLowerCase()

  return alphabet.every((letter) => lowerCaseSentence.includes(letter))
}
