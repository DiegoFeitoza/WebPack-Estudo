export default class Pessoa {
	constructor(nome, idade){
		this.nome = nome;
		this.idade = idade;
	}

	toString(){
		return `A pessoa cadastrada se chama ${this.nome} e tem ${this.idade} anos de idade`;
	}
}