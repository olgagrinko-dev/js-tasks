// Пользователь вводит номер месяц. Необходимо вывести пору года по номеру
// месяца (2 способа)

const a = +prompt();

if (a === 1 || a === 2 || a === 12) {
    console.log("зима");
} else if (a === 3 || a === 4 || a === 5) {
    console.log("весна");
} else if (a === 6 || a === 7 || a === 8) {
    console.log("лето");
} else if (a === 9 || a === 10 || a === 11) {
    console.log("осень");
} else {
    console.log("ошибка ввода");
}

// 2-й способ

switch (a) {
    case 1:
    case 2:
    case 12:
        console.log(`зима`);
        break;

    case 3:
    case 4:
    case 5:
        console.log(`весна`);
        break;

    case 6:
    case 7:
    case 8:
        console.log(`лето`);
        break;

    case 9:
    case 10:
    case 11:
        console.log(`осень`);
        break;

    default:
        console.log(`ошибка ввода`);
        break;
}
