function somarArray(array){
    return new Promise((resolve, reject) => {
        if(!Array.isArray(array)){
            reject('Isso não é um array!');
        }else{
            const soma = array.reduce((total, num) => total + num, 0);
            resolve(soma);
        }
    })
}

let blabla = '[1, 2, 3, 4, 5, 6]';
somarArray(blabla)
.then((resolve) => {
    console.log(`A soma dos números do array é: ${resolve}`);
}).catch((reject) => {
    console.log(`Erro: ${reject}`);
})