class Clicker {

    constructor(){
        this.compteur = 0
    }

    getCompteur(){
        return this.compteur
    }

    incrementer(val){
        this.compteur += val
        return this.compteur
    }

}

let clicker = new Clicker()
let button = document.getElementById("button");
let afficheNB = document.getElementById("compteur");

button.addEventListener("click", function(){
    clicker.incrementer(1);
    afficheNB.innerHTML = clicker.getCompteur()
})
    
    const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const btn = document.getElementById('burstBtn');

let particles = [];

// Ajuster la taille du canvas
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 4 + 2;
    this.speedX = Math.random() * 6 - 3;
    this.speedY = Math.random() * 6 - 3;
    this.color = '#8B0000'; // Rouge foncé
    this.opacity = 1;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.speedY += 0.1; // Gravité
    this.opacity -= 0.02; // Disparition progressive
  }

  draw() {
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function createExplosion(e) {
  for (let i = 0; i < 30; i++) {
    particles.push(new Particle(e.clientX, e.clientY));
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
    
    // Supprimer les particules invisibles
    if (particles[i].opacity <= 0) {
      particles.splice(i, 1);
      i--;
    }
  }
  requestAnimationFrame(animate);
}

btn.addEventListener('click', createExplosion);
animate();
