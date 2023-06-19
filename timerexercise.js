//Timers Excecise

//COUNTDOWN

function countdown(num) {
  let timer = setInterval(() => {
    console.log(num);
    num--;

    if (num === 0) {
      console.log("DONE!");
      clearInterval(timer);
    }
  }, 1000);
}

//UNCOMMENT 'countdown()' FROM BELOW TO RUN THE GAME. 

//countdown(4)

//RANDOM-GAME

function randomGame() {
  let counter = 0;
  let timer = setInterval(() => {
    const randomNumb = Math.random();
    counter++;

    console.log(randomNumb);

    if (randomNumb > 0.75) {
      clearInterval(timer);
      console.log("Number of tries:", counter);
    }
  }, 1000);
}

//UNCOMMENT 'randomGame()' FROM BELOW TO RUN THE GAME. 

//randomGame();
