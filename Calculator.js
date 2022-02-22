class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }
  static add = (num1, num2) => {
    if (num1 && num2) {
      return parseFloat(num1) + parseFloat(num2);
    } else {
      throw new Error();
    }
  };
  static subtract = (num1, num2) => {
    if (num1 && num2) {
      return parseFloat(num1) - parseFloat(num2);
    } else {
      throw new Error();
    }
  };
  static divide = (num1, num2) => {
    if (num1 && num2) {
      return parseFloat(num1) / parseFloat(num2);
    } else {
      throw new Error();
    }
  };
  static multiply = (num1, num2) => {
    if (num1 && num2) {
      return parseFloat(num1) * parseFloat(num2);
    } else {
      throw new Error();
    }
  };
}
module.exports = Calculator;
