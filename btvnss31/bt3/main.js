const boxes = document.querySelectorAll('.box');
const container = document.getElementById('main');
boxes.forEach(box => {
    box.addEventListener('mouseover', () => {
        const color = box.getAttribute('data-color');
        container.style.backgroundColor = color;
    });
    box.addEventListener('mouseout', () => {
        container.style.backgroundColor = '';
    });
});
