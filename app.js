

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

function handleMouseMove(event) {
  const blob = document.querySelector('#blob');
  const { pageX, pageY } = event;
  blob.getBoundingClientRect();
  const adjustedX = pageX
  const adjustedY = pageY
  
  blob.animate({
    left: `${adjustedX}px`,
    top: `${adjustedY}px`
  }, { duration: 3000, fill: "forwards" });
}

document.addEventListener('mousemove', handleMouseMove);