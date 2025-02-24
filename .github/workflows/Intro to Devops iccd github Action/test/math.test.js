const mul = require("../multiply");
const sum = require("../sum");


test('adds 2 + 3 to equal 3', () => {
  expect(sum(2, 3)).toBe(5);
  expect(sum(-2, 3)).toBe(1);
  expect(sum(0, 0)).toBe(0);
  });

  test('adds 2 * 3 to equal 3', () => {
    expect(mul(2, 3)).toBe(6);
    expect(mul(-2, 3)).toBe(-6);
    expect(mul(0, 5)).toBe(0);
  });