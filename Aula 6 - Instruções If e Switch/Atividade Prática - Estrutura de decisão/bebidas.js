import { question } from 'readline-sync';

var bebida = question('Digite uma bebida sem acentuacao para escolha, entre: cafe, leite ou cha \n');

var valor;

switch(bebida){
    case "cafe": 
    valor = 4;
    console.log("A bebida é escolhida foi " + bebida + ", o valor a ser pago é de: R$ " + valor.toFixed(2) + ".");
    break;
    case "leite":
        valor = 3
        console.log("A bebida é escolhida foi " + bebida + ", o valor a ser pago é de: R$ " + valor.toFixed(2) + ".");
        break;
    case "cha":
        valor = 1
        console.log("A bebida é escolhida foi " + bebida + ", o valor a ser pago é de: R$ " + valor.toFixed(2) + ".");
        break;
    default:
        console.log("Desculpe! Não possuímos essa bebida, escolha entre: café, leite e chá.")
}

