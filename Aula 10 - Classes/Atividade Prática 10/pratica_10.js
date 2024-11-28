class Funcionario{
    constructor(nome, idade, cargo){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar(){
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e trabalho como ${this.cargo}.`);
    }

    trabalhar(){
        console.log(`${this.nome} está trabalhando no cargo de ${this.cargo}!`)
    }
}

class Gerente extends Funcionario{
    constructor(nome, idade, cargo, departamento){
        super(nome, idade, cargo);
        this.departamento = departamento;
    }
    
    gerenciar(){
        console.log(`${this.nome} está gerenciando o departamento de ${this.departamento}!`)
    }
}

class Desenvolvedor extends Funcionario{
    constructor(nome, idade, cargo, linguagem){
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar(){
        console.log(`${this.nome} está programando em ${this.linguagem}!`)
    }
}

let g1 = new Gerente('Paulo', 29, 'Gerente de Vendas', 'Vendas');
let p1 = new Desenvolvedor('Vitor', 20, 'Desenvolvedor Frontend', 'JavaScript');

g1.seApresentar();
g1.trabalhar();
g1.gerenciar();

p1.seApresentar();
p1.trabalhar();
p1.programar();

let f1 = new Funcionario('Jose', 34, 'Telemarketing');
f1.seApresentar();
f1.trabalhar();
