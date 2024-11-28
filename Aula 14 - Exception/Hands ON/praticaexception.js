function divisao(a, b){
    if (b === 0){
        throw new Error('Divisão por zero não é possível!')
    }
    return a/b;
}

try{
    const res = divisao(2, 0);
    console.log(`O resultado é ${res}`);
}catch(error){
    console.log(`Ocorreu um erro: ${error.message}`);
}