// На вход подается строка. Необходимо сложить все элементы числа. Добавить
// проверку на ввод только чисел
// 53 -> 8
// 135 -> 9

const a = `135`;

if (isNaN(a)) {
    console.log(`ошибка ввода`);
    
} else {
    let sum = 0;

    for (let i = 0; i < a.length; i++) {
        sum += +a[i];
    }
    console.log(sum);
}

