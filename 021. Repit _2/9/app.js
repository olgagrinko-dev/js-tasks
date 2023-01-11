// 9. На вход программе подается строка текста, вида “xxxx-xx-xx”. Разбить на массив.
// Преобразуйте эту дату в формат “xx/xx/xxxx”. Как вы думаете, что здесь применить:
// map, forEach, filter?

const array = `xxxx-xx-xx`.split(``).reverse();

let result = array.map(function (elem) {
    if (elem !== `-`) {
        return elem;
    } else {
        return `/`;
    }
})
console.log(result.join(``));
