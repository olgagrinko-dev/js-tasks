// Пользователь вводит дату в формате 'xxxx-xx-xx'. Преобразуйте эту дату в формат
// 'xx.xx.xxxx'.

const str = prompt().trim(); //xxxx-xx-xx;

const arr = str.split(`-`).reverse();
const newStr = arr.join(`.`);
console.log(newStr);