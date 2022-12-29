// Найти квадратный корень числа. Если же число без плавающей точки, то просто
// вывести его. В противном случае необходимо округлить число до целых. Добавить
// проверку на ввод только чисел

const num = +prompt();


if (!isNaN(num)) {
    const sqrt = Math.sqrt(num);

    if (Number.isInteger(sqrt)) {
        console.log(`квадратный корень` + sqrt);
    } else {
        console.log(Math.round(sqrt));
    }

} else {
    console.log(`это не число`);
}
