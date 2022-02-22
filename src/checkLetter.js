const check = (word, letter, changeObject, loseHealth) => {
    let letterIndexes = [];
    word.forEach((el, i) => {if(el.letter==letter.toLowerCase()) letterIndexes.push(i)});
    switch (letterIndexes.length) {
      case 0:
        loseHealth();
        break;
      default:
        changeObject(letterIndexes);
    }
    console.log(letterIndexes, 'dd');
  };
  
  export { check };
