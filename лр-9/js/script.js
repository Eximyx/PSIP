console.log('Это внешний скрипт');

if (true) {
    console.log('Пример использования оператора if');
}

switch (new Date().getDay()) {
    case 1:
        console.log('Понедельник');
        break;
    case 2:
        console.log('Вторник');
        break;
    case 3:
        console.log('Среда');
        break;
    case 4:
        console.log('Четверг');
        break;
    case 5:
        console.log('Пятница');
        break;
    case 6:
        console.log('Суббота');
        break;
    case 7:
        console.log('Воскресенье');
        break;
    default:
        console.log('Неизвестный день недели');
}

do {
    console.log('Пример использования оператора do while');
} while (false);

confirm('Пример использования оператора confirm');

prompt('Пример использования оператора prompt');

console.log(typeof prompt);