export default class Cliente {
  #id: string;
  #nome: string;
  #idade: number;
  #sexo: string;
  #endereço: string;
  #numero: number;
  #canal: string;
  #mesDeEntrada: number;
  #datadaPrimeiraCompra: number;
  #indicaçao: string;

  constructor(
    nome: string,
    idade: number,
    sexo: string,
    endereço: string,
    numero: number,
    canal: string,
    mesDeEntrada: number,
    dataPrimeiraCompra: number,
    indicaçao: string,
    id: string = null
  ) {
    this.#nome = nome;
    this.#idade = idade;
    this.#sexo = sexo;
    this.#endereço = endereço;
    this.#numero = numero;
    this.#canal = canal;
    this.#mesDeEntrada = numero;
    this.#datadaPrimeiraCompra = dataPrimeiraCompra;
    this.#indicaçao = indicaçao;
    this.#id = id;
  }

  static vazio() {
    return new Cliente("", 0, "", "", 0, "", 0, 0, "", );
  }

  get id() {
    return this.#id;
  }
  get nome() {
    return this.#nome;
  }
  get idade() {
    return this.#idade;
  }
  get sexo() {
    return this.#sexo;
  }
  get endereço() {
    return this.#endereço;
  }
  get numero() {
    return this.#numero;
  }
  get canal() {
    return this.#canal;
  }
  get mesDeEntrada() {
    return this.#mesDeEntrada;
  }
  get datadaPrimeiraCompra() {
    return this.#datadaPrimeiraCompra;
  }
  get indicaçao() {
    return this.#indicaçao;
  }
}
