const getRandomNumber = require("./getRandomNumber.js");

test("Test 1", () => {
  let value = getRandomNumber(0 , 10)
  expect(value).toBeGreaterThan(0 - 1)
  expect(value).toBeLessThan(10 + 1)
});

test("Test 2", () => {
  let value = getRandomNumber(3 , 5)
  expect(value).toBeGreaterThan(3 - 1)
  expect(value).toBeLessThan(5 + 1)
});

test("Test 3", () => {
  let value = getRandomNumber(-80 , 80)
  expect(value).toBeGreaterThan(-80 - 1)
  expect(value).toBeLessThan(80 + 1)
});

test("Test 4", () => {
  let value = getRandomNumber(17 , 32)
  expect(value).toBeGreaterThan(17 - 1)
  expect(value).toBeLessThan(32 + 1)
});

test("Test 5", () => {
  let value = getRandomNumber(12 , 44)
  expect(value).toBeGreaterThan(12 - 1)
  expect(value).toBeLessThan(44 + 1)
});



