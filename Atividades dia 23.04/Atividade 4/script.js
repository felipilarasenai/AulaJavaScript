/* 4) Programar a conversão de uma temperatura digitada pelo usuário em graus Celsius para Fahrenheit. 
Mostrar o resultado na tela. */

let graus_celcius, fahrenheit

graus_celcius = Number(prompt('Digite a temperatura em graus celcius: '))

fahrenheit = graus_celcius * 1.8 + 32
alert('A conversão de graus celcius para fahrenheit é ' + fahrenheit)