/** ЗАДАЧА 62 - Разница в объявлении функций
 *
 * 1. Объясните разницу между двумя вариантами объявления функций
 *
 * 2. Покажите эту разницу, добавив дополнительный код под функциями
 *
 * 3. Также вызовите обе функции
 */

// можно присвоить новое значение к переменной firstFunction, после функции
// можно вызвать функцию firstFunction, до объявления этой функции

// функция с имененем firstFunction, вызывается firstFunction(аргументы)
// для вывода результат в консоль, нужно или присвоить результат к какой-либо
// переменной и через console.log() вывести результат.
// или вызывать функцию непосредвенов в console.log(firstFunction(аргументы))

console.log(firstFunction(3, 9))
function firstFunction(a, b) {
  return a + b
}
// firstFunction = 'другое значение'

// анонимная функция, которая присвоенна к переменной secondFunction.
// вызов это функции осуществляется через переменную secondFunction(аргументы).
const secondFunction = function (a, b) {
  return a + b
}

console.log(firstFunction(2, 5))
console.log(secondFunction(2, 3))