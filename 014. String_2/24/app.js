// На вход программе подается строка. Напишите программу, которая подсчитывает
// количество буквенных символов в нижнем регистре.
// abcABCD12345 => 3

const str = prompt().trim();
let sum = 0;

for (let i = 0; i < str.length; i++) {
    
    if (isNaN(str[i]) && str[i] === str[i].toLowerCase()) {
        sum += 1;
    } 
}
console.log (sum);  



