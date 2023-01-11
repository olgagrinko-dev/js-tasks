// 1. Сумма элементов массива динамичного массива. reduce

const n = +prompt();
const array = [];

for (let i = 0; i < n; i++) {
    let value = +prompt(`заполнение массива`)
    array.push(value);
}

const result = array.reduce(function(sum, elem) {
    return sum + elem;
}, 0)
console.log(result);