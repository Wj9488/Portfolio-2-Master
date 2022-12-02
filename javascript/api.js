

// function fetchData() {
//     const url = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=f1a8aa75096c8dcb70d713aedc14b11c"

//     fetch(url)
//     .then((res) => res.json())
//     .then((data) => console.log(data))
// }
// fetchData();

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
          this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
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

function date() {
    const welcomeDay = document.getElementById("welcomeDay");
    const date = new Date();
    const day = date.getDay();
    if(day === 0) {
        welcomeDay.textContent = " Sunda";
    }
    if(day === 1) {
        welcomeDay.textContent = " Monda";
    }
    if(day === 2) {
        welcomeDay.textContent = " Tuesda";
    }
    if(day === 3) {
        welcomeDay.textContent = " Wednesda";
    }
    if(day === 4) {
        welcomeDay.textContent = " Thursda";
    }
    if(day === 5) {
        welcomeDay.textContent = " Friday";
    }
    else {
        welcomeDay.textContent = " Saturda";
    }
}
date();