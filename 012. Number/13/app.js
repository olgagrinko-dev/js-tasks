// Вы вводите значение с клавиатуры. Если значение равно 0, то вывести ‘Ноль’, если
// < 0, то вывести ‘Отрицательное’, если > 0, то вывести ‘Положительное’

const number = +prompt();

if (number > 0) {
    console.log('число положительное');

} else if (number === 0) {
    console.log('ноль');

} else if (number < 0) {
    console.log('число отрицательное');
}
