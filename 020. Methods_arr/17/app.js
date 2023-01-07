// 17. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Значения могут быть строкового либо числового типа
// данных. Необходимо из этих элементов составить 2 массива: со строками и второй
// массив, соответственно, с числами. forEach

const n = prompt();
const arr = [];

for (let i = 0; i < n; i++) {
    let value = prompt();
    arr.push(value);
}

const strings = [];
const nambers = [];

arr.forEach(function (elem) {
    if (isNaN(elem)) {
        strings.push(elem);
    } else {
        nambers.push(elem);
    }
})
console.log(strings);
console.log(nambers);