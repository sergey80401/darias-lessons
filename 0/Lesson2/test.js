const largestCommonSubstring = require("./largestCommonSubstring.js");


test('Test 1', () => {
    expect(largestCommonSubstring("111111jmuiwceghicgr", "4y385yv111111")).toEqual("111111")
})

test('Test 2', () => {
    expect(largestCommonSubstring("Даше нравится кодить на JavaScript", "Программистам на Java нравится пить кофе")).toEqual(" нравится ")
})

test('Test 3', () => {
    expect(largestCommonSubstring("Я наибольшая подстрока", "Нет! Я наибольшая подстрока")).toEqual("Я наибольшая подстрока")
})

test('Test 4', () => {
    expect(largestCommonSubstring("ЫыЫЫЫЫЫЫыыы                      Пробелы", "Пробелы                      Пробелы")).toEqual("ы                      Пробелы")
})

test('Test 5', () => {
    expect(largestCommonSubstring("Нука, а символы !№;%:?*(", "А символы !№;%:?*( тоже")).toEqual(" символы !№;%:?*(")
})