let pais = 'Brasil';

if (pais == 'Brasil') {
    console.log('Você é brasileiro!')
}
else {
    console.log('Você é estrangeiro.')
}

let idade = 22;

if(idade < 16){
    console.log('Você não pode votar.')
}else if(idade < 18 || idade > 65){
console.log('Você pode votar opcionalmente.')    
}else{
    console.log('Seu voto é obrigatorio.')
}

let dia = 4;

switch (dia) {
    case 1:
        console.log('Hoje é Domingo!');
        break;
    case 2:
        console.log('Hoje é Segunda-Feira!');
        break;
    case 3:
        console.log('Hoje é Terça-Feira!');
        break;
    case 4:
        console.log('Hoje é Quarta-Feira!');
        break;
    case 5:
        console.log('Hoje é Quinta-Feira!');
        break;
    case 6:
        console.log('Graças a Deus é Sexta-Feira! kkkkkkkk');
        break;
    case 7:
        console.log('Sabadooooo!!!!');
        break;
    default:
        console.log('Esse dia da semana não existe!')
    break;
}

