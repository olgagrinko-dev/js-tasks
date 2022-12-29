// На вход подается строка `/home/user/dir/file.txt`. Необходимо вернуть имя файла
// (подстрока после последнего символа `/` ) из полного пути к файлу('file.txt')

const str_1 = '/home/user/dir/file.txt';
const str_2 = str_1.indexOf('file.txt');

console.log(str_1.slice(str_2));

