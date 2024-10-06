// Redirect to PlanWay booking page when the button is clicked
document.querySelector('button').addEventListener('click', () => {
    window.location.href = 'https://www.planway.com/yourbookinglink';
});

// Получаем кнопку
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Отслеживаем прокрутку страницы
window.onscroll = function() {
    toggleScrollToTopBtn();
};

// Функция для отображения или скрытия кнопки
function toggleScrollToTopBtn() {
    if (window.scrollY > 300) { // Показываем кнопку, если прокрутка более 300px
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
}

// Прокрутка к началу страницы при нажатии на кнопку
scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
