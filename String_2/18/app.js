// Пользователь вводит строку. Необходимо вывести все гласные отдельной строкой (for)
// fullstack => ua

const str = prompt().trim().toLowerCase();
let resalt = ``

for (let i = 0; i < str.length; i++) {
    str[i] === `a` || str[i] === `o` || str[i] === `e` || str[i] === `u` || str[i] === `i` ? resalt += str[i] : null;

}
console.log(resalt);