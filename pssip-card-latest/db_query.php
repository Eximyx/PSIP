<?php
// Параметры подключения к БД
$host = 'localhost';
$dbname = 'Телефонный_узел_связи';
$username = 'root';
$password = 'root';
$charset = 'utf8mb4';

try {
    // Создание подключения с использованием PDO для безопасности
    $dsn = "mysql:host=$host;dbname=$dbname;charset=$charset";
    $options = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ];
    
    $pdo = new PDO($dsn, $username, $password, $options);

    // Подготовленный запрос для безопасности
    $sql = "SELECT * FROM Абоненты WHERE адрес LIKE :address AND телефон LIKE :phone";
    $stmt = $pdo->prepare($sql);
    
    // Выполнение запроса с параметрами
    $stmt->execute([
        ':address' => '%Советской%',
        ':phone' => '%5%'
    ]);

    // Вывод результатов
    echo "<h2>Результаты поиска:</h2>";
    while ($row = $stmt->fetch()) {
        echo "<p>";
        echo "ФИО: {$row['фамилия']} {$row['имя']} {$row['отчество']}<br>";
        echo "Дата рождения: {$row['дата_рождения']}<br>";
        echo "Телефон: {$row['телефон']}<br>";
        echo "Адрес: {$row['адрес']}";
        echo "</p><hr>";
    }

} catch (PDOException $e) {
    die("Ошибка подключения к БД: " . $e->getMessage());
}
?>
