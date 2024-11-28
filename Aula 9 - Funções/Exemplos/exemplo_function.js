function multi(x, y){
    return x*y;
}

let a = multi(2, 3);
console.log(a);
console.log(multi(4, 26));

function multi2(a, b, c = 5, d = 4){
    return a*b*c*d;
}
console.log(multi2(3, 4));

let infoCal = function(x, y, z){
    return x + y + z;
}
console.log(infoCal(2, 3, 4));

const soma = (num1, num2) => {
    return num1 + num2;
}
console.log(soma(3, 9));

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const valores = numeros.map((num) => num * num);
console.log(valores);

let listaProdutos = ['fogão', 'geladeira', 'air fryer'];
let listaModificada = listaProdutos.map((item) => {
    return item.charAt(0).toUpperCase() + item.slice(1);
});


console.log(listaModificada);



