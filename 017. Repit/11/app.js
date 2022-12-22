// Задача на анаграмму. На входе 2 строки, необходимо выявить являются ли
// введенные значения анаграммами

const str1 = `нос`;
const str2 = `сон`;

const sortstr1 = str1.split(``).sort().join(``);
const sortstr2 = str2.split(``).sort().join(``);

if (sortstr1 === sortstr2) {
    console.log(`слова анаграмма`);
} else {
    console.log(`слова не анаграмма`);
}