export class GradeSchool {
  #roster = new Map<number, string[]>();

  roster(): Record<number, string[]> {
    return JSON.parse(JSON.stringify(Object.fromEntries(this.#roster)));
  }

  add(name: string, grade: number) {
    this.deduplicateName(name);
    this.#roster.set(grade, [...(this.#roster.get(grade) ?? []), name].sort());
  }

  private deduplicateName(name: string) {
    for (const [grade, names] of this.#roster.entries()) {
      this.#roster.set(
        grade,
        names.filter((n) => n !== name),
      );
    }
  }

  grade(grade: number) {
    return (this.#roster.get(grade) ?? []).slice();
  }
}
