// На вход подается url. Если он начинается с http, содержит хотя бы один “/” и
// заканчивается подстрокой .com или .ru, то вывести true, в противном случае false

const url = `https://dev-gang.ru`;



if (url.startsWith(`http`) && url.includes(`/`) && endsWith(`.com`) || endsWith(`.ru`)) {
    console.log(true);
} else {
    console.log(false);
}
