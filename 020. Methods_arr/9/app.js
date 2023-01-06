// 9. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите сумму всех элементов массива. Проверки на
// ввод только чисел. Использовать forEach, reduce

const arr = [];
const value = prompt();

for (let i = 0; i < value; i++) {
    let item = ``;
    do {
        item = prompt();
    } while (isNaN(item))
    arr.push(item);
}

// let result_1 = 0;
// arr.forEach(function(elem) {
//     result_1 += elem;
// })

// 2-й способ

const result_2 = arr.reduce(function (sum, item) {
    return sum + item;
})
console.log(result_2);


