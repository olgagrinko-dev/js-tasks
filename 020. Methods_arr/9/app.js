// 9. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите сумму всех элементов массива. Проверки на
// ввод только чисел. Использовать forEach, reduce

const n = prompt(`введите количество элементов массива`);
const arr = [];

for (let i = 0; i < n; i++) {
    let value = prompt(`заполнение массива`);
    if (isNaN(value)) continue
    arr.push(value);
}

// 1-й вариант forEach

let sum_1 = 0;
arr.forEach(function (elem) {
    sum_1 += elem;
})
console.log(`сумма: ${sum_1}`);

// 2-й способ

// let sum_2 = arr.reduce(function (sum, item) {
//     return sum + item;
// }, 0)
// console.log(`сумма: ${sum_2}`);


