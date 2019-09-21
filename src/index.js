import "./styles.scss";
import { newGame } from "./mainGame.js";
import { generateKeyboard } from "./keyboard.js";
generateKeyboard();

document
  .querySelector(".get-new-password-btn")
  .addEventListener("click", newGame);
