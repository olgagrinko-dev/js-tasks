// На вход подается строка из нескольких строк. Необходимо преобразовать слово в
// хештег. Добавить проверку на ввод текстовых значений
// hSСhOol СomPAnY-> #hschoolcompany

const a = `SChOol ComPAnY`.trim().toLowerCase();
const b = `#`;
const result = b + a.replace(` `, ``);

if (isNaN(a)) {
    console.log(result);

} else {
    console.log(`ошибка ввода`);
}



