// 12. На вход программе подается натуральное число n. Напишите программу, которая
// печатает звездный треугольник.
// 7 -> *******
// ******
// *****
// ****
// ***
// **
// *

const n = 7;
let str = ``;

for (let i = n; i > 0; i--) {
    str += `*`.repeat(i) + `\n`;

} 
console.log(str);