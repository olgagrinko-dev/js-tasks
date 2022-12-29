// На вход программе подается переменная date, в котрой лежит дата в формате
// 'xxxx-xx-xx'. Преобразуйте эту дату в формат 'xx/xx/xxxx’. (reverse)

const str = prompt().trim(); //xxxx-xx-xx
const arr = str.split('-').reverse();
const newStr = arr.join('/');

console.log(newStr); 