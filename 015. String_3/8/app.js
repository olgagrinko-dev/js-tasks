// На вход подается 1 слово. Необходимо преобразовать слово в хештег. Добавить
// проверку на ввод текстовых значений hSСhOol -> #hschool

const a = `hSChOol`.trim().toLowerCase();
const b = `#`;

if (isNaN(a)) {
    console.log(`${b}${a}`);

} else {
    console.log(`ошибка ввода`);
}

