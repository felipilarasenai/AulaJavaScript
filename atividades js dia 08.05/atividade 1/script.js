let num

num = Number(prompt('Digite 1 Para falar com o atendente\n Digite 2 para falar com o RH \n Digite 3 para falar com o gerente \n Digite 4 para sair'))

switch(num){
    case 1:
        alert('Atendente')
        break;
    case 2:
        alert('RH')
        break;
    case 3:
        alert('Gerente')
        break;
    case 4:
        alert('Sumir')
        break;
}