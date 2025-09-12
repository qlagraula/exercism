export class Rational {
  numerator: number;
  denominator: number;

  constructor(numerator: number, denominator: number) {
    if (denominator === 0) {
      throw new Error("Denominator cannot be zero");
    }
    this.numerator = numerator;
    this.denominator = denominator;
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
    );
  }

  div(rational: Rational) {
    return new Rational(
      this.numerator * rational.denominator,
      this.denominator * rational.numerator,
    );
  }

  abs() {
    return new Rational(Math.abs(this.numerator), Math.abs(this.denominator));
  }

  exprational(n: number) {
    return new Rational(
      Math.pow(this.numerator, n),
      Math.pow(this.denominator, n),
    );
  }

  expreal(n: number) {
    return Math.pow(this.numerator / this.denominator, n);
  }

  reduce() {
    return new Rational(this.numerator, this.denominator);
  }
}
