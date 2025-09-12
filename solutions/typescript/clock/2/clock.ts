const MINUTES_IN_DAY = 24 * 60;

export class Clock {
  #minutes: number;

  constructor(hour: number, minute = 0) {
    this.#minutes = hour * 60 + minute;
  }

  public toString(): string {
    return `${String(Math.trunc(this.#minutes / 60)).padStart(2, "0")}:${String(this.#minutes % 60).padStart(2, "0")}`;
  }

  public plus(minutes: number): Clock {
    return new Clock(0, this.#minutes + minutes);
  }

  public minus(minutes: number): Clock {
    return new Clock(0, this.#minutes - minutes);
  }

  public equals(other: Clock): boolean {
    return this.toString() === other.toString();
  }
}
