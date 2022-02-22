class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }
  static add = (num1, num2) => {
    return parseFloat(num1) + parseFloat(num2);
  };
  static subtract = (num1, num2) => {
    return parseFloat(num1) - parseFloat(num2);
  };
  static divide = (num1, num2) => {
    if (num2 == 0) {
      throw new Error();
    } else {
      return parseFloat(num1) / parseFloat(num2);
    }
  };
  static multiply = (num1, num2) => {
    return parseFloat(num1) * parseFloat(num2);
  };
}
module.exports = Calculator;
