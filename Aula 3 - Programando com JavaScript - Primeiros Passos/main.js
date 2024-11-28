//verificar se a é maior que b e b é divísivel por 2
let a = 21;
let b = 6;

console.log(a > b && b % 2 == 0);

// verificar se b é maior igual a ou b dividido por 2 o resultado é 2
console.log(b >= a || b / 2 == 2);

// verificar se a é maior que b e b maior igual a 5
console.log(a > b && b >= 5);

//verificar se b é par ou impar usando ternário

console.log(b % 2 == 0 ? 'par':'impar')


var idade, exp, niveled, certificado;

idade = 19;
exp = 1.2;
niveled = 'superior';
certificado = true;

if ((idade >= 18) && (exp >= 1) && (niveled === 'médio' || niveled === 'superior') && (certificado == true)){
    console.log("Aprovadissímo fi")
}else{
    console.log("Ainda não, meu jovem, boa sorte.")
}

// Solução PDF
// Dados do candidato
let idadeCandidato = 28;
let experienciaAnos = 5;
var nivelEducacao = 'superior';
var possuiCertificado = true;

//Critérios de elegibilidade
var idadeMinima = 18;
var experienciaMinima = 3;
var nivelEducaocaoMinimo = 'superior';
var certificadoObrigatorio = false;

var elegivel = idadeCandidato >= idadeMinima && experienciaAnos >= experienciaMinima && (nivelEducacao === nivelEducaocaoMinimo || possuiCertificado) && (!certificadoObrigatorio || possuiCertificado);

console.log("Elegível para a vaga " + elegivel);
