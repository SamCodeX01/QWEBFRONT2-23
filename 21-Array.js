
//Array - Arranjo de dados - Lista de valores

let carro1 = "Gol";
let carro2 = "Celta Preto";
let carro3 = "Fox";
let carro4 = "Opala";
let carro5 = "Ferrari";

let carros = ["Gol", "Celta Preto", "Fox", "Opala", "Ferrari"];

carros.push("Mustang"); //push adiciona novos elementos no ARRAY e coloca eles no final da lista
console.log(carros[4]); //Aqui esta pegando a posição 4 do array que é a "Ferrari"
console.log(carros.pop); //Remove o último item do final do array   
carros.unshift("Logan, Doblo"); //Adiciona novos elementos no inicio do array
carros.shift(); //Remove o primeiro elemento do array

console.log(carros.indexOf("Opala")); //Mostra o índice do valor busco dentro do array
console.log(carros); //Aqui esta chamando todos os itens de lista do array
console.log(carros.length); //Mostra quantas posições ou valores tem o array    

let itemParaExcluir = carros.indexOf("Opala");
carros.splice(itemParaExcluir,1); //Remove items de dentro do array
