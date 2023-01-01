// Ввести строку. Если эта равна “hschool”, вывести true. В противном случае false.
// Добавить проверки для строк. Удалить лишние пробелы.

const str = prompt().trim();

if (isNaN(str)) {
    
    if (str === `hschool`) {
        console.log(true);
    } else {
        console.log(false);
    }
} 