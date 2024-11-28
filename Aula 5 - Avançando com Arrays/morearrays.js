let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr2.splice(3, 4);

console.log(arr2);

let nomes =['Anthony', 'Vitor', 'Daniel', 'Thyago', 'Mickaelly'];
console.log(nomes);

let byebye = nomes.splice(1, 2, 'Felipe', 'Felicity');
console.log(byebye);

console.log(nomes);

let pais = ['Brasil', 'Colombia', 'Paraguai'];

console.log(pais);

pais.unshift('México');
console.log(pais);

let nomes2 = ['Guilherme', 'Manoel', 'Samuel', 'Davi', 'João']

//Adicionar Mônica, tirar último do array, encontrar posição do Samuel, trocar manoel por Emanoel
console.log(nomes2);
nomes2.splice(4, 0, 'Mônica');
console.log(nomes2);
nomes2.pop();
console.log(`A posição do Samuel é: ${nomes2.indexOf('Samuel')}`);
nomes2.splice(1, 1, 'Emanoel');

console.log(nomes2);

let pessoas = ['Eduardo', 'Joana', 'Wallace', 'Rosana', 'Josepimbas', 'Mário'];
let pessoas1 = pessoas.slice(2, 5);
console.log(pessoas);
console.log(pessoas1);

let gerente = ['Davi', 'Manoela'];
let herois = ['Miranha', 'Capitão América', 'Daredevil'];

let gerenteherois = gerente.concat(herois);

console.log(pessoas.concat(gerente));
console.log(gerenteherois);

let meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

console.log(meses);

let tri1 = meses.slice(0, 3);
let tri2 = meses.slice(3, 6);
let tri3 = meses.splice(6, 3);
let tri4 = meses.splice(6, 3);

console.log(`Primeiro trimestre: ${tri1}`);
console.log(`Segundo trimestre: ${tri2}`);
console.log(`Terceiro trimestre: ${tri3}`);
console.log(`Quarto trimestre: ${tri4}`);

