export class Matrix {
  #rows: number[][] = [];
  #columns: number[][] = [];

  constructor(config: string) {
    const rows = config.split("\n");
    this.#rows = rows.map((row) =>
      row.split(" ").map((value, index) => {
        const number = Number(value);
        this.#columns[index] = this.#columns[index]
          ? [...this.#columns[index], number]
          : [number];
        return number;
      }),
    );
  }

  get rows(): number[][] {
    return this.#rows;
  }

  get columns(): number[][] {
    return this.#columns;
  }
}
