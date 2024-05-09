let contaBancaria
let saldoBancario
let operacaoDesejada
let valorDeposito, valorSaque

contaBancaria = prompt('Digite a sua conta bancária (xxxx-x): ')
saldoBancario = Number(prompt('Digite o seu saldo'))
operacaoDesejada = Number(prompt('1) Saldo\n2) Depósito\n3) Saque\n\nOperação: '))


switch(operacaoDesejada){

    case 1:
        alert('Seu saldo: R$' + saldoBancario)
        break

    case 2:
        valorDeposito = Number(prompt('Qual o valor do depósito? (R$): '))
        saldoBancario = saldoBancario + valorDeposito
        alert('Seu saldo: R$' + saldoBancario)
        break

    case 3:
        valorSaque = Number(prompt('Qual o valor do saque? (R$): '))

        if(valorSaque <= saldoBancario){

            saldoBancario = saldoBancario - valorSaque
            alert('Seu saldo: R$' + saldoBancario)
            
        }else{

            alert('Tá sem grana miserávellllll!')

        }

        break

    default:
        alert('Você não digitou uma opção válida!')

}