// 11. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите произведение всех элементов массива.
// Проверки на ввод только чисел. Использовать forEach, reduce

const n = prompt();
const arr = [];

for (let i = 0; i < n; i++) {
    let value = prompt();
    if (isNaN(value)) continue
        arr.push(value);
    
}

// 1-й вариант forEach

let result = 1;
arr.forEach(function(elem) {
result *= elem;
})
console.log(result);

// 2-й способ reduce

let res = arr.reduce(function (res, el) {
    return res * el;
}, 1)
console.log(`произведение: ${res}`);
