// Typing Animation

const text = "For The Most Amazing Girl ❤️";
const typing = document.getElementById("typing");

let i = 0;

function typeWriter() {

    if (i < text.length) {

        typing.innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter, 100);

    }

}

window.onload = function () {

    typeWriter();

    createHearts();

};


// Cute Messages

const messages = [

    "You deserve all the happiness in the world ❤️",

    "Your smile makes every day beautiful 🌸",

    "You are stronger than you think 💖",

    "You make ordinary moments magical ✨",

    "Keep smiling because it suits you 😊",

    "You are someone's favorite person ❤️",

    "You make life brighter ☀️",

    "Never stop dreaming 🌙",

    "You are wonderful just the way you are 🌹",

    "Happy Birthday Beautiful 🎂"

];

function changeReason() {

    const random = Math.floor(Math.random() * messages.length);

    document.getElementById("reason").innerHTML = messages[random];

}


// Surprise Gift

const giftButton = document.getElementById("giftButton");

const giftMessage = document.getElementById("giftMessage");

giftButton.addEventListener("click", function () {

    if (giftMessage.style.display === "block") {

        giftMessage.style.display = "none";

    } else {

        giftMessage.style.display = "block";

        launchConfetti();

    }

});

// Floating Hearts

function createHearts() {

    setInterval(function () {

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "%";

        heart.style.fontSize = (20 + Math.random() * 20) + "px";

        heart.style.animationDuration = (5 + Math.random() * 5) + "s";

        document.querySelector(".hearts").appendChild(heart);

        setTimeout(function () {

            heart.remove();

        }, 9000);

    }, 500);

}


// Confetti

function launchConfetti() {

    for (let j = 0; j < 100; j++) {

        const confetti = document.createElement("div");

        confetti.style.position = "fixed";

        confetti.style.left = Math.random() * 100 + "%";

        confetti.style.top = "-20px";

        confetti.style.width = "10px";

        confetti.style.height = "10px";

        confetti.style.backgroundColor =
            "hsl(" + Math.random() * 360 + ",90%,60%)";

        confetti.style.borderRadius = "50%";

        confetti.style.zIndex = "9999";

        confetti.style.transition = "all 3s linear";

        document.body.appendChild(confetti);

        setTimeout(function () {

            confetti.style.top = "110vh";

            confetti.style.transform =
                "translateX(" + (Math.random() * 300 - 150) + "px) rotate(720deg)";

        }, 50);

        setTimeout(function () {

            confetti.remove();

        }, 3200);

    }

}


// Smooth Fade-in

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0px)";

        }

    });

});

document.querySelectorAll("section").forEach((section) => {

    section.style.opacity = "0";

    section.style.transform = "translateY(50px)";

    section.style.transition = "all 1s ease";

    observer.observe(section);

});