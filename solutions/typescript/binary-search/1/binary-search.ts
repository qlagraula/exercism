export function find(haystack: number[], needle: number): number | never {
  const middleIndex = Math.floor(haystack.length / 2);
  const middleValue = haystack[middleIndex];

  if (haystack.length === 0) {
    throw new Error("Value not in array");
  }

  if (middleValue === needle) {
    return middleIndex;
  }

  if (middleValue > needle) {
    return find(haystack.slice(0, middleIndex), needle);
  }

  const result = find(haystack.slice(middleIndex + 1), needle);
  return result + middleIndex + 1;
}
