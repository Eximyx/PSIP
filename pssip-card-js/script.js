// Функция валидации email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Функция загрузки данных из Local Storage
function loadFeedbacks() {
    const feedbacks = JSON.parse(localStorage.getItem('feedbacks') || '[]');
    return feedbacks;
}

// Функция сохранения данных в Local Storage
function saveFeedback(formData) {
    let feedbacks = loadFeedbacks();
    feedbacks.push(formData);
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
}

// Обработчик формы
document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    if (!validateEmail(email)) {
        alert('Пожалуйста, введите корректный email адрес');
        return;
    }

    // Получаем данные из формы
    const formData = {
        name: document.getElementById('name').value,
        email: email,
        topic: document.getElementById('topic').value,
        message: document.getElementById('message').value,
        timestamp: new Date().toISOString()
    };

    // Сохраняем в Local Storage
    saveFeedback(formData);

    // Конвертируем данные в JSON формат
    const jsonData = JSON.stringify(formData, null, 2);

    // Создаем и скачиваем JSON файл
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'feedback.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    // Показываем все данные в alert
    let alertMessage = 'Отправленные данные:\n\n';
    for (let key in formData) {
        alertMessage += `${key}: ${formData[key]}\n`;
    }
    alert(alertMessage);

    // Очищаем форму
    this.reset();
});

// Добавим кнопку для просмотра всех сохраненных данных
const viewButton = document.createElement('button');
viewButton.textContent = 'Просмотреть сохраненные данные';
viewButton.style.marginTop = '20px';
document.querySelector('.container').appendChild(viewButton);

viewButton.addEventListener('click', function() {
    const feedbacks = loadFeedbacks();
    if (feedbacks.length === 0) {
        alert('Нет сохраненных данных');
        return;
    }

    let allData = 'Все сохраненные данные:\n\n';
    feedbacks.forEach((feedback, index) => {
        allData += `Запись ${index + 1}:\n`;
        for (let key in feedback) {
            allData += `${key}: ${feedback[key]}\n`;
        }
        allData += '\n';
    });
    alert(allData);
}); 