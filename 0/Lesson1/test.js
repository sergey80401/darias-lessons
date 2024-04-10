const isPalindrome = require("./index.js");

test('Test 1', () => {
    expect(isPalindrome("Шалаш")).toBe(true)
})

test('Test 2', () => {
    expect(isPalindrome("лепс спел")).toBe(true)
})

test('Test 3', () => {
    expect(isPalindrome("89т4309молпдки2п")).toBe(false)
})

test('Test 4', () => {
    expect(isPalindrome("     ")).toBe(true)
})