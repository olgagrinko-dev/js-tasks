// Дан массив с элементами [2, 3, 4, 5]. С помощью 3 циклов найдите произведение
// элементов этого массива.

const arr = [2, 3, 4, 5];
let result = 1;

for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
}
console.log(result);

let i = 0;
let result_1 = 1;
while (i < arr.length) {
    result_1 *= arr[i];
    i++
} 
console.log(result_1);


let result_2 = 1;
for (const i of arr) {
    result_2 *= i;    
}
 console.log(result_2);