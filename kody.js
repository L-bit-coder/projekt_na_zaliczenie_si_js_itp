// SELEKTORY
const cards = document.querySelectorAll(".pokemon-card"); // querySelectorAll ✔
const navLinks = document.querySelectorAll("nav a");
const header = document.querySelector("header"); // querySelector ✔

// DATA (Date)  daje nam efekt na dole strony
const footer = document.querySelector("footer p");
const today = new Date();
footer.textContent += " | " + today.toLocaleDateString();

// ANIMACJA PO ZAŁADOWANIU (setTimeout) pokazuje nam ladowanie sie strony
setTimeout(() => {
  cards.forEach((card, index) => {
    card.style.opacity = "0";
    setTimeout(() => {
      card.style.transition = "0.5s";
      card.style.opacity = "1";
    }, index * 200);
  });
}, 500);

// INTERAKCJA CLICK losuje nam kolorek tła okienka
cards.forEach((card) => {
  const button = card.querySelector("button");

  button.addEventListener("click", (event) => {
    event.preventDefault(); // ✔

    const clickedCard = event.target.closest(".pokemon-card");

    clickedCard.classList.toggle("active");

    const randomColor = `hsl(${Math.random() * 360}, 70%, 80%)`;
    clickedCard.style.backgroundColor = randomColor; // style ✔
  });
});

// KEYBOARD (keydown) reaguje na klikniecie przesuwajac okienka o 5 stopni
document.addEventListener("keydown", (e) => {
  if (e.key === "r") {
    cards.forEach((card) => {
      card.style.transform = `rotate(${Math.random() * 10 - 5}deg)`; // transform ✔
    });
  }
});

// SCROLL reaguje na scroll zmieniajac kolor tłą napisu na gorze
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.background = "#ff0000";
  } else {
    header.style.background = "#cc0000";
  }
});

// AUTO ZMIANA KART (setInterval)
setInterval(() => {
  const randomCard = cards[Math.floor(Math.random() * cards.length)];

  randomCard.classList.add("highlight");
});
