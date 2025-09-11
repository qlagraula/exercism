export class Matrix {
  #matrix: number[][] = [];

  constructor(config: string) {
    const rows = config.split("\n");
    this.#matrix = rows.map((row) => row.split(" ").map(Number));
  }

  get rows(): number[][] {
    return this.#matrix;
  }

  get columns(): number[][] {
    return this.#matrix[0].map((_, colIndex) =>
      this.#matrix.map((row) => row[colIndex]),
    );
  }
}
