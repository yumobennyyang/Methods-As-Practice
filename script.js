

// Adjust on load and when window resizes
window.addEventListener('load', adjustImagePosition);
window.addEventListener('resize', adjustImagePosition);

function toggleAccordion(element) {
    element.classList.toggle('active');

    const content = element.querySelector('.accordion-content');
    const arrow = element.querySelector('.arrow');

    if (element.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
        arrow.style.transform = 'rotate(0deg)';
    } else {
        content.style.maxHeight = null;
        arrow.style.transform = 'rotate(-450deg)';
    }

    setTimeout(adjustImagePosition, 0);
}
