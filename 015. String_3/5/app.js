// На вход подаются 2 строки. Необходимо сравнить их и если они одинаковы, то
// вывести true, в противном случае false.
// 'string', 'StRiNg' -> true 

const str_1 = `string`.toLowerCase();
const str_2 = 'StRiNg'.toLowerCase(); 

console.log(str_1 === str_2);