// 7. На входе задан массив [‘hschool’, ‘hschool_0’, ‘hschool_1’]. Напишите все возможные
// способы обращения к первому и последнему элементам

const arr = [`hschool`, `hschool_0`, `hschool_1`];

// 1-й вариант
console.log(arr[0], arr[2]);

// 2-й вариант
// console.log(arr.shift(), arr.pop());

// 3-й вариант
for (let i = 0; i < arr.length; i++) {
if (i === 0 || i === 2) {
console.log(arr[i]);
}
}

// 4-й вариант
arr.forEach(function (el, index) {
if (index === 0 || index === 2) {
console.log(el);
}
})

// 5-й вариант
console.log(arr[arr.length - arr.length], arr.reverse()[0]);

// 6-й вариант
console.log(arr.splice(1));