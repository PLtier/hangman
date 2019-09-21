const check = (word, letter, changeObject, loseHealth) => {
  let letterIndexes = [];
  [...word].forEach((el, i) => {
    switch (el.letter) {
      case letter.toLowerCase():
        letterIndexes.push(i);
        break;
    }
  });
  switch (letterIndexes.length) {
    case 0:
      loseHealth();
      break;
    default:
      changeObject(letterIndexes);
  }

  console.log(letterIndexes);
};

export { check };
