class ContaCliente{

    constructor(numeroConta, saldo, credito, debito){
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.credito = credito;
        this.debito = debito;
    }

    calcularSaldoAtual(){
        return this.saldo - this.debito + this.credito;
    }

    verificarSaldoAtual(){
        const saldoAtual = this.calcularSaldoAtual();
        if(saldoAtual >= 0){
            alert(`Saldo positivo: R$${saldoAtual}`);
        }else{
            alert(`Saldo negativo: R$${saldoAtual}`);
        }
    }
}

let numeroConta = prompt('Digite o número da conta do cliente.');
let saldo = parseFloat(prompt('Digite o saldo do cliente;'));
let credito = parseFloat(prompt('Digite o credito do cliente;'));
let debito = parseFloat(prompt('Digite o debito do cliente;'));

const c1 = new ContaCliente(numeroConta, saldo, credito, debito);
c1.verificarSaldoAtual();