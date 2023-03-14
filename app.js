function customCursor() {
  const bigBall = document.querySelector('.cursor__ball--big');
  const smallBall = document.querySelector('.cursor__ball--small');
  const hoverables = document.querySelectorAll('.hoverable');
  
  document.body.addEventListener('mousemove', onMouseMove);
  for (let i = 0; i < hoverables.length; i++) {
    hoverables[i].addEventListener('mouseenter', onMouseHover);
    hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
  }
  
  function onMouseMove(e) {
    gsap.to(bigBall, .4, {
      x: e.pageX - 15,
      y: e.pageY - 15
    })
    gsap.to(smallBall, .1, {
      x: e.pageX - 5,
      y: e.pageY - 7
    })
  }
  
  function onMouseHover() {
    gsap.to(bigBall, .3, {
      scale: 4
    })
  }
  function onMouseHoverOut() {
    gsap.to(bigBall, .3, {
      scale: 1
    })
  }
  }
  customCursor();

  function randomBackground() {
    const colors = [
      "#edede9",
      "#f8f9fa",
      "#f4f1de",
      "#fffcf2",
    ];
    const documentBody = document.querySelector('body');
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    documentBody.style.backgroundColor = randomColor;

    const svg = document.getElementById('svg__inherit_bg');
    const menuToggleSvg = document.getElementById("svg__menu_toggle")

    const bgColor = getComputedStyle(documentBody).backgroundColor;
    svg.style.fill = bgColor;
    svg.style.stroke = bgColor;
    menuToggleSvg.style.fill = bgColor;
}

const randomiseSwitch = document.getElementById("colourSwitchToggle")
randomiseSwitch.addEventListener("click", () => {
  randomBackground();
})

randomBackground()

function typingAnimation() {
    
    class TypeWriter {
        constructor(txtElement, words, wait = 1600) {
          this.txtElement = txtElement;
          this.words = words;
          this.txt = '';
          this.wordIndex = 0;
          this.wait = parseInt(wait, 10);
          this.type();
          this.isDeleting = false;
        }
      
        type() {
          const current = this.wordIndex % this.words.length;
          const fullTxt = this.words[current];
          if(this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
          } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
          }
          this.txtElement.innerText = this.txt; 
          let typeSpeed = 50;
          if(this.isDeleting) {
            typeSpeed /= 2;
          }
          if(!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
          } else if(this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
          }
      
          setTimeout(() => this.type(), typeSpeed);
        }
      }
      
      document.addEventListener('DOMContentLoaded', initType);   
    
      function initType() {
        const txtElement = document.querySelector('.wordData');
        const words = JSON.parse(txtElement.getAttribute('data-words'));
        const wait = txtElement.getAttribute('data-wait');
        new TypeWriter(txtElement, words, wait);
      }
    
    }
    
typingAnimation()

    
function dateSelect() {
  const welcomeDay = document.getElementById("welcomeDay");
  const date = new Date();
  const day = date.getDay();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  welcomeDay.textContent = days[day];
}
dateSelect();

function hoverCta() {
  const ctaIdentifier = document.querySelector(".h__link_opacity_setter")

  ctaIdentifier.addEventListener("mouseenter", () => {
    gsap.to("#anim__cta_circle", {
      duration: 0.5, 
      opacity: 0,
    })
  })

  ctaIdentifier.addEventListener("mouseleave", () =>  {
    gsap.to("#anim__cta_circle", {
      duration: 0.5, 
      opacity: 1,
    })
  })
}
hoverCta();