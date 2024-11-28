const minhaPromise = new Promise((resolve, reject) => {

    let sucesso = false;

    if(sucesso){
        resolve('Deu bom!');
    }else{
        reject('Deu ruim!');
    }
})

minhaPromise
.then((resultado) => {
    console.log(`Foi sucesso: ${resultado}`);
}).catch((erro) => {
    console.log(`Foi sucesso não man: ${erro}`);
})

