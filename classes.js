class Veicolo {
  #marca;
  #anno;
  #colore;

  /**
   *
   * @param {string} marca
   * @param {number|string} anno
   */
  constructor(marca, anno) {
    // Usiamo i setter marca e anno pre validare i dati in ingresso
    this.marca = marca;
    this.anno = anno;
  }

  /**
   * @param {string}
   */
  get colore() {
    return this.#colore;
  }
  /**
   * @param {string}
   */
  get marca() {
    return this.#marca;
  }
  /**
   * @param {number|string}
   */
  get anno() {
    return this.#anno;
  }

  get eta() {
    return this.#calcolaEtà();
  }

  set colore(value) {
    this.#colore = value;
  }
  set marca(value) {
    if (!value || !value.trim()) {
      throw new Error("La marca è obbligatoria");
    }
    this.#marca = value.toLowerCase();
  }
  set anno(value) {
    if (value.toString().length < 4) {
      throw new Error("L'anno deve contenere 4 cifre");
    }
    this.#anno = value;
  }

  // METODI

  /**
   *
   * @returns {string}
   */
  informazioni() {
    return `Marca: ${this.#marca}, Anno: ${this.#anno}, colore: ${
      this.#colore
    }`;
  }

  /**
   *
   * @returns {number}
   */
  annoAttuale() {
    return new Date().getFullYear();
  }

  /**
   *
   * @returns {number}
   */
  #calcolaEtà() {
    return this.annoAttuale() - this.#anno;
  }
}

const auto = new Veicolo("Fiat", 1978);

auto.colore = "rosso";
auto.marca = "Alfa Romeo";

console.log(auto);
console.log(auto.informazioni());
console.log(auto.annoAttuale());
console.log(auto.eta);

class Automobile extends Veicolo {
  #numeroPorte;
  #alimentazione;

  // conterrà un contatore di istanze della classe automobile
  static numIstanze = 0;

  constructor(marca, anno, numeroPorte) {
    // super invoca il costruttore della classe padre (solo se necessario)
    super(marca, anno);
    this.numeroPorte = numeroPorte;
  }

  get numeroPorte() {
    return this.#numeroPorte;
  }

  get alimentazione() {
    return this.#alimentazione;
  }

  set numeroPorte(value) {
    this.#numeroPorte = +value;
  }

  set alimentazione(value) {
    this.#alimentazione = +value;
  }
}

const auto2 = new Automobile("BMW", 2019);
auto2.colore = "blu";

console.log(auto2.informazioni());
