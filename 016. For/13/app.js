// Задача на слово палиндром. Если слово одинаковое с 2 сторон, то true, в
// противном случае false
// anna -> true
// мем -> true
// тест -> false

const str = `anna`.trim().toLowerCase();

if (str === str.split('').reverse().join('')) {
    console.log(true);
} else {
    console.log(false);
}

// 2 - й вариант
let value = `anna`;
let reverseValue = ``;

for (let i = value.length - 1; i >= 0; i--) {
    reverseValue += value[i];
}
console.log(reverseValue === value ? `палиндром` : `не палиндром`);