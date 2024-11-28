const carros = [
    {modelo: 'Audio A3', marca: 'Audi', ano: 2020},
    {modelo: 'Compass', marca: 'Jeep', ano: 2021}
]

for(let info in carros){
    console.log(carros[info]);
}

for (const carro of carros) {
    console.log(carro.ano);    
}


let b = 1;

while (b <= 10){
    console.log(b);
    b++
};

let t = 7;
do{
    console.log(t);
    t++
}while(t <= 5);


const numbers = [1, 2, 3, 4, 5];
let sum = 0;
let index = 0;

do{
    sum = numbers.reduce((accumulator, currentValue, currentIndex) => {
        if(currentIndex <= index){
            return accumulator + currentValue;
        }else{
            return accumulator;
        }
    }, 0);
    
    index++;
}while(index < numbers.length);

console.log(`A soma dos números é: ${sum}`);