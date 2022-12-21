// Выявить является ли введенное число четным
const a = +prompt();
if (a % 2 === 0) {
    console.log(`${a} - чётное`);
} else {
    console.log(`${a} - нечётное`);
}

a % 2 === 0 ? console.log(`${a} - чётное`) : console.log(`${a} - нечётное`)

console.log(a % 2 === 0 ? `${a} - чётное` : `${a} - нечётное`)