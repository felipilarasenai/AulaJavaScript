let data_nascimento;

data_nascimento = Number(prompt('Digite a sua data de nascimento: '))

switch(true){
    case data_nascimento <= 1945:
        alert('Sem Geração');
        break;
    case data_nascimento > 1945 && data_nascimento <= 1964:
        alert('Baby Boomer');
        break;
    case data_nascimento > 1964 && data_nascimento <= 1980:
        alert('Geração X');
        break;
    case data_nascimento > 1980 && data_nascimento <= 1996 :
        alert('Geração y');
        break;
    case data_nascimento > 1996 && data_nascimento <= 2010:
        alert('Geração Z');
        break;
    case data_nascimento > 2010:
        alert('Geração Alfa');
        break;
    default:
        alert('Ta errado');
};