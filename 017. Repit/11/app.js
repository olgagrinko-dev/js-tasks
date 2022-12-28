// Задача на анаграмму. На входе 2 строки, необходимо выявить являются ли
// введенные значения анаграммами

const str_1 = `нос`;
const str_2 = `сон`;

const sortstr_1 = str_1.split(``).sort().join(``);
const sortstr_2 = str_2.split(``).sort().join(``);

if (sortstr_1 === sortstr_2) {
    console.log(`слова анаграмма`);
} else {
    console.log(`слова не анаграмма`);
}