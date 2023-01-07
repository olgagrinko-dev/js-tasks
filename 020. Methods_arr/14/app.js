// 14. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать новый массив из элементов, каждое
// значение которого имеет вид #name
// [“hschool”, “company”] -> [“#hschool”, “#company”]

const n = prompt(`количество элементов массива`);
const arr = [];

for (let i = 0; i < n; i++) {
    const value = prompt(`заполнение массива`);
    if (isNaN(value)) {
        arr.push(value);
    }
}

// 1-й способ
// const result = arr.map(function (elem) {
//     return `#` + elem;
// })
// console.log(result);


// 2-й способ
// const result = [];
// arr.forEach(function (elem) {    
// result.push(`#` + elem);
// })
// console.log(result);

// 3-й способ
result = arr.reduce(function (sum, elem) {
    return sum + `#` + elem + ` `;
}, ``)
console.log(result.trim().split(` `));