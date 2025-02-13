// Function to create multiple floating hearts dynamically
document.addEventListener("DOMContentLoaded", function () {
    const heartContainer = document.querySelector(".heart-rain");

    for (let i = 0; i < 30; i++) {
        let heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.style.position = "absolute";
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animation = `heartFall ${3 + Math.random() * 4}s infinite linear`;
        heart.style.fontSize = `${Math.random() * 20 + 15}px`;
        heartContainer.appendChild(heart);
    }

    // Floating Balloons
    function createBalloon() {
        let balloon = document.createElement("div");
        balloon.innerHTML = "🎈";
        balloon.className = "heart-balloon";
        balloon.style.left = `${Math.random() * 100}vw`;
        document.body.appendChild(balloon);
        setTimeout(() => balloon.remove(), 5000);
    }
    
    setInterval(createBalloon, 2000);
});
