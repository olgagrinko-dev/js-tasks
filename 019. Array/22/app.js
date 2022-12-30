// Напишите код, который разворачивает строку не используя reverse 

const str = `happy new year`;
let result = ``;

for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
}
console.log(result);
