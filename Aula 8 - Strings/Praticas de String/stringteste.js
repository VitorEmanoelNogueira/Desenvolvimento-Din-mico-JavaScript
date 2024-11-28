let nome = 'Josepimbas Araujo'
console.log(nome.length);

let resultado = nome.length > 15 ? 'Tmj parceiro' : 'Coloca o nome completo aí meu nobre.'
console.log(resultado);

let bigJose = nome.toLocaleUpperCase();
console.log(bigJose);

let atomic = 'I am the all range atomic';
let atomicPosition = atomic.indexOf('atomic');
console.log(atomicPosition);

let cortaramAFraseMeno = atomic.slice(0, 8);
console.log(cortaramAFraseMeno);
console.log(atomic);

let cortePotente = atomic.slice(atomic.indexOf('range'));
console.log(cortePotente);

let inclusaoTrue = atomic.includes('range');
console.log(inclusaoTrue);
let inclusaoFalse = atomic.includes('recovery');
console.log(inclusaoFalse);

let at1 = 'I am';
let at2 = ' Recovery Atomic.';
let at3 = at1.concat(at2);
console.log(at3);

let ohNaoMeusEspacosSeraoRetirados = '              Oh boy           ';
console.log(ohNaoMeusEspacosSeraoRetirados.trim());

let bah = 'Now this is interesting';
let bahbah = bah.split(' ');
console.log(bahbah);

let cah = '1, 2, 3, 4, 5, 6';
let cahcah = cah.split(',');
console.log(cahcah);

let j = 'HTML e CSS3 champ'
let pos = j.indexOf('CSS3');
console.log(pos);
let newString = j.substring(7, 11);
console.log(newString);

let frase = 'I am a loser.';
if(frase.startsWith('I am')){
    let sub = frase.substring(4);
    let novaString = sub.replace(' a loser', 'atomic');
    let novaStringMaiuscula = novaString.toLocaleUpperCase();
    console.log(novaStringMaiuscula);
}
let verdadeiraFrase = frase.replace('a loser.', 'ATOMIC!');

console.log(verdadeiraFrase);

let url ='http://minhaempresa.com.br/filme?nome=poder&atores=Lucas,Guilherme'

const parametros = url.split('?')[1];
console.log(parametros)

const divisao2 = parametros.split('&');
console.log(divisao2);

for(let i = 0; i < divisao2.length; i++){
    if(divisao2[i].startsWith('atores=')){
        divisao2[i] = 'atores= ' + divisao2[i].substring(7).toLocaleUpperCase();
    }else{
        divisao2[i] = divisao2[i].toLocaleUpperCase();
    }
};

console.log(divisao2);

const nomes = ['João', 'Henrique', 'Paul', 'Zeus', 'Garfield', 'Andrew', 'Daniel', 'Alex'];

let newNomes = nomes.map(nome => {
    if(nome.length < 5){
        return nome.toLocaleUpperCase();
    }else{
        return nome;
    }
});

console.log(newNomes)