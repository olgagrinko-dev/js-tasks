// 8. На вход программе подается строка текста содержащая «@». Разбить на массив.
// Напишите программу, которая удаляет все вхождения символа «@». Как вы
// думаете, что здесь применить: map, forEach, filter?
// 123@1@@34 -> 123134

const str = prompt().split(``);

const result = str.filter(function (elem) {
    if (elem !== `@`) {
        return true;
    }
})
console.log(result);

