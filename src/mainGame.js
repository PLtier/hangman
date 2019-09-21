import { check } from "./checkLetter.js";
import { generateKeyboard, keyboardPlace } from "./keyboard.js";

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
  word = [...generatePassword()].map((el, i) => {
    return {
      letter: el,
      wasShot: false
    };
  });

  [...word].forEach((el, i) => {
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

  word.forEach(letter => {
    switch (letter.wasShot) {
      case true:
        actualAmountOfPoints++;
        break;
    }
  });
  if (actualAmountOfPoints == pointsToWin) {
    alert("win");
    newGame();
  }
};

const changeObject = indexesToChange => {
  indexesToChange.forEach(indexClicked => {
    word.forEach((letter, indexToBeChanged) => {
      switch (indexClicked) {
        case indexToBeChanged:
          word[indexClicked].wasShot = true;
          break;
      }
    });
  });
  changeHTML(word);
};

const changeHTML = word => {
  word.forEach((letter, index) => {
    switch (letter.wasShot) {
      case true:
        passwordPlace.children[index].innerText = letter.letter;
        break;
    }
  });
  checkWin();
};

const loseHealth = () => {
  health--;
  lifeCounter.innerText = health;
  switch (health) {
    case 0:
      alert("u losed");
      newGame();
      break;
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
