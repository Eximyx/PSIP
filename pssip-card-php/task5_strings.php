<?php

$s1 = "Я люблю Беларусь";

$s2 = "Я учусь в Политехническом колледже";

try {
    echo "Длина строки s1: " . mb_strlen($s1) . "\n";
    
    if (isset($s1[22])) {
        echo "ASCII-код символа 22: " . ord($s1[22]) . "\n";
    } else {
        throw new Exception("Символ с индексом 22 не существует в строке");
    }
    
    $s2 = str_replace('о', 'а', $s2);
    echo "Строка s2 после замены: " . $s2 . "\n";
} catch (Exception $e) {
    echo "Ошибка при работе со строками: " . $e->getMessage() . "\n";
} 