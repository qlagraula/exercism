export class Robot {
  static #usedNames = new Set<string>();
  #name: string;

  constructor() {
    do {
      this.#name = this.generateName();
    } while (Robot.#usedNames.has(this.#name));

    Robot.#usedNames.add(this.#name);
  }

  private generateName(): string {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const digits = "0123456789";
    let name = "";

    for (let i = 0; i < 2; i++) {
      name += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    for (let i = 0; i < 3; i++) {
      name += digits.charAt(Math.floor(Math.random() * digits.length));
    }

    return name;
  }

  public get name(): string {
    return this.#name;
  }

  public resetName(): void {
    this.#name = this.generateName();
  }

  public static releaseNames(): void {
    Robot.#usedNames.clear();
  }
}
