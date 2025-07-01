function toggleAccordion(element) {
    element.classList.toggle('active');

    const content = element.querySelector('.accordion-content');
    const arrow = element.querySelector('.arrow');

    if (element.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
        arrow.style.transform = 'rotate(90deg)';
    } else {
        content.style.maxHeight = null;
        arrow.style.transform = 'rotate(0deg)';
    }
}
