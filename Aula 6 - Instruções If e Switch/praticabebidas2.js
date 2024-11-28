let escolha = 3;
var valor;

switch(escolha){
    case 1:
        valor = 4;
        console.log(`A bebida escolhida foi café. Custo: R$${valor.toFixed(2)}`);
        break;
    case 2:
        valor = 3;
        console.log(`A bebida escolhida foi leite. Custo: R$${valor.toFixed(2)}`);
        break;
    case 3:
        valor = 5;
        console.log(`A bebida escolhida foi chá. Custo: R$${valor.toFixed(2)}`);
        break;
    default:
        console.log('Escolha invalida!');
        break;
}