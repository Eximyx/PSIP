function changeImage() {
    document.getElementById('img').style.height = '100px';
    document.getElementById('img').style.width = '100px';
    document.getElementById('img').style.border = '2 px solid blue';
    document.getElementById('img').style.position = 'fixed';
    document.getElementById('img').style.bottom = '0';
    document.getElementById('img').style.left = '0';
}

setTimeout(() => {
    var images = [];
    Array.from(document.querySelectorAll('img')).forEach(img => {
        images.push(img.src);
    });

    console.log(images);
}, 5000);

function openWindow() {
    window.open("layout.html", "№22 Сенкевич Виталий Андреевич", "width=500,height=300,scrollbars=yes");
}

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('form').addEventListener('submit', function(event) {
        var name = document.getElementById('name').value;
        var phone = document.getElementById('phone').value;
        var email = document.getElementById('email').value;
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var phonePattern = /^\+?[0-9\s\-]{7,15}$/;
    
        if (name === '') {
            alert('Имя не может быть пустым');
            event.preventDefault();
        } else if (!phonePattern.test(phone)) {
            alert('Введите корректный телефон');
            event.preventDefault();
        } else if (email !== '' && !emailPattern.test(email)) {
            alert('Введите корректный email');
            event.preventDefault();
        }
        
    });

})
