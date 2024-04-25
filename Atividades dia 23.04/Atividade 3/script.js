/* 3) Desenvolva uma programação que peça ao usuário para digitar o ano do seu nascimento no formato (YYYY) e o ano atual 
também no formato (YYYY). Em seguida mostre na tela qual a idade do usuário em anos, em meses, em dias e em semanas. */

let ano_nascimento, ano_atual, idade_ano, idade_dias, idade_semanas, idade_mes

ano_atual = Number(prompt("Digite o ano atual: "));
ano_nascimento = Number(prompt("Digite quando você nasceu: "));

idade_ano = ano_atual - ano_nascimento;
idade_mes = idade_ano  * 12;
idade_semanas = idade_mes * 4;
idade_dias = idade_semanas * 7;

alert('Você tem ' + idade_ano + ' anos de vida\n' + 'Você tem ' + idade_mes + ' meses de vida\n'+ 
'Você tem ' + idade_semanas + ' semanas de vida\n'+ 'Você tem '+  idade_dias + ' dias de vida');

