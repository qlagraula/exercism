class NameDatabase {
  static #letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  #availableNames: string[] = [];

  constructor() {
    this.releaseNames();
  }

  public releaseNames(): void {
    this.#availableNames = this.allPossibleNames();
  }

  public allPossibleNames(): string[] {
    const names = [];

    for (const a of NameDatabase.#letters) {
      for (const b of NameDatabase.#letters) {
        for (let i = 0; i < 1000; i++) {
          names.push(`${a}${b}${i.toString().padStart(3, "0")}`);
        }
      }
    }

    return names;
  }

  public fetchNewName(): string {
    if (this.#availableNames.length === 0) throw "no more names";

    const randomPosition = Math.floor(
      Math.random() * this.#availableNames.length,
    );

    const name = this.#availableNames[randomPosition];

    const lastName = this.#availableNames.pop();

    if (lastName && name !== lastName)
      this.#availableNames[randomPosition] = lastName;

    return name;
  }
}

const RobotsDB = new NameDatabase();

export class Robot {
  #name!: string;

  constructor() {
    this.resetName();
  }

  public get name(): string {
    return this.#name;
  }

  public resetName(): void {
    this.#name = RobotsDB.fetchNewName();
  }

  public static releaseNames(): void {
    RobotsDB.releaseNames();
  }
}
