// Дана строка из 3 слов разделенных пробелом:
// • Найдите количество символов в этой строке.
// • Вырежите из нее 2 и 3 слова.
// • Найдите индекс 2 подстроки

const str = prompt();  // я люблю JavaScript
const newstr = str.split(` `) + str.slice(2);

console.log(str.length + `символов` + newstr + newstr[0]);