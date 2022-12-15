// На вход программе подается строка из букв А, Г, Ц, Т. Напишите программу,
// которая подсчитывает сколько букв
// АааГГЦЦцТТтттА => А – 4 Г – 2 Ц – 3 Т – 5

const str = prompt().trim().toUpperCase();
const n = null;

let result = ``;

for (let i = 0; i < str.length; i++) {
    str[i] === `A` || str[i] === `Г` || str[i] === `Ц` || str[i] === `T`
    result += 1
    result += n*`A` + n*`Г` + n*`Ц` + n*`T`
}

console.log(result);


