const numeros = [1100,1500,1210,2980,2510,3170,4510,2134,1835];


console.log(numeros);

const numerosOrdenados = numeros.sort(); //Método sort() ordena os números do menor da esquerda para a direita

// console.log(numerosOrdenados);

// console.log(`O maior numero é: ${numerosOrdenados[2]}`)

console.log(`O maior numero é: ${numeros.sort()[(numeros.length-1)]}`);


