<?php

function printName($n) {
    if (!is_numeric($n) || $n < 0) {
        throw new Exception("Количество повторений должно быть положительным числом");
    }
    $i = 1;
    while ($i <= $n) {
        echo "Виталий Сенкевич\n";
        $i++;
    }
} 