export function toRna(dna: string): string {
  const hasInvalidChars = dna.split('').some(nucleotide => !map[nucleotide]);
  if (hasInvalidChars) {
    throw new Error('Invalid input DNA.')
  }
  
  return dna.split('').map(nucleotide => map[nucleotide]).join('');
}

const map: { [key: string]: string } = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
}