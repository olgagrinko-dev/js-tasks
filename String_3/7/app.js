// На вход подается строка `/home/user/dir/file.txt`. Необходимо вернуть имя файла
// (подстрока после последнего символа `/` ) из полного пути к файлу('file.txt')

const str1 = '/home/user/dir/file.txt';
const str2 = str1.indexOf('file.txt');
console.log(str1.slice(str2));

