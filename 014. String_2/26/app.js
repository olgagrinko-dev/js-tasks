// На вход программе подается строка текста. Напишите программу, которая
// проверяет, что строка заканчивается подстрокой .com или .ru. Если заканчивается,
// то вывести true, в противном случае false

const str = prompt().trim().toLowerCase();
const arr = str.split(`.`);
const newStr = arr[arr.length - 1];

if (newStr === `com` || newStr === `ru`) {
    console.log(true);
    
} else {
    console.log(false);
}


