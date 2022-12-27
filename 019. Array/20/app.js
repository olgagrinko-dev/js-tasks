// Пользователь вводит многозначное число. Необходимо вставить двоеточие
// между двумя нечетными числами. Работать с числом как с массивом.
// Использовать for
// 55639217 -> 5:563:921:7.

const number = 55639217;
const str = String(number);
let result = str[0];

for (let i = 1; i < str.length; i++) {
    if ((+str[i - 1]) % 2 !== 0 && (+str[i]) % 2 !== 0) {
        result += `:`;
    }
    result += str[i];
}
console.log(result);

