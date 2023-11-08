function sommaNumeri(num1, num2) {
  console.log(this);

  return num1 + num2;
}

// IL THIS RAPPRESENTA IL PADRE DELLA FUNZIONE

// Nel caso di una funzione dentro l'oggetto, il this rappresenta l'oggetto stesso
const math = {
  chiave1: "valore1",
  chiave2: "valore2",
  sommaNumeri: sommaNumeri,
};

// Nel caso di una funzione esterna all'oggetto, il this rappresenta l'oggetto globale (windows)
const sommaNumeri2 = (num1, num2) => {
  console.log(this);
  return num1 + num2;
};

math.sommaNumeri(1, 4);
sommaNumeri(1, 4);
