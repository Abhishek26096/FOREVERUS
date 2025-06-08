function revealMessage() {
  const text = `From the moment we met 💫,
everything changed 💖.
You're the reason for my smile 😊,
my strength 💪, my peace 🕊️,
and my forever 🌈.
I love you endlessly ❤️.`;

  let i = 0;
  const speed = 50;
  const typeTarget = document.getElementById("typewriter");
  typeTarget.innerHTML = "";

  function typeWriter() {
    if (i < text.length) {
      typeTarget.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
}

// Floating Hearts (clone emojis randomly)
setInterval(() => {
  const heart = document.createElement("div");
  heart.innerText = ["💗", "💖", "💕", "💘"][Math.floor(Math.random() * 4)];
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = "20px";
  heart.style.top = "100vh";
  heart.style.opacity = "0.7";
  heart.style.animation = "floatHeart 5s linear";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 800);

// Surprise Modal
setTimeout(() => {
  document.getElementById("surpriseModal").style.display = "block";
}, 10000);

document.querySelector(".close").onclick = () => {
  document.getElementById("surpriseModal").style.display = "none";
};

// Music Toggle
const bgMusic = document.getElementById("bgMusic");
const toggleBtn = document.getElementById("musicToggle");

toggleBtn.onclick = () => {
  if (bgMusic.paused) {
    bgMusic.play();
    toggleBtn.innerText = "🔊 Playing";
  } else {
    bgMusic.pause();
    toggleBtn.innerText = "🎵 Play Music";
  }
};
