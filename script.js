const texts = [
    ", мое солнышко☀️", 
    ", мой зайчик🐇", 
    ", моя киса🐈",
    ", моя креветка🦐",
    ", моя мечта🌈",
    ", моя пицка🍕",
    ", моя лапка🐾",
    ", моя глазастая👀",
    ", моя сладкая🍭",
    ", моя черепашка🐢",
    ", моя лягушка🐸",
];

let textIndex = 0;
let imageIndex = 0;

const textElement = document.getElementById("text");
const imageElement = document.getElementById("image");
const audioElement = document.getElementById("audio");

function updateText() {
    textElement.style.opacity = 0; // Делаем текст непрозрачным перед изменением
    setTimeout(() => {
        textElement.textContent = texts[textIndex];
        textIndex = (textIndex + 1) % texts.length;
        textElement.style.opacity = 1; // Делаем текст снова полупрозрачным, чтобы он появился
    }, 500); // Задержка в 500 миллисекунд для плавного перехода
    setTimeout(updateText, 2000);
}

function updateImage() {
    imageElement.src = `img/${imageIndex + 1}.jpg`;
    imageIndex = (imageIndex + 1) % 39;
    setTimeout(updateImage, 250);
}

function toggleAudio() {
    if (audioElement.paused) {
        audioElement.play();
    } else {
        audioElement.pause();
    }
}

updateText();
updateImage();