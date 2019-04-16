const carro = {
	modelo: 'Corsa',
	cor: 'Prata',
	valor: 15000
}

function clone(objeto){
	return {...objeto}
}

const carroNovo = clone(carro);
carroNovo.cor = 'Preto';
carroNovo.modelo = 'Palio';
carroNovo.valor = 10000;

console.log(carro, carroNovo);