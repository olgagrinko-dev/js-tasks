// 19. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры (хотя бы один элемент массива – 0). Необходимо вывести
// сумму всех значений массива до первого 0. Добавить проверки на ввод чисел.

const n = prompt();
const arr = [];

for (let i = 0; i < n; i++) {
    let value = prompt();
    if (isNaN(value)) continue
    arr.push(value);
}
// console.log(arr);

const sum = 0;
arr.forEach(function (elem) {
    if (elem === 0) {
        break
    }
    sum += +elem;
})
console.log(sum);