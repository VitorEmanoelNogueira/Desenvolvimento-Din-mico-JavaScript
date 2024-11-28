let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numerosfiltrados = numeros.filter(item => item % 2 == 0);
console.log(numerosfiltrados);

let filtro2 = numeros.filter(
    function(valor){
        return valor > 5;
    }
)
console.log(filtro2);

function menorQue5(valor){
    return valor < 5;
}
let menoresQue5 = numeros.filter(menorQue5);
console.log(menoresQue5);

let tres = numeros.filter((valor) =>{
    return valor % 3 == 0;
})
console.log(tres);

let tresMaisSimples = numeros.filter(valor => valor % 3 == 0);
console.log(tresMaisSimples);
//Esses dois últimos são a mesma coisa.

let funcionarios = [
    {nome: 'Luiz', idade: 42},
    {nome: 'João', idade: 50},
    {nome: 'Paulo', idade: 35},
    {nome: 'Victor', idade: 20},
];

let pessoasListagem = funcionarios.filter(valor => console.log(valor.nome));

let nomesPequenos = funcionarios.filter(valor => {
    return valor.nome.length < 5;
})
console.log(nomesPequenos);

let produtos = [
    {id: 1, descricao: 'SmartPhone', categoria: 'Eletrônico'},
    {id: 2, descricao: 'Notebook', categoria: 'Eletrônico'},
    {id: 3, descricao: 'Geladeira', categoria: 'Eletrodomestico'},
    {id: 4, descricao: 'Fogão elétrico', categoria: 'Eletrodomestico'}
]

// Criar array que só mostra eletrônico, 
let eletronicos = produtos.filter(valor =>{
    return valor.categoria == 'Eletrônico';
});
console.log(eletronicos);

let eletrodomesticos = produtos.filter(valor =>{
    if(valor.id == 3 || valor.id == 4){
        return valor;
    }
});
console.log(eletrodomesticos);