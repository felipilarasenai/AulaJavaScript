/* Numa competição de arremesso de peteca, o competidor tem direito a 3 arremessos para que a peteca caia em 
um alvo com áreas e pontuações de 0 a 5, sendo 5 no centro e 0 fora do alvo. Faça um programa que 
pergunte a pontuação de cada arremesso e ao final mostre o resultado (soma dos pontos) e a classifição: 

15 pontos (deus da peteca), de 14 a 10 (petequeiro profissa), de 9 a 5 (petequeiro de final de semana), 
de 4 a 1 (pseudo-petequeiro) e 0 pontos (nunca petequeiro).*/

let arremesso_um, arremesso_dois, arremesso_tres, soma_pontos

arremesso_um = Number(prompt('Digite a pontuaçao do primeiro arremesso: '))
arremesso_dois = Number(prompt('Digite a pontuaçao do segundo arremesso: '))
arremesso_tres = Number(prompt('Digite a pontuaçao do terceiro arremesso: '))

soma_pontos = arremesso_um + arremesso_dois + arremesso_tres

switch(true){
    case soma_pontos >= 15:
        alert('Parabéns você é o deus da peteca: ' + soma_pontos)
        break;
    case soma_pontos < 15 && soma_pontos >= 10:
        alert('Parabéns você é petequeiro profissa: ' + soma_pontos)
        break;
    case soma_pontos < 10 && soma_pontos >= 5:
        alert('você é o petequeiro de final de semana: ' + soma_pontos)
        break;
    case soma_pontos  < 5 && soma_pontos >= 1 :
        alert('você é o pseudo-petequeiro : ' + soma_pontos)
        break;
    default:
        alert('Nunca petequeiro')
}