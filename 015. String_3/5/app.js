// На вход подаются 2 строки. Необходимо сравнить их и если они одинаковы, то
// вывести true, в противном случае false.
// 'string', 'StRiNg' -> true 

const str1 = `string`.toLowerCase();
const str2 = 'StRiNg'.toLowerCase(); 

console.log(str1 === str2);