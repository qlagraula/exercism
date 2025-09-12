export class GradeSchool {
  #roster = new Map<number, string[]>();

  roster(): Record<number, string[]> {
    return Object.fromEntries(this.#roster);
  }

  add(name: string, grade: number) {
    this.#roster.set(grade, [...(this.#roster.get(grade) ?? []), name].sort());
  }

  grade(grade: number) {
    return this.#roster.get(grade) ?? [];
  }
}
