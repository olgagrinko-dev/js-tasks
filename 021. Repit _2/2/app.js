// 2. Найти максимальное число динамичного массива. ForEach

const n = +prompt();
const array = [];

for (let i = 0; i < n; i++) {
    let value = +prompt(`заполнение массива`)
    array.push(value);
}

let number = array[0];
array.forEach(function (elem) {
    if (elem > number) {
        number = elem;
    }
})
console.log(number);