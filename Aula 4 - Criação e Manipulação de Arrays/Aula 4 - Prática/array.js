let valores = [8, 1, 7, 2, 9, 11];

console.log(valores.length);

console.log(valores)

console.log(`Array valores invertido: ${valores.reverse()}`);

for (let pos = 0; pos < valores.length; pos++){
    console.log(`Posição: ${pos} Valor: ${valores[pos]}`);
}

let carros = [];
carros[0] = "Volvo";
carros[1] = "Jeep";
carros[2] = "Gol";

console.log(carros);

let motos = new Array("BMW", "Yamaha", "Honda");

console.log(motos);

let soma = 0;

for (let pos = 0; pos < valores.length; pos++){
    soma += valores[pos];
};
console.log(soma);

let media = soma/valores.length;
console.log(media);

// fazer o console mostrar o maior valor no array
let maior = 0;

for (const item of valores) {
    if(item > maior){
        maior = item;
    }
}

console.log(maior);

// criar um array com cidades e fazer o console mostrar a cidade com mais palavras

let cidade = ['Ribeirão das Neves', 'Belo Horizonte', 'Contagem'];
let maiorCidade = '';

for (const cid of cidade){
    if(cid.length > maiorCidade.length){
        maiorCidade = cid;
    }
}

console.log(maiorCidade);

let valores2 =[1, 24, 3, 4, 64, 2];

console.log(valores2.join('|'));

let retirado = valores2.shift();
console.log(`Valor retirado: ${retirado}`);

console.log(valores2);

console.log(`Posição do 4: ${valores2.indexOf(4)}`);

valores2.unshift(1);
valores2.push(69);

console.log(valores2);

valores2.pop();

console.log(valores2);

var ar = [-2, 10, -15, 0, 20, -13, 89];

var positivos = [];
var negativos = [];

for (const item of ar) {
    if(item > 0){
        positivos.push(item);
    }if (item < 0){
        negativos.push(item);
    }
}

console.log(positivos);
console.log(negativos);

let verificacaoPositivoOuDivisivelPor2 = false;
let numeros = [3, 30, 45, 60, 75];

for(pos = 0; pos < numeros.length; pos++){
    if(numeros[pos] % 2 !== 0 || numeros[pos] < 0){
        verificacaoPositivoOuDivisivelPor2 = true;
    }
}

let divisivelPor3e5Simul = true;
for(pos = 0; pos < numeros.length; pos++){
    if(numeros[pos] % 3 !== 0 || numeros[pos] % 5 !== 0){
        divisivelPor3e5Simul = false;
    }
}

console.log(`Pelo menos um número não é par ou menor que zero? ${verificacaoPositivoOuDivisivelPor2}`);

console.log(`O array tem números que são divisíveis por 3 e 5 simultaneamente? ${divisivelPor3e5Simul}`);