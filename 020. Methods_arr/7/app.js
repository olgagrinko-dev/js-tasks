// 7. На входе задан массив [‘hschool’, ‘hschool_0’, ‘hschool_1’]. Напишите все возможные
// способы обращения к первому и последнему элементам

const arr = [`hschool`, `hschool_0`, `hschool_1`];

console.log(arr[0],arr[2]);


// 2-й вариант
let newarr = [];
for (let i = 0; i < arr.length; i++) {
    newarr.push(arr[0], arr[2]);
}
console.log(newarr);


// 3-й вариант



