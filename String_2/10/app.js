// Дана строка из 3 слов разделенных пробелом:
// • Найдите количество символов в этой строке.
// • Вырежите из нее 2 и 3 слова.
// • Найдите индекс 2 подстроки

const str = prompt().trim().toLowerCase();  // я люблю JavaScript
console.log(str.length + `символов`);

const subStr = str.slice(str.indexOf(` `) + 1);
console.log(subStr);

const index = str.indexOf(subStr);
console.log(index);