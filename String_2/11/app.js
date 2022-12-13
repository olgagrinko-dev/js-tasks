// Пользователь вводит дату в формате ‘х-х-х'. Замените все дефисы на '!'

const str = prompt().trim();

console.log(str.replaceAll('-', '!'));