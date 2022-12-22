// Задача на слово палиндром.

const word = `Anna`.toLowerCase();

let p = true;

for (let i = 0; i < word.length / 2; i++) {

    if (word[i] !== word[word.length - 1 - i]) {
        p = false;
        break;
    }
}
if (p) {
    console.log(`палиндром ${word}`);
} else {
    console.log(`это слово не палиндром`);
}