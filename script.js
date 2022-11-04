'use strict';

// Задача на повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку:

const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials;

// initials = userNames.map(name => name.split(" ").map(initial => initial[0]).join(".")).sort();

initials = userNames.map(name => name.split(" ").map(initial => initial.charAt(0)+".").join("")).sort();

console.log(initials); // [ "Г.П.А", "П.О.І", "Р.А.О"]

// Задача на розворот числа:

const currentMaxValue = 4589;
let reverseMaxValue;

reverseMaxValue = Number(currentMaxValue.toString().split("").reverse().join(""));

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'

// Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності:

const resultsArray = [1, 2, [3, [4]]];
let productOfArray;

const initialValue = 1;
productOfArray = resultsArray.flat(Infinity).reduce(
    (previousValue, currentValue) =>
        previousValue * currentValue,
        initialValue
);

console.log(productOfArray); // 24