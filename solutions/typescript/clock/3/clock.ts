const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const DAY = HOURS_IN_DAY * MINUTES_IN_HOUR;

export class Clock {
  #time: number;

  constructor(hour: number, minutes = 0) {
    const time = (hour * 60 + minutes) % DAY;

    this.#time = time < 0 ? time + DAY : time;
  }

  public toString(): string {
    return `${String(Math.trunc(this.#time / MINUTES_IN_HOUR)).padStart(2, "0")}:${String(this.#time % MINUTES_IN_HOUR).padStart(2, "0")}`;
  }

  public plus(minutes: number): Clock {
    return new Clock(0, this.#time + minutes);
  }

  public minus(minutes: number): Clock {
    return new Clock(0, this.#time - minutes);
  }

  public equals(other: Clock): boolean {
    return this.toString() === other.toString();
  }
}
