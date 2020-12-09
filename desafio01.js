/*Desafio
Crie um programa que leia 6 valores. Você poderá receber valores negativos e/ou positivos como entrada, devendo desconsiderar os valores nulos. Em seguida, apresente a quantidade de valores positivos digitados.

Entrada
Você receberá seis valores, negativos e/ou positivos.

Saída
Exiba uma mensagem dizendo quantos valores positivos foram lidos assim como é exibido abaixo no exemplo de saída. Não esqueça da mensagem "valores positivos" ao final. */

const numeros = new Array(6)
for (let i = 0; i < numeros.length; i++) {
  numeros[i] = parseFloat(gets()) 
 
}

let totalPositivos = numeros
  .filter((n) => n >= 0)
  .length
console.log(`${totalPositivos} valores positivos`);