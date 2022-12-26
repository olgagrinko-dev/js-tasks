// У вас есть массив из строк, чисел и иных примитивов. Необходимо создать новый
// массив, заполненный только числами первоначального массива

const arr = [null, 2, true, 100, `new`, 55];
const newarr = [];

for (let i = 0; i <= arr.length; i++) {
    if (typeof arr[i] === `number`) {
        newarr.push(arr[i]);
    }
}
console.log(newarr);