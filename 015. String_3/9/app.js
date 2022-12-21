// На вход подается строка из нескольких строк. Необходимо преобразовать слово в
// хештег. Добавить проверку на ввод текстовых значений
// hSСhOol СomPAnY-> #hschoolcompany

const a = `hSChOol ComPAnY`.trim().toLowerCase();
const b = `#`;
const result = b+a.replace(` `,``);

console.log(result);

