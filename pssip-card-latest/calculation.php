<?php
// Определение переменных и вычисление
$a = 5;
$b = 7;
$sum = $a + $b;
$product = $a * $b;

// Проверка прав доступа к директории
if (!is_writable(dirname(__FILE__))) {
    die('Ошибка: нет прав на запись в директорию');
}

// Запись результатов в файл
try {
    $file = fopen("1.txt", "w");
    if ($file === false) {
        throw new Exception('Не удалось открыть файл для записи');
    }
    
    $content = "Сумма: $sum\nПроизведение: $product";
    if (fwrite($file, $content) === false) {
        throw new Exception('Ошибка при записи в файл');
    }
    
    fclose($file);
    echo "Результаты успешно записаны в файл 1.txt";
} catch (Exception $e) {
    die('Ошибка: ' . $e->getMessage());
}
?>
