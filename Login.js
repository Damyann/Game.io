document.getElementById('login-btn').addEventListener('mousedown', function(event) {
    // Проверка дали е натиснато средното копче на мишката (код 1)
    if (event.button === 1) {
        // Отваря страницата в нов таб, когато е натиснато средното копче
        window.open("../Game/game.html", "_blank");
    } else {
        // Пренасочване към страницата за вход, ако не е средно копче
        window.location.href = "../Game/game.html";
    }
});

document.getElementById('register-btn').addEventListener('click', function() {
    // Пренасочване към страница за регистрация
    window.location.href = "register.html"; // Път за регистрация, ако имаш такава
});


document.getElementById('logout').addEventListener('click', function() {
    // Пренасочване към главната страница (например index.html)
    window.location.href = "../index.html"; // Пътят към главната страница
});
