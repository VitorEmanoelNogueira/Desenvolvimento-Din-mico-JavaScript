class Pessoa {

    constructor(nome, sobrenome, idade){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade + ' anos';
    }

    falar(){
        console.log(`Olá, como vai?`);
    }

    get seApresentar(){
        console.log(`Olá, meu nome é ${this.nome + ' ' + this.sobrenome}, tenho ${this.idade}`);
    }
}

const p1 = new Pessoa('Dante', 'Axoloti', 18);
p1.falar();
p1.seApresentar;