<?php
// Включаем буферизацию вывода
ob_start();
?>
<!DOCTYPE html>
<html>
<head>
    <title>Результаты выполнения заданий</title>
    <meta charset="utf-8">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            line-height: 1.6;
        }
        .task {
            margin-bottom: 20px;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        .task h2 {
            margin-top: 0;
            color: #333;
        }
        .result {
            background-color: #f5f5f5;
            padding: 10px;
            border-radius: 3px;
        }
    </style>
</head>
<body>
    <?php
    // Подключаем все файлы с заданиями
    include 'task2_calendar.php';
    include 'task3_name.php';
    include 'task4_arrays.php';
    include 'task5_strings.php';
    include 'task6_math.php';

    // Задание 2 - Календарь
    echo '<div class="task">';
    echo '<h2>Задание 2 - Календарь</h2>';
    echo '<div class="result">';
    echo "Дней в текущем месяце: " . getDaysInCurrentMonth();
    echo '</div></div>';

    // Задание 3 - Вывод имени
    echo '<div class="task">';
    echo '<h2>Задание 3 - Вывод имени</h2>';
    echo '<div class="result">';
    $nomer = 22;
    ob_start();
    printName($nomer);
    echo nl2br(ob_get_clean());
    echo '</div></div>';

    // Задание 4 - Массивы
    echo '<div class="task">';
    echo '<h2>Задание 4 - Работа с массивами</h2>';
    echo '<div class="result">';
    include 'task4_arrays.php';
    echo '</div></div>';

    // Задание 5 - Строки
    echo '<div class="task">';
    echo '<h2>Задание 5 - Работа со строками</h2>';
    echo '<div class="result">';
    include 'task5_strings.php';
    echo '</div></div>';

    // Задание 6 - Математическая функция
    echo '<div class="task">';
    echo '<h2>Задание 6 - Математическая функция</h2>';
    echo '<div class="result">';
    $testValues = [-1, 1, 3, 0];
    foreach ($testValues as $x) {
        try {
            echo "f($x) = " . customMathFunction($x) . "<br>";
        } catch (Exception $e) {
            echo "Ошибка при вычислении f($x): " . $e->getMessage() . "<br>";
        }
    }
    echo '</div></div>';
    ?>
</body>
</html>