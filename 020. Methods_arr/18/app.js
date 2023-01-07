// 18. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимосоздать новый массив, где каждый элемент
// возведен в квадрат. map

const n = prompt(`количество элементов массива`);
const arr = [];

for (i = 0; i < n; i++) {
    let value = prompt(`заполнение массива`);
    arr.push(value);
}

const result = arr.map(function (elem) {
    return elem ** 2;
})
console.log(result);

