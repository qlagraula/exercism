export function hey(message: string): string {
  const trimmedMessage = message.trim();
  const isQuestion = trimmedMessage.endsWith('?');
  const hasCharacters = /\w/.test(trimmedMessage);
  const isShouting = /[A-Z]/.test(trimmedMessage) && trimmedMessage === trimmedMessage.toUpperCase();

  if(isQuestion && isShouting) return "Calm down, I know what I'm doing!"
  if(isQuestion) return "Sure."
  if(isShouting) return "Whoa, chill out!"
  if(!hasCharacters) return "Fine. Be that way!"
  return "Whatever."
}
