// Пользователь вводит число: 1, 2, 3 или 4. Если это значение '1', то вывести в консоль
// 'зима', '2' – 'весна' и так далее. Добавить проверку на ввод только чисел. Решите
// задачу через switch-case.


const a = +prompt();

if (!isNaN(a)) {
  switch (a) {
    case 1:
        console.log(`зима`);
        break;

    case 2:
        console.log(`весна`);
        break;

    case 3:
        console.log(`лето`);
        break;

    case 4:
        console.log(`осень`);
        break;

    default:
        console.log(`ошибка ввода`)
        break;
}
} else {
    console.log(`это не число`);
}