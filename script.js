const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

let yesSize = 1;

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200;
  const y = Math.random() * 80;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
  message.textContent = "Are you sure? 🥺";
});

noBtn.addEventListener("click", () => {
  yesSize += 0.2;
  yesBtn.style.transform = `scale(${yesSize})`;
  message.textContent = "Please forgive me 😭💔";
});

yesBtn.addEventListener("click", () => {
  message.textContent = "Yay!!! I love you ❤️😍 Thank you for forgiving me!";
  noBtn.style.display = "none";
});
