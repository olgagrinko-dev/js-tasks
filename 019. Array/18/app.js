// Пользователь вводит число, являющееся количеством элементов будущего
// массива. Напишите код заполнения массива методом prompt. 

const length = +prompt();

if (!isNaN(length)) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(prompt());
    }
    console.log(arr);

} else {
    console.log(`Вы ввели не число`);
}
