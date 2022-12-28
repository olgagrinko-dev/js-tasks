// Пользователь вводит строку. Необходимо посчитать количество согласных (for)

const str = prompt().trim().toLowerCase();
let sum = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === `a` || str[i] === `o` || str[i] === `e` || str[i] === `u` || str[i] === `i`) {
        sum += 1;
    }
}
console.log(str.length - sum);