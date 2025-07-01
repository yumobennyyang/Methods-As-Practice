document.querySelectorAll('.accordion').forEach(item => {
    item.addEventListener('click', () => {
        const arrow = item.querySelector('.arrow');
        const content = item.querySelector('.accordion-content');

        arrow.classList.toggle('rotate');
        content.classList.toggle('show');
    });
});
