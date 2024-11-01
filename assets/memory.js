const numbers = ["1","2","3","4","5","6","7","8","1","2","3","4","5","6","7","8"];
let clickBox = [];
let skor = 0;


function shuffleArray() {
  return numbers.sort(() => Math.random() - 0.5);
}

function playGame() {
  const shuffledArray = shuffleArray();
  const memoryContainer = document.querySelector('.memory-container');
  for (const numbers of shuffledArray) {
    memoryContainer.innerHTML += `<div class="memory-box">${numbers}</div>`
  };
  const boxes = document.querySelectorAll('.memory-box');
  for (const box of boxes) {
    box.addEventListener('click', boxClicked);
  }
}

function boxClicked() {

  if (this.classList.contains('active')) return;

  this.classList.add('active');
  clickBox.push(this.innerText);
  if (clickBox.length === 2) {
    if (clickBox[0] == clickBox[1]) {
      const activeBox = document.querySelectorAll('.memory-box.active');
      for (const box of activeBox) {
        box.classList.add('matched');
      }
      skor++;

      if(skor === 8) {
        alert('OYUN BİTTİ');
      }
    }

    const activeBox = document.querySelectorAll('.active');
    setTimeout(() => {
      for (const box of activeBox) {
        box.classList.remove('active');
      }
    },1000);
   
    

  
    clickBox = [];
  }
 

}
playGame();