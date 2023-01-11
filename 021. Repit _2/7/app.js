//  7. На вход подается url https://techrocks.ru/. 
// Необходимо вырезать строку после протокола и перед доменом первого уровня

const str = `https://techrocks.ru/`.split(`/`);

let result = ``;
str.forEach(function (elem) {
    if (elem !== `https:` && elem !== ``) {
        result += elem;
    }
})

console.log(result.slice(0, result.indexOf(`.`)));
