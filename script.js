const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const buttons = document.querySelector(".buttons");

let yesSize = 1;

// Move NO inside the card
function moveNoButton() {
  const containerRect = buttons.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = containerRect.width - btnRect.width;
  const maxY = containerRect.height - btnRect.height;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  // 📳 vibrate on mobile
  if (navigator.vibrate) {
    navigator.vibrate(80);
  }

  message.textContent = "Are you sure? 🥺";
}

// Hover (desktop)
noBtn.addEventListener("mouseover", moveNoButton);

// Touch (mobile)
noBtn.addEventListener("touchstart", moveNoButton);

// Click NO
noBtn.addEventListener("click", () => {
  yesSize += 0.15;
  yesBtn.style.transform = `scale(${yesSize})`;
  message.textContent = "Please forgive me 😭💔";
});

// Click YES
yesBtn.addEventListener("click", () => {
  message.textContent = "Yay!!! I love you ❤️😍 Thank you for forgiving me!";
  noBtn.style.display = "none";

  if (navigator.vibrate) {
    navigator.vibrate([100, 50, 100, 50, 200]);
  }
});
