<?php
session_start();

// Проверка существования сессионных данных
if (!isset($_SESSION['name'])) {
    header('Location: index.html');
    exit();
}

// Безопасный вывод данных
$name = htmlspecialchars($_SESSION['name']);
$maiden_name = htmlspecialchars($_SESSION['maiden_name'] ?? '');
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Информация о сессии</title>
    <style>
        .info-block {
            margin: 20px;
            padding: 10px;
            border: 1px solid #ccc;
        }
    </style>
</head>
<body>
    <div class="info-block">
        <h2>Данные сессии:</h2>
        <p>Имя: <?php echo $name; ?></p>
        <?php if (!empty($maiden_name)): ?>
            <p>Девичья фамилия: <?php echo $maiden_name; ?></p>
        <?php endif; ?>
        <p>ID сессии: <?php echo session_id(); ?></p>
    </div>
</body>
</html>
