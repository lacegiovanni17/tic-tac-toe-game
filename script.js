const status = document.querySelector(".status");
const reset = document.querySelector(".reset");
const Divs = document.querySelectorAll(".tic");

//game variables
let gameLive = true; //otherwise not live
let xIsNext = true;
let winner = null;

//symbol constants
const xSymbol = "✕";
const oSymbol = "○";

//function to convert X and O to the css style of X and O above
const letterToSymbol = (letter) => (letter === "X" ? xSymbol : oSymbol);

//function to be called in the winner mode
const winnerMode = (letter) => {
  gameLive = false; //if winner then game is not on again
  winner = letter;
  if (winner === "X") {
    //when X
    status.innerHTML = `${letterToSymbol(winner)} has won!`;
  } else {
    //when O
    status.innerHTML = ` <span>${letterToSymbol(winner)} has 
        won! </span>`;
  }
};

//reset button
const handleReset = () => {
  //reset click
  xIsNext = true;
  status.innerHTML = `${xSymbol} is next`;
  winner = null; //winner is empty
  for (const Div of Divs) {
    Div.classList.remove("X"); //both classes are removed
    Div.classList.remove("O");
    Div.classList.remove("won");
  }
};

//check whether is equal to O or X
const checkStatus = () => {
  const tic0 = Divs[0].classList[1];
  const tic1 = Divs[1].classList[1];
  const tic2 = Divs[2].classList[1];
  const tic3 = Divs[3].classList[1];
  const tic4 = Divs[4].classList[1];
  const tic5 = Divs[5].classList[1];
  const tic6 = Divs[6].classList[1];
  const tic7 = Divs[7].classList[1];
  const tic8 = Divs[8].classList[1];

  //to check winner
  if (tic0 && tic0 === tic1 && tic0 === tic2) {
    //tic0 is declared cos its must not be undefined
    winnerMode(tic0);
    //color for winner
    Divs[0].classList.add("won");
    Divs[1].classList.add("won");
    Divs[2].classList.add("won");
  } else if (tic3 && tic3 === tic4 && tic3 === tic5) {
    winnerMode(tic3);
    Divs[3].classList.add("won");
    Divs[4].classList.add("won");
    Divs[5].classList.add("won");
  } else if (tic6 && tic6 === tic7 && tic6 === tic8) {
    winnerMode(tic6);
    Divs[6].classList.add("won");
    Divs[7].classList.add("won");
    Divs[8].classList.add("won");
  } else if (tic0 && tic0 === tic3 && tic0 === tic6) {
    winnerMode(tic0);
    Divs[0].classList.add("won");
    Divs[3].classList.add("won");
    Divs[6].classList.add("won");
  } else if (tic1 && tic1 === tic4 && tic1 === tic7) {
    winnerMode(tic1);
    Divs[1].classList.add("won");
    Divs[4].classList.add("won");
    Divs[7].classList.add("won");
  } else if (tic2 && tic2 === tic5 && tic2 === tic8) {
    winnerMode(tic2);
    Divs[2].classList.add("won");
    Divs[5].classList.add("won");
    Divs[8].classList.add("won");
  } else if (tic0 && tic0 === tic4 && tic0 === tic8) {
    winnerMode(tic0);
    Divs[0].classList.add("won");
    Divs[4].classList.add("won");
    Divs[8].classList.add("won");
  } else if (tic2 && tic2 === tic4 && tic2 === tic6) {
    winnerMode(tic2);
    Divs[2].classList.add("won");
    Divs[4].classList.add("won");
    Divs[6].classList.add("won");
  } else if ((tic0, tic1, tic2, tic3, tic4, tic5, tic6, tic7, tic8)) {
    gameLive = false;
    status.innerHTML = "Game is tied!";
  } else {
    xIsNext = !xIsNext;
    if (xIsNext) {
      //if true
      status.innerHTML = `${xSymbol} is next!`;
    } else {
      status.innerHTML = `<span>${oSymbol} is next! </span>`;
    }
  }
};

// to determine which div cell location we click on
const handleDivsClick = (r) => {
  //div click
  const classList = r.target.classList;

  if (classList[1] === "X" || classList[1] === "O") {
    //oncle x or o is clicked, you cant change it
    return;
  }

  if (xIsNext) {
    classList.add("X"); //X class is added to be styled in css
    checkStatus(); //call funtion
  } else {
    classList.add("O"); //O class is added to be styled in css
    checkStatus(); //call function
  }
};

reset.addEventListener("click", handleReset);

for (const Div of Divs) {
  //looking at each div
  Div.addEventListener("click", handleDivsClick);
}
