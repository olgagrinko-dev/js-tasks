// 6. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо вывести true, если хотя бы 1 элемент массива –
// число. Some, forEach

const n = prompt();
const arr = [];

for (let i = 0; i < n; i++) {
    arr.push(prompt());
}

// let bool = arr.some(function (elem) {
//     if (isNaN(elem)) {
//         return true;
//     } else {
//         return false;
//     }
// }) 
// console.log(bool)

// 2-й вариант
let bool = false;
arr.forEach(function (elem) {

    if (!isNaN(elem)) {
        bool = true;
        return null;
    } else {
        bool = false;
    }
})
console.log(bool);