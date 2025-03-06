<?php
session_start();

// Проверка обязательных полей
if (empty($_POST['name'])) {
    die('Ошибка: Имя является обязательным полем');
}

// Безопасная обработка входных данных
$name = htmlspecialchars($_POST['name']);
$maiden_name = htmlspecialchars($_POST['maiden_name'] ?? '');
$gender = htmlspecialchars($_POST['gender'] ?? 'M');

// Сохранение данных в сессию
$_SESSION['name'] = $name;
$_SESSION['maiden_name'] = $maiden_name;

// Перенаправление на следующую страницу
header('Location: page2.php');
exit();
?>
