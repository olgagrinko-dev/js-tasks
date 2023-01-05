// На вход подаются 2 строки. Если исходная 1 строка зкаканчивается на 2 строку
// вывести true, в противном случае false 

const str_1 = `Я люблю JavaScript`;
const str_2 = `JavaScript`;

str_1.endsWith(str_2) ? console.log(true) : console.log(false);