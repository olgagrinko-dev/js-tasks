// Пользователь вводит число, являющееся количеством элементов будущего
// массива. Напишите код заполнения массива методом prompt. Проверить каждый
// prompt на число (ввод строки, проверка на isNaN)

const length = +prompt();

if (!isNaN(length)) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        let number;
        do {
            number = +prompt();
        } while (isNaN(number))
        arr.push(number);
    }
    console.log(arr);
} else {
    console.log(`Вы ввели не число`);
}