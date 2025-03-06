-- Создание базы данных
CREATE DATABASE IF NOT EXISTS `Телефонный_узел_связи` 
DEFAULT CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

USE `Телефонный_узел_связи`;

-- Создание таблицы Абоненты
CREATE TABLE IF NOT EXISTS `Абоненты` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `фамилия` VARCHAR(50) NOT NULL,
    `имя` VARCHAR(50) NOT NULL,
    `отчество` VARCHAR(50),
    `дата_рождения` DATE,
    `телефон` VARCHAR(15) NOT NULL,
    `адрес` TEXT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Вставка тестовых данных
INSERT INTO `Абоненты` (`фамилия`, `имя`, `отчество`, `дата_рождения`, `телефон`, `адрес`) VALUES
('Иванов', 'Иван', 'Иванович', '1980-01-15', '555-123-45', 'ул. Советской Армии, 15-2'),
('Петрова', 'Анна', 'Петровна', '1992-05-20', '555-678-90', 'пр. Ленина, 45'),
('Сидоров', 'Петр', 'Николаевич', '1975-12-03', '555-456-78', 'ул. Советской Конституции, 78-12');
