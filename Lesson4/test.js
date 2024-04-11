const normalizeText = require("./normalizeText.js");

test("Test 1", () => {
  expect(normalizeText("этот текст написан с маленькой буквы.и без пробелов")).toEqual("Этот текст написан с маленькой буквы. И без пробелов.")
});

test("Test 2", () => {
  expect(normalizeText("здесь,да,здесь,нет пробелов")).toEqual("Здесь, да, здесь, нет пробелов.")
});

test("Test 3", () => {
  expect(normalizeText("Два  пробела, и все хорошо ! Или   три   пробела?этот тест failed")).toEqual("Два пробела, и все хорошо ! Или три пробела? Этот тест failed.")
});


