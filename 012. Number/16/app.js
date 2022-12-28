// Пользователь вводит с клавиатуры число. Найдите корень введенного числа (если
// же результат – число с плавающей точкой, то округлить до 2 знаков после запятой).

const num = +prompt();
let sqrt = Math.sqrt(num);

if (!Number.isInteger(sqrt)) {
    sqrt = sqrt.toFixed(2);

} console.log('квадратный корень' + num + 'равен =' + sqrt);