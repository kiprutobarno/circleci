const functions = require("./math");
const add = functions.add;
const multiply = functions.multiply;

test("adds 1 and 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("multiply 2 and 3 to equal 6", () => {
  expect(multiply(2, 3)).toBe(6);
});
