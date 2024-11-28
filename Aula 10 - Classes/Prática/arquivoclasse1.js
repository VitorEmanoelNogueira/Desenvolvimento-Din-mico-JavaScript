class DispositivoEletronico{

    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log('Já está ligado!')
            return;
        } this.ligado = true;
    }
}

class SmartPhone extends DispositivoEletronico{

    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

let s1 = new SmartPhone('Samsung', 'Vermelo', 'A31');
console.log(s1);
s1.ligar();
s1.ligar();