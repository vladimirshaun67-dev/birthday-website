
// ELEMENTS

const startButton = document.getElementById("start-button");
const surpriseButton = document.getElementById("surprise-button");

const welcome = document.getElementById("welcome");
const letterSection = document.getElementById("letter-section");
const finalSection = document.getElementById("final-section");


// FIRST SURPRISE

startButton.addEventListener("click", () => {

    welcome.classList.add("hidden");

    letterSection.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// FINAL SURPRISE

surpriseButton.addEventListener("click", () => {

    letterSection.classList.add("hidden");

    finalSection.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// FLOATING HEARTS

const decoration = document.getElementById("floating-decor");

function createHeart() {

    const heart = document.createElement("span");

    heart.classList.add("heart");

    heart.innerHTML = Math.random() > 0.5 ? "♡" : "♥";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (12 + Math.random() * 18) + "px";

    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    decoration.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);

}

setInterval(createHeart, 800);
