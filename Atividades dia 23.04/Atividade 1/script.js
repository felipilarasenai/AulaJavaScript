/*1) Crie um programa que peça os dados de um cliente: Nome, idade, nacionalidade, endereço. 
Após digitados os dados, mostrar na tela a seguinte mensagem "Cliente [Nome], com [idade] anos, 
[nacionalidade], reside no endereço [endereço]". Exemplo: Cliente Lucas, com 29 anos, brasileiro, 
reside no endereço Rua Victor Meirelles, 281, Centro, Florianópolis. */

let nome, idade, nacionalidade, endereco

nome = prompt("Digite seu nome: ")
idade = Number(prompt("Digite a sua idade: "))
nacionalidade = prompt("Digite a sua nacionalidade: ")
endereco = prompt("Digite o seu endereco: ")

alert('Cliente ' + nome + ', com ' + idade + ' anos, ' + nacionalidade + ', reside no endereço ' + endereco)