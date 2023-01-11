// Найдите минимальное значение в массиве используя цикл

const arr = [1, 2, -3, 4, 5, -6, 7, -8, 9, -10];
let min = arr[0];

for (let i = 0; i < arr.length; i++) {

    if (min > arr[i]) {
        min = arr[i];
    }

} 
console.log(min);