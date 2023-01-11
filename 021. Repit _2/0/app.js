// 1. Сумма элементов массива динамичного массива. reduce

// 2. Найти максимальное число динамичного массива. ForEach

// 3. Найти максимальное и минимальное число динамичного массива. forEach

// 4. Палиндром. Сравнить с развернутой строкой не используя reverse. For

// 5. Создать массив гласных из динамичного массива. Filter

// 6. Посчитать количество согласных в строке. В задаче необходимо хоть как-то
// затронуть forEach

// 7. На вход подается url https://techrocks.ru/. 
// Необходимо вырезать строку после протокола и перед доменом первого уровня

// 8. На вход программе подается строка текста содержащая «@». Разбить на массив.
// Напишите программу, которая удаляет все вхождения символа «@». Как вы
// думаете, что здесь применить: map, forEach, filter?
// 123@1@@34 -> 123134

// 9. На вход программе подается строка текста, вида “xxxx-xx-xx”. Разбить на массив.
// Преобразуйте эту дату в формат “xx/xx/xxxx”. Как вы думаете, что здесь применить:
// map, forEach, filter?

// 10. На вход программе подается число n. Составить массив элементов от 1 до n. Найти
// факториал числа. reduce

// 11. Разбить динамичный массив чисел на 2 массива: из четных и нечетных элементов.
// forEach

// 12. На вход программе подается строка текста в маленьком регистре. Разбить строку
// на массив. Необходимо поставить каждый элемент массива в чередование
// регистров toLowerCase, toUpperCase. Map
// hschool -> HsChOoL

// 13. *Дана строка состоящая из следующего набора скобок:
// (, ), {, }, [ и ].
// Каждой открывающей скобке соответствует закрывающая, образуя пары. Будем
// считать строку удовлетворяющей условию задания, если все скобки закрываются
// в нужном порядке, т.е: для каждой открывающей есть закрывающая из той же
// пары; скобки закрываются в правильном порядке. При решении задачи
// разрешается применять все известные вам на сегодняшний день методы
// программирования для достижения поставленной задачи
// ()[]{} -> true
// {[]} -> true
// ((()(()))) -> false
// (] -> false
// ([)] -> false