// 4. Заполнять массив числами бесконечно до тех пор, пока длина массива не будет
// равна 5. Вывести массив в консоль (цикл for, while)

let arr = [];
while (true) {
    console.log(`+`);
    arr.push(prompt(`введите значение`));
    
    if (arr.length === 5) {
        console.log(arr);
        break;
    }
}
