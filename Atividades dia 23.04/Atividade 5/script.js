/* 5) Uma cidade pretende apurar os votos de sua eleição. Faça um programa para ler o número total de eleitores. 
Em seguida o número de votos do candidato X, o número de votos do candidato Y, total de votos brancos e total
de votos nulos (a soma desses quatro, deve ser igual ao total de eleitores). 
Calcular e escrever o percentual que cada um representa em relação ao total de eleitores. */

let numero_eleitores, numero_votos, votos_branco, votos_nulos, candidato_x, candidato_Y
let candidato_x_porcento, candidato_Y_porcento, votos_branco_porcento, votos_nulos_porcento

numero_eleitores = Number(prompt('Digite o numero total de votos: '));
candidato_x = Number(prompt('Digite o numero total de votos para o candidato x: '));
candidato_Y = Number(prompt('Digite o numero total de votos para o candidato y: '));
votos_branco = Number(prompt('Digite o numero total de votos em branco: '));
votos_nulos = Number(prompt('Digite o numero total de votos nulos: '));

numero_votos =  candidato_x + candidato_Y + votos_branco + votos_nulos

candidato_x_porcento =  candidato_x / numero_votos * 100
candidato_Y_porcento =  candidato_Y / numero_votos * 100
votos_branco_porcento = votos_branco / numero_votos * 100
votos_nulos_porcento =  votos_nulos / numero_votos * 100

if(numero_votos > numero_eleitores){
    alert('Fraude mais votos que eleitores, os politico tao rubando')
}else{
    alert(`A quantidade de votos é: ${numero_eleitores} 
    \nsendo: ${candidato_x_porcento} % de votos para o candidato x
    \npara o candidato y foi: ${candidato_Y_porcento}% de votos 
    \npara os votos em brancos: ${votos_branco_porcento}% de votos 
    \npara votos nulos foi: ${votos_nulos_porcento}% porcento de votos nulos`)
}
