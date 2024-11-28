// Primeira forma de criar objetos
const pessoa = {
    nome: 'Dante',
    sobrenome: 'Axoloti'
}

console.log(pessoa['nome']);
console.log(pessoa['sobrenome']);

//Segunda forma de criar objetos
const funcionario = new Object();
funcionario.nome = 'Karen';
funcionario.sobrenome ='Page';
const funcionariocompleto = funcionario.nome + ' ' + funcionario.sobrenome;

console.log(funcionario.nome);
console.log(funcionario.sobrenome);
console.log(funcionariocompleto);

//Terceira forma de criar objetos

function criarHeroi(nome, sobrenome, nomeHeroi){
    return {
        nome,
        sobrenome, 
        nomeHeroi,
        get Descricao(){
            return `${this.nome} ${this.sobrenome}, o(a) ${nomeHeroi}.`
        }
    };
}

const h1 = criarHeroi('Matt', 'Murdock', 'Demolidor');
const h2 = criarHeroi('Scott', 'Summers', 'Ciclope');
const h3 = criarHeroi('Peter', 'Parker', 'Homem-Aranha');

console.log(h1);
console.log(h2);
console.log(h3);
console.log(`${h1.nomeHeroi}, ${h2.nomeHeroi}, ${h3.nomeHeroi}`);

const h4 = criarHeroi('Jean', 'Grey', 'Fênix');

console.log(h1.Descricao, h2.Descricao, h3.Descricao, h4.Descricao);

function criarPessoa(nome, sobrenome, i){
    return{
        nome,
         sobrenome,
         idade: i,
         nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
         }
        }
}

const p1 = criarPessoa("Arthur", "Silva", 20)

const p2 = criarPessoa("João","Silva", 45)

console.log(p1)
console.log(p2)

console.log(p1.nomeCompleto());

