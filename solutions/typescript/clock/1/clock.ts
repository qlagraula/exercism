export class Clock {
  #hour: number;
  #minutes: number;

  constructor(hour: number, minute = 0) {
    this.#hour = (hour + Math.floor(minute / 60)) % 24;
    this.#minutes = minute % 60;
  }

  public toString(): string {
    return `${this.#hour}${this.#minutes}`;
  }

  public plus(minutes: number): Clock {
    if (this.#minutes + minutes < 60) {
      this.#minutes += minutes;

      return this;
    }

    this.#hour += 1;
    this.#minutes = this.#minutes + minutes - 60;

    return this;
  }

  public minus(minutes: number): Clock {
    if (this.#minutes - minutes >= 0) {
      this.#minutes -= minutes;
      return this;
    }

    this.#hour -= 1;
    this.#minutes = this.#minutes - minutes + 60;

    return this;
  }

  public equals(other: Clock): boolean {
    return this.toString() === other.toString();
  }
}
