// Задание 1
function showDate() {
    let now = new Date();
    let seconds = now.getSeconds();
    let hours = now.getHours(); // Месяцы в JavaScript начинаются с 0
    alert(`${seconds}-${hours}`);
}

showDate();

// Задание 4
function calculateFormula(b, c, a) {
    try {
        if (a - 4 === 0 || Math.sqrt(c + Math.PI) < 0) throw new Error("Деление на ноль");
        let result = (b ** 2 - Math.PI) / Math.abs((a - 4)) + 7 * Math.sqrt(c + Math.PI);
        return result;
    } catch (error) {
        alert(`Ошибка: ${error.message}`);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    let result = calculateFormula(2, 3, 5);
    if (result !== undefined) {
        document.getElementById('result').innerHTML += `Результат: ${result}<br>`;
    }

})

// Задание 5
function stringOperations() {
    let s1 = "Я люблю Беларусь";
    let s2 = "Я учусь в Политехническом колледже";
    let variant = 11; // Номер варианта

    // 1. Определить длину строк S2
    let lengthS2 = s2.length;
    console.log("Длина строки S2:", lengthS2);

    // 2. Определить встречается ли в строке S1 слово "Беларусь"
    let containsBelarus = s1.includes("Беларусь");
    console.log("Содержит ли S1 'Беларусь':", containsBelarus);

    // 3. Выделить n-ый символ в строке S2 (n = номер варианта)
    let nthChar = s2.charAt(variant - 1);
    console.log(`Символ номер ${variant} в строке S2:`, nthChar);

    // Определить ASCII-код этого символа
    let asciiCode = nthChar.charCodeAt(0);
    console.log(`ASCII-код символа '${nthChar}':`, asciiCode);
}

stringOperations();
