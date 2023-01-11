//  6. Посчитать количество согласных в строке. В задаче необходимо хоть как-то
// затронуть forEach

const array = `forEach`.toLowerCase().split(``);
let result = 0;

array.forEach(function (el) {
    if (el === `a` || el === `e` || el === `o` || el === `i` || el === `u`) {
        result += 1;
    }
})
console.log(array.length - result);

