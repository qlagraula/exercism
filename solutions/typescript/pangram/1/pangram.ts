export function isPangram(sentence: string): boolean {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const lowerCaseSentence = sentence.toLowerCase()
  for (const char of alphabet) {
    if (!lowerCaseSentence.includes(char)) {
      return false
    }
  }
  return true
}
