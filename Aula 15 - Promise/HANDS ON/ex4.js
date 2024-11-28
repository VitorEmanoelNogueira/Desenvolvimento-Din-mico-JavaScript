function obterValor(valor){
    return new Promise((resolve, reject)=> {
        if(valor >= 10){
            valor+= 2;
            resolve(valor)
        }else{
            reject('Não foi possível obter valor');
        }
    })
}

function dobrarvalor(valor){
    return valor * 10;
}

function valorMais10(valor){
    return valor + 10;
}

obterValor(11)
.then((res) => {
    console.log('Valor obtido');
    return dobrarvalor(res);
}).then((newValue) => {
    console.log('Valor dobrado obtido, somando 10...');
    return valorMais10(newValue);
}).then((valo) =>{
    console.log('Somando mais 5...');
    valo += 5;
    console.log(`O valor final é ${valo}`);
}).catch((erro) => {
    console.log(`Ocorreu um erro: ${erro}`);
})