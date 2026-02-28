// Typing Animation
const text = "Welcome to Portfolio Tristan Razzaq";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.querySelector(".typing").textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 70);
    }
}
typeEffect();

// Fade Animation on Scroll
const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
    faders.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});