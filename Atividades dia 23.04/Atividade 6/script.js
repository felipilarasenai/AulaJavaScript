/*6) Criar um programa que calcule o IMC, no qual o usuário deve digitar o seu peso e altura, realizar o cálculo 
(peso / altura * altura) e mostrar o resultado na tela, com 3 casas depois da vírgula. */

let altura, peso, calc_imc_mult, calc_imc

altura = Number(prompt('Digite a sua altura: '))
peso = Number(prompt('Digite o seu peso: '))

calc_imc_mult = altura * altura 

calc_imc = peso / calc_imc_mult

alert(`O seu imc é ${calc_imc}`)

if(calc_imc < 18.5){
    alert(`O seu imc é ${calc_imc} está com magreza coma mais ae`)
}else if(calc_imc <= 24.9){
    alert(`O seu imc é ${calc_imc} está normal ta de boa`)    
}else if(calc_imc <= 29.9){
    alert(`O seu imc é ${calc_imc} está com sobrepeso ta de boa mas se cuida`)
}else if(calc_imc <= 39.9){
    alert(`O seu imc é ${calc_imc} está com obesidade`)
}else if(calc_imc >= 40.00){
    alert(`O seu imc é ${calc_imc} está com obesidade grande cuidado como diz o seu madruga PRERIGO!!!`)
}

