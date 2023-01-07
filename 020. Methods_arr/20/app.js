// 20.На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Оставьте в нем только положительные числа. Filter

const n = prompt(`количество элементов массива`);
const arr = [];

for (let i = 0; i < n; i++) {
    const value = prompt(`заполнение массива`);
    arr.push(value);
}

let newarr = arr.filter(function (elem) {
    if (elem >= 0) {
        return true;
    }
})
console.log(newarr);