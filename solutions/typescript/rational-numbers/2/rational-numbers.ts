export class Rational {
  constructor(
    public numerator: number,
    public denominator: number,
  ) {
    if (this.denominator === 0) throw new Error("division by zero");

    if (this.numerator === 0) this.denominator = 1;

    if (this.denominator < 0) {
      this.numerator *= -1;

      this.denominator *= -1;
    }
  }

  add(rational: Rational) {
    return new Rational(
      this.numerator * rational.denominator +
        rational.numerator * this.denominator,
      this.denominator * rational.denominator,
    );
  }

  sub(rational: Rational) {
    return new Rational(
      this.numerator * rational.denominator -
        rational.numerator * this.denominator,
      this.denominator * rational.denominator,
    );
  }

  mul(rational: Rational) {
    return new Rational(
      this.numerator * rational.numerator,
      this.denominator * rational.denominator,
    ).reduce();
  }

  div(rational: Rational) {
    return new Rational(
      this.numerator * rational.denominator,
      this.denominator * rational.numerator,
    );
  }

  abs() {
    return new Rational(
      Math.abs(this.numerator),
      Math.abs(this.denominator),
    ).reduce();
  }

  exprational(n: number) {
    if (n >= 0)
      return new Rational(
        this.numerator ** n,

        this.denominator ** n,
      ).reduce();
    else {
      return new Rational(
        this.denominator ** Math.abs(n),

        this.numerator ** Math.abs(n),
      ).reduce();
    }
  }

  expreal(n: number) {
    return n ** (this.numerator / this.denominator);
  }

  private findGcd(a: number, b: number): number {
    return b === 0 ? a : this.findGcd(b, a % b);
  }

  reduce() {
    const gcd = this.findGcd(this.numerator, this.denominator);

    let newNumerator: number = this.numerator / gcd;

    let newDenominator: number = this.denominator / gcd;

    if (newDenominator < 0) {
      newNumerator *= -1;

      newDenominator *= -1;
    }

    return new Rational(newNumerator, newDenominator);
  }
}
