export function commands(value: number): string[] {
  const actions = ["wink", "double blink", "close your eyes", "jump"];
  const result: string[] = [];

  for (let i = 0; i < actions.length; i++) {
    if (value & (1 << i)) {
      result.push(actions[i]);
    }
  }

  if (value & (1 << actions.length)) {
    result.reverse();
  }

  return result;
}
