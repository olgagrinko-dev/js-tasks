// 13. На входе n – количество элементов массива. Далее производится заполнение
// массива arr с клавиатуры. Также в памяти есть статичная переменная со
// значением javascript. Необходимо создать новый массив из отфильтрованных
// значений, где строка массива arr включают значение переменной javascript.
// Проверка на ввод только текстовых значений на заполнение массива. forEach

const n = prompt();
const arr = [];
const str = `javascript`;

for (let i = 0; i < n; i++) {
    let value = prompt();
    if (isNaN(value)) {        
        arr.push(value);
    }
}

const newarr = [];
arr.forEach(function (elem) {
    if (elem.includes(str)) {
        newarr.push(elem);
    }
})
console.log(newarr);

