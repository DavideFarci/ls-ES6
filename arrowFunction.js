const contaVocali = (testo) => {
  const vocali = ["a", "e", "i", "o", "u"];
  let numVocali = 0;

  // Ciclo su ogni lettera del testo e controllo se è una volcale
  for (let i = 0; i < testo.length; i++) {
    const singoloCarattere = testo[i].toLowerCase();
    if (vocali.includes(singoloCarattere)) {
      numVocali++;
    }
  }
  return numVocali;
};

console.log(contaVocali("TESTO DI PROVA"));
