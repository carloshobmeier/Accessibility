document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const contrastButton = document.createElement('button');
    contrastButton.textContent = 'Alto Contraste';
    contrastButton.addEventListener('click', toggleContrast);

    document.querySelector('header').appendChild(contrastButton);

    function toggleContrast() {
        body.classList.toggle('high-contrast');
    }
});




let fontSize = 16;

function zoomIn() {
    fontSize += 2;
    updateFontSize();
}

function zoomOut() {
    fontSize = Math.max(12, fontSize - 2); // Garante que o tamanho mínimo seja 12px
    updateFontSize();
}

function updateFontSize() {
    document.body.style.fontSize = fontSize + 'px';
}





