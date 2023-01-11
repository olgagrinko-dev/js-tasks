// 5. Создать массив гласных из динамичного массива. Filter

const n = prompt(`кол-во элементов массива`);
const array = [];

for (let i = 0; i < n; i++) {
    let value = prompt(`заполнение массива`);
    if (isNaN(value)) {
        array.push(value);
    }
}

let result = array.filter(function (el) {
    if (el === `a` || el === `e` || el === `o` || el === `i` || el === `u`) {
        return true;
    }
})
console.log(result);