//Пользователь вводит с клавиатуры число. Найдите корень введенного числа (если
// же результат – число с плавающей точкой, то округлить до целых)

const num = +prompt();
let sqrt = Math.sqrt(num);

if (!Number.isInteger(sqrt)) {
    sqrt = Math.round(sqrt);

}
console.log('квадратный корень' + sqrt);

