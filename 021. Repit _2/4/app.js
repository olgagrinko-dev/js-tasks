// 4. Палиндром. Сравнить с развернутой строкой не используя reverse. For

const word = `anna`.toLowerCase();
let reverse = ``;

for (let i = word.length - 1; i >= 0; i--) {
    reverse += word[i];
}

if (word === reverse) {
    console.log(`это слово палиндром`);
} else {
    console.log(`это слово не палиндром`);
}
