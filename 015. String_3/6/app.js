// На вход подается url. Необходимо вывести содержимое url после протокола
// (http/https)
// https://www.instagram.com/hschool.official/ -> www.instagram.com/hschool.official/


const a = `https://www.instagram.com/hschool.official/`;

if (a.startsWith(`https`) || a.startsWith(`http`) ) {
    console.log(a.slice(a.indexOf(`//`) + 2));
    
} else {
    console.log(`ошибка`);
}

