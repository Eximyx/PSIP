<?php

$numbers = [1, 2, 3, 4, 5, 6, 7];
$numbersCopy = $numbers;

try {
    if (empty($numbers)) {
        throw new Exception("Массив пуст");
    }
    echo "Максимальный элемент: " . max($numbers) . "\n";
    array_pop($numbersCopy);
    echo "Исходный массив: " . implode(", ", $numbers) . "\n";
    echo "Измененный массив: " . implode(", ", $numbersCopy) . "\n";
} catch (Exception $e) {
    echo "Ошибка при работе с массивом: " . $e->getMessage() . "\n";
} 