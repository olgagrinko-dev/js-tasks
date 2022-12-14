// На вход программе подается строка. Преобразуйте первую букву каждого слова
// строки в верхний регистр (for)

const str = prompt().trim().toLowerCase().split(` `); // happy new year
let result = ``
for (let i = 0; i < str.length; i++) {
    const F = str[i][0].toUpperCase();
    const fromOne = str[i].slice(1);
    result += F + fromOne + ` `;
}

console.log(result);