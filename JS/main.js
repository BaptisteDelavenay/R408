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
}

let clicker = new Clicker();
let button = document.getElementById("button");
let afficheNB = document.getElementById("compteur");

button.addEventListener("click", function () {
  clicker.incrementer(1);
  afficheNB.innerHTML = clicker.getCompteur();
});
