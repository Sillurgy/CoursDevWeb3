// - mouvement du vaisseau
const ship = document.querySelector("#ship")
let i = 0;

window.addEventListener("keydown", (event) => {
  const top = window.getComputedStyle(ship).top;
  if (event.key === "z") {
    ship.style.top = `${parseInt(top) - 20}px`;
  } else if (event.key === "s") {
    ship.style.top = `${parseInt(top) + 20}px`;
  }
});

window.addEventListener("keydown", (event) => {
  const left = window.getComputedStyle(ship).left;
  if (event.key === "q") {
    ship.style.left = `${parseInt(left) - 20}px`;
  } else if (event.key === "d") {
    ship.style.left = `${parseInt(left) + 20}px`;
  }
});

// - Insertion de HTML
window.addEventListener("keydown", (event) => {
  const titre = document.querySelector(".text");
  if (event.key === " ") {
    titre.innerHTML = "Use Z Q S D to move";
  }
});

// - Insertion de CSS
window.addEventListener("keydown", (event) => {
  const background = document.querySelector("body");
  if (event.key === " ") {
    background.style.backgroundColor = "black";
  }
});

// insertion d'une class
function maFunction() {
  var element = document.getElementById("madiv");
  element.classList.add("style");
}

// la boucle
for (let saut = 0; saut < 5; saut++) {
  console.log('Faire ' + saut + ' saut d\'affilé histoire de s\'ocuper');
}