const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const clearButton = document.getElementById('clearButton');
const gif = document.getElementById('gif');
const gifComunista = document.getElementById('gifComunista');
const audio = document.getElementById('audio');

noButton.addEventListener('click', () => {
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

yesButton.addEventListener('click', () => {
    gif.style.display = 'block';
    audio.play();
});

clearButton.addEventListener('click', () => {
    gifComunista.style.display = 'block';
    audioUniaoSovietica.play(); // Toca o áudio da União Soviética
});