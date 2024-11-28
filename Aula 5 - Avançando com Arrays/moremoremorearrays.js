let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numsmulti = numeros.map(function(element){
    return element*2;
})
console.log(numsmulti);

let funcionarios = [
    {nome: 'Luiz', idade: 42},
    {nome: 'João', idade: 50},
    {nome: 'Paulo', idade: 35},
    {nome: 'Victor', idade: 20},
];

let nomes = funcionarios.map(pessoa => pessoa.nome);
console.log(nomes);

let total = 0;
for (const element of numeros){
    total += element;
}
console.log(total);

let tot = numeros.reduce(function(total, numero){
    return total + numero;
}, 0)
console.log(tot);

const array = [1, 'dois', 3, 'quatro', 5, 'seis', true];

let duplicado = array.map((valor) => {
    if (typeof (valor) === 'number') {
        return valor * 2;
    } else if (typeof (valor) === 'string') {
        return valor.toUpperCase();
    } else {
        return valor;
    }
});
console.log(duplicado);

let filtro = array.filter(valor => typeof(valor) === 'number');
console.log(filtro);

let somado = array.reduce(function(total, num){
    if (typeof(num) === 'number'){
        return total + num;
    }else{
        return total;
    }
},0);
console.log(somado);

