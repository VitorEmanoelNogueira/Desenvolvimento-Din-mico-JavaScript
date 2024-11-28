class Funcionario{
    constructor(nome, idade, cargo){
        this.nome=nome;
        this.idade=idade;
        this.cargo=cargo; 
    }
    seApresentar(){
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e estou trabalhando como ${this.cargo}`
    }
    trabalhar(){
        return `${this.nome} está trabalhando no cargo de ${this.cargo}`
    }
}

class Gerente extends Funcionario{
    constructor(nome, idade, cargo, departamento){
        super(nome, idade, cargo)
        this.departamento=departamento;
    }
    gerenciar(){
        return`${this.nome} está gerenciando o departamento de ${this.departamento}`
    }
}

class Desenvolvedor extends Funcionario{
    constructor(nome, idade, cargo, linguagem){
        super(nome, idade, cargo);
        this.linguagem=linguagem;
    }
    programar(){
        return `${this.nome} está programando utilizando a linguagem ${this.linguagem}`
    }
}

function exibirErro(mensagem){
    const DivInfoFuncionario = document.getElementById("infoFuncionario");
    DivInfoFuncionario.innerHTML = `<p> Ocorreu um erro: ${mensagem}</p>`
}

document.getElementById("FormularioFuncionario").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;

    const idade = document.getElementById("idade").value;

    const cargo = document.getElementById("cargo").value;

    const departamento = document.getElementById("departamento").value;

    const linguagem = document.getElementById("linguagem").value;

    try{
        if (!nome || !idade || !cargo) {
            throw new Error("Por favor, preencha todos os campos obrigatórios.");
        }
        let funcionario;

        if (cargo==="Gerente") {
            if (!departamento) {
                throw new Error("Por favor, Gerente, insira seu departamento");
            }
            funcionario = new Gerente(nome, idade, cargo, departamento);
        }else if (cargo==="Desenvolvedor") {
            if (!linguagem) {
                throw new Error("Desenvolvedor, insira a linguagem de programação que você utiliza.")
            }
            funcionario = new Desenvolvedor(nome, idade, cargo, linguagem);
        } else { funcionario = new Funcionario(nome, idade, cargo);
        }

        const infoFuncionario = document.getElementById("infoFuncionario");

        if (cargo=== "Gerente") {
            infoFuncionario.innerHTML = `<p>${funcionario.seApresentar()}</p>
    
            <p>${funcionario.trabalhar()}</p>
            
            <p>${funcionario.gerenciar()}`
        } else if(cargo==="Desenvolvedor") {
            infoFuncionario.innerHTML = `<p>${funcionario.seApresentar()}</p>
    
            <p>${funcionario.trabalhar()}</p>
            
            <p>${funcionario.programar()}`
        } else {
            infoFuncionario.innerHTML = `<p>${funcionario.seApresentar()}</p>
    
            <p>${funcionario.trabalhar()}</p>`    
            
        }
    } catch (error) {

        exibirErro(error.message);
  
      }
  
    });