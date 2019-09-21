const rawAlphabet =
  "A Ą B C Ć D E Ę F G H I J K L Ł M N Ń O Ó P R S Ś T U W Y Z Ź Ż";
const alphabet = rawAlphabet.split(" ");

let keyboardPlace = document.querySelector(".keyboard-place");

const generateKeyboard = () => {
  alphabet.forEach((el, i) => {
    let btn = document.createElement("BUTTON");
    btn.innerText = el;
    btn.id = i;
    btn.className = "letter-button";
    keyboardPlace.append(btn);
  });
};

export { generateKeyboard, keyboardPlace };
