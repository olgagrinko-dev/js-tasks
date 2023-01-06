// 8. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Если все элементы массива – числа, то вывести логическое
// true, в противном случае false. Every, forEach

const arr = [];
const value = prompt();

for (let i = 0; i < value; i++) {
    arr.push(prompt());
}

let result_1 = true;
arr.forEach(function (elem) {
    if (isNaN(elem)) {
        result_1 = false;
    }
})
console.log(result_1);


// 2-й способ
let result_2 = arr.every(function (elem) {
    return !isNaN(elem);
})
console.log(result_2);