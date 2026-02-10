class Clicker {
  constructor() {
    this.compteur = 0;
  }

  getCompteur() {
    return this.compteur;
  }

  incrementer(val) {
    this.compteur += val;
    return this.compteur;
  }

  payer(val) {
    this.compteur -= val;
    return this.compteur;
  }
}

let clicker = new Clicker();
let button = document.getElementById("button");
let afficheNB = document.getElementById("compteur");

let loup = document.getElementById("loup");
let alpha = document.getElementById("alpha");
let loupia = document.getElementById("loupia");
let tralelouloup = document.getElementById("tralelouloup");
let loup67 = document.getElementById("loup67");

button.addEventListener("click", function () {
  clicker.incrementer(1);
  afficheNB.innerHTML = clicker.getCompteur();
});

loup.addEventListener("click", function () {
  Clicker.payer(10);
});
alpha.addEventListener("click", function () {
  Clicker.payer(200);
});
loupia.addEventListener("click", function () {
  Clicker.payer(500);
});
tralelouloup.addEventListener("click", function () {
  Clicker.payer(1000);
});
loup67.addEventListener("click", function () {
  Clicker.payer(6767);
});
