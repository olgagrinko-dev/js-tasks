// На вход программе подается строка из букв А, Г, Ц, Т. Напишите программу,
// которая подсчитывает сколько букв
// АааГГЦЦцТТтттА => A–4  G–2  C–3  T–5

const str = `AaaGGCCcTTtttA`.toUpperCase();

let A = 0,
    G = 0,
    C = 0,
    T = 0;

for (let i = 0; i < str.length; i++) {

    if (str[i] === `A`) {
        A += 1;
    } else if (str[i] === `G`) {
        G += 1;
    } else if (str[i] === `C`) {
        C += 1;
    } else if (str[i] === `T`) {
        T += 1;
    }

} 
console.log(`A - ${A} G - ${G} C - ${C} T - ${T}`);


