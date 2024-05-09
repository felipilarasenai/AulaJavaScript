let Mes

Mes = Number(prompt('Digite um mês (1 a 12: numérico): '))

switch(Mes){

    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        alert('O mês tem 31 dias!')
        break

    case 4:
    case 6:
    case 9:
    case 11:

        alert('O mês tem 30 dias!')
        break

    case 2:
        alert('O mês tem 28 dias!')
        break

    default:
        alert('Você não digitoun um número de 1 a 12! >.<')

}