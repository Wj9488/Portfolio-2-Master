console.log("Canvas connected")

const canvas = document.getElementById("canvasTwo");
const ctx = canvas.getContext("2d");
const particlesArray = [];

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const particleNumber = 2;
const joiningLineWidth = 0.25;
const onClickLineNumber = 300;
// If on mouse follow mode change this value to sub 20 to not crash computer

window.addEventListener("resize", () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});

const mouse = {
  y: undefined,
  x: undefined,
};

canvas.addEventListener("click", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
  for(let i = 0; i < onClickLineNumber; i++) {
    particlesArray.push(new Particle())
  }
})

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
  for(let i = 0; i < particleNumber; i++) {
    particlesArray.push(new Particle())
  }
});

// Switch is below

class Particle {
  constructor() {
  this.x = mouse.x;
  this.y = mouse.y;
//   this.x = Math.random() * canvas.width;
//   this.y = Math.random() * canvas.height;
  this.size = Math.random() * 5 + 1;
  this.speedX = Math.random() * 3 - 1.5;
  this.speedY = Math.random() * 3 - 1.5;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) {
     this.size -= 0.1; 
    }
  }
  drawCircle() {
    // Setting the opacity to 0 makes the canvas animation just lines
    ctx.fillStyle = "rgba(59, 59, 59, 0.2)";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initialise() {
  for (let i = 0; i < 100; i++) {
    particlesArray.push(new Particle())
  }
}
initialise();

function handleParticles() {
  for(let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].drawCircle();
    for (let j = 0; j < particlesArray.length; j++) {
      const distanceX = particlesArray[i].x - particlesArray[j].x;
      const distanceY = particlesArray[i].y - particlesArray[j].y;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      if (distance < 100) {
        ctx.beginPath();
        ctx.strokeStyle = "rgba(59, 59, 59, 1)";
        // ctx.strokeStyle = "rgba(59, 59, 59, 0.4)";
        ctx.lineWidth = joiningLineWidth;
        ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
        ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
        ctx.stroke();
      } 
    }
    if (particlesArray[i].size <= 0.3) {
      particlesArray.splice(i, 1);
      i--;
    }
  }
}

function triggerAnimation() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(59, 59, 59, 1)"; 
  // ctx.fillStyle = "rgba(59, 59, 59, 0.5)"; 
  handleParticles(); 
  requestAnimationFrame(triggerAnimation);
}
triggerAnimation();