import { check } from "./checkLetter.js";
import { keyboardPlace } from "./keyboard.js";

let word, health;

const passwords = [
  "gra",
  "niebieski",
  "zielony",
  "konstantynopol",
  "warszawa",
  "dom",
  "szkoła"
];

let passwordPlace = document.querySelector(".password-place"),
  alphabetButtons = document.getElementsByClassName("letter-button"),
  lifeCounter = document.querySelector(".life-counter");

const generatePassword = () => {
  let max = passwords.length - 1,
    min = 0;
  return passwords[Math.floor(Math.random() * (max - min + 1) + min)];
};

const clearGame = () => {
  passwordPlace.innerHTML = "";
  [...alphabetButtons].forEach(el => {
    el.classList.remove("letter-button-pressed");
    el.disabled = false;
  });
};

const newGame = () => {
  clearGame();
  health = 5;
  lifeCounter.innerText = health;
  //rozbijamy słowo na litery :)
  word = [...generatePassword()].map((el, i) => {
    return {
      letter: el,
      wasShot: false
    };
    
  }
  );

  word.forEach((el, i) => {
    let line = document.createElement("DIV");
    line.id = i;
    line.classList.add("lines");
    line.innerText = "-";
    passwordPlace.append(line);
  });
};

const checkWin = () => {
  let pointsToWin = word.length,
    actualAmountOfPoints = 0;

  word.forEach(letter => { if(letter.wasShot) actualAmountOfPoints++});
  if (actualAmountOfPoints == pointsToWin) {
    alert("win");
    newGame();
  }
};

const changeObject = indexesToChange => {
  indexesToChange.forEach(indexClicked => {
    word.forEach((letter, indexToBeChanged) => {
      if(indexClicked==indexToBeChanged) word[indexClicked].wasShot = true;
    });
  });
  changeHTML(word);
};

const changeHTML = word => {
  word.forEach((letter, index) => {
    if(letter.wasShot) passwordPlace.children[index].innerText = letter.letter;
  });
  checkWin();
};

const loseHealth = () => {
  health--;
  lifeCounter.innerText = health;
  if(health==0){
      alert("u losed");
      newGame();
  }
};

keyboardPlace.addEventListener("click", e => {
  e.target.classList.add("letter-button-pressed");
  e.target.disabled = true;
  check(word, e.target.innerText, changeObject, loseHealth);
  console.log(word);
});

newGame();

export { newGame };
