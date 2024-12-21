document.addEventListener('DOMContentLoaded', () => {
    // Додаємо обробник подій для пунктів меню
    const menuElements = document.querySelectorAll('.menu-elements');
    menuElements.forEach(el => {
        el.addEventListener('click', () => {
            // Показуємо повідомлення при кліку на пункт меню
            alert(`Ви обрали розділ: ${el.textContent}`);
        });
    });

    // Додаємо обробник подій для логотипів брендів
    const brands = document.querySelectorAll('.band');
    brands.forEach(brand => {
        brand.addEventListener('click', () => {
            // Показуємо повідомлення при кліку на логотип бренду
            alert(`Ви обрали бренд: ${brand.alt}`);
        });
    });

    // Додаємо анімацію при наведенні на пункти меню
    const buttons = document.querySelectorAll('.menu-elements, .menu-elements-red');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            // Піднімаємо кнопку при наведенні
            button.style.transform = 'translateY(-2px)';
        });

        button.addEventListener('mouseleave', () => {
            // Повертаємо кнопку в початкове положення
            button.style.transform = 'translateY(0)';
        });
    });
});