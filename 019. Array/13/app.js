// Дан массив с числами. Числа могут быть положительными и отрицательными.
// Найдите сумму всех положительных элементов массива циклом for of

const arr = [5, 3, -7, 0, 2, -1];
let sum = 0;

for (let i of arr) {
    
    if (i > 0) {
        sum += i;
    }
} 
console.log(sum);