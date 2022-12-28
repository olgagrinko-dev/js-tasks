// Напишите программу, в которой рассчитывается сумма и произведение цифр
// положительного трёхзначного числа
// 123 -> Сумма цифр = 6 Произведение цифр = 6

// 1-й способ

let x = +prompt();

if (!isNaN(x)) {
    const a = Math.floor(x / 100);
    x = x - a * 100;
    const b = Math.floor(x / 10);
    const c = x - b * 10;
    console.log(`Сумма ${a + b + c}`);
    console.log(`Произведение ${a * b * c}`);
}
else {
    console.log(`Вы ввели не число`);
}

// 2-й способ

// let x = +prompt();

if (isNaN(x)) {
    console.log(`Нужно вводить число`);
} else {
    x = +x;

    if (x > 0) {
        const a = Math.round(x / 100 % 10);
        const b = Math.round(x / 10 % 10);
        const c = Math.round(x % 10);

        console.log(`Сумма цифр = ${a + b + c}`);
        console.log(`Произведение цифр = ${a * b * c}`);
    } else {
        console.log(`Введите положительное число`);
    }

}

