// Пользователь вводит многозначное число. Необходимо вставить двоеточие
// между двумя нечетными числами. Работать с числом как с массивом.
// Использовать for
// 55639217 -> 5:563:921:7.

const arr = [55639217];
let num = String(arr[i]);
let result = 0;

for (let i = 0; i < arr.length; i++) {      
    if (!num % 2 == 0 && !num % 2 == 0) {  
        result += !num + `:` + !num 
    }
}
console.log(result);


// function colonOdd (num) {
//     let str = String(num);
//     let res = '';

//     for(let i = 0; i < str.length - 1; i++) {
//     if(str[i] % 2 === 1 && str[i+1] % 2 === 1) {
//     res += str[i] + ':' + str[i+1]
//     i++

//     } else {
//     res += str[i]
//     }
//     }
//     return res;
//     }
    
//     console.log(colonOdd(55639217))