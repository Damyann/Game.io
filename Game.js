// Функция за актуализиране на деня, датата и часа
function updateDateTime() {
    const dayInfo = document.getElementById('day-info');
    const dateInfo = document.getElementById('date-info');
    const timeInfo = document.getElementById('time-info');

    const currentDate = new Date();

    // Ден на годината
    const startOfYear = new Date(currentDate.getFullYear(), 0, 0);
    const diff = currentDate - startOfYear;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);

    // Извличане на текущата дата (26.12 формат)
    const options = { month: '2-digit', day: '2-digit' };
    const formattedDate = currentDate.toLocaleDateString('bg-BG', options);

    // Извличане на текущото време (1:46 формат)
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const formattedTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;

    // Поставяме актуалната информация до иконките
    dayInfo.textContent = `${dayOfYear}`; // Ден от годината
    dateInfo.textContent = formattedDate; // Текущата дата
    timeInfo.textContent = formattedTime; // Текущия час

    // За да използваме UTC -10, ще го коригираме с 10 часа назад
    const utcMinusFive = new Date(currentDate.getTime() - (10 * 60 * 60 * 1000)); // Изваждаме 10 часа от текущото време
    const formattedTimeUTC10 = `${utcMinusFive.getHours()}:${utcMinusFive.getMinutes() < 10 ? '0' + utcMinusFive.getMinutes() : utcMinusFive.getMinutes()}`;

    // Актуализираме иконката за часа с време в UTC -10
    timeInfo.textContent = formattedTimeUTC10; // Час в UTC -10
}

// Обновяване на деня, датата и часа всяка секунда
setInterval(updateDateTime, 1000);

// Извикваме функцията веднъж при зареждане на страницата
updateDateTime();

// Получаваме елемента за логото
const logo = document.querySelector('.logo img');

// Добавяме събитие за клик върху логото
logo.addEventListener('click', function() {
    // Презареждаме страницата
    window.location.reload();
});

document.getElementById('logout').addEventListener('click', function() {
    // Пренасочване към главната страница - Login.html
    window.location.href = "../Login/Index.html"; // Път към Login.html
});
