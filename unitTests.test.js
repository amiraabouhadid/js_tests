const stringLength = require("./stringLength");
const reverseString = require("./reverseString");
const Calculator = require("./Calculator");
describe("stringLength function", () => {
  test("returns string length", () => {
    const string = "hi";
    expect(stringLength(string)).toBe(2);
  });
  test("throws error when string length is more than 10", () => {
    const string =
      "hi whatsup my name is amira abaouhadid and i love to code what aout you my man";
    expect(() => stringLength(string)).toThrow(Error);
  });
  test("throws error when string length is less than 1", () => {
    const string = "";
    expect(() => stringLength(string)).toThrow(Error);
  });
});

describe("reverseString function", () => {
  test("returns reversed string of one word", () => {
    const string = "hi";
    expect(reverseString(string)).toMatch("ih");
  });
  test("returns reversed string of multiple words", () => {
    const string = "hi there my nanana";
    expect(reverseString(string)).toMatch("ananan ym ereht ih");
  });
});
describe("calculator's add method", () => {
  test("add two integer numbers", () => {
    const num1 = 1;
    const num2 = 2;
    expect(Calculator.add(num1, num2)).toBe(3);
  });
  test("add two numbers when one of them is a floating number", () => {
    const num1 = 100.5;
    const num2 = 2;
    expect(Calculator.add(num1, num2)).toBe(102.5);
  });
  test("add two numbers when one of them is a string", () => {
    const num1 = 0.5;
    const num2 = "2";
    expect(Calculator.add(num1, num2)).toBe(2.5);
  });
});
describe("calculator's subtract method", () => {
  test("subtract two integer numbers", () => {
    const num1 = 1;
    const num2 = 2;
    expect(Calculator.subtract(num1, num2)).toBe(-1);
  });
  test("subtract two numbers when one of them is a floating number", () => {
    const num1 = 100.5;
    const num2 = 2;
    expect(Calculator.subtract(num1, num2)).toBe(98.5);
  });
  test("subtract two numbers when one of them is a string", () => {
    const num1 = 0.5;
    const num2 = "2";
    expect(Calculator.subtract(num1, num2)).toBe(-1.5);
  });
});
describe("calculator's divide method", () => {
  test("divide two integer numbers", () => {
    const num1 = 1;
    const num2 = 2;
    expect(Calculator.divide(num1, num2)).toBe(0.5);
  });
  test("divide two numbers when one of them is a floating number", () => {
    const num1 = 100.5;
    const num2 = 2;
    expect(Calculator.divide(num1, num2)).toBe(50.25);
  });
  test("divide two numbers when one of them is a string", () => {
    const num1 = 0.5;
    const num2 = "2";
    expect(Calculator.divide(num1, num2)).toBe(0.25);
  });
  test("throws error when dividing by zero", () => {
    const num1 = 0.5;
    const num2 = 0;
    expect(() => Calculator.divide(num1, num2)).toThrow(Error);
  });
});
describe("calculator's multiply method", () => {
  test("multiply two integer numbers", () => {
    const num1 = 1;
    const num2 = 2;
    expect(Calculator.multiply(num1, num2)).toBe(2);
  });
  test("multiply two numbers when one of them is a floating number", () => {
    const num1 = 100.5;
    const num2 = 2;
    expect(Calculator.multiply(num1, num2)).toBe(201.0);
  });
  test("multiply two numbers when one of them is a string", () => {
    const num1 = 0.5;
    const num2 = "2";
    expect(Calculator.multiply(num1, num2)).toBe(1.0);
  });
});
