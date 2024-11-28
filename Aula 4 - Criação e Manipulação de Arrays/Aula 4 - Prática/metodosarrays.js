var arrrr = [4, 5, 3, 5,3];

console.log("Array invertido: " + arrrr.reverse());

var arr1 = [1,2,3,4,5,6];

console.log(arr1.join('|'));

var retirado = arr1.shift();

console.log(retirado);

console.log(arr1);

console.log("Posição do número 3: " + arr1.indexOf(3));

arr1.push(7, 8);

console.log(arr1);

arr1.pop();

console.log(arr1);

var roberto = ['josé', 'carlos', 'roberto', 'fernando', 'rodrigo goes'];
console.log("kakakakakaka: " + roberto.slice(3))

let ar = [-5, 10, 15, 20, -3, 89];
// fazer um array só com números positivos a partir do acima

let ar2 = ar.filter(item => item > 0);
console.log(ar2);