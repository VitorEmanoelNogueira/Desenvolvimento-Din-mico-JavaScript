class MinhaClasse{

    constructor(valor){
        this.valor = valor;
    }

    operacaoAssincrona(){
        return new Promise((resolve, reject) => {
            const multi = this.valor*2;
            if(multi >= 0){
                resolve(multi)
            }else{
                reject('O resultado é negativo!')
            }
        })
    }
}

const minhaClasse = new MinhaClasse(-2);
minhaClasse.operacaoAssincrona()
.then((resultado) => {
    console.log(`O resultado é: ${resultado}`)
}).catch((erro) => {
    console.log(`Erro: ${erro}`);
})