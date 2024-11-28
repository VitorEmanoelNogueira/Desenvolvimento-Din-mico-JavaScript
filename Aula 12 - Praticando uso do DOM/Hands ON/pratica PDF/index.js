class Objeto{

    constructor(nome, descricao, categoria, preco){
        this.nome = nome;
        this.descricao = descricao;
        this.categoria = categoria;
        this.preco = `R$ ${preco.toFixed(2)}`;
    }
}

let objetos = [
    new Objeto('Samsumg A71', 'Celular para games', 'Eletrônico', 1500),
    new Objeto('Samsumg TAB G21', 'Tablet para estudo', 'Eletrônico', 2100),
    new Objeto('Fogão 4 bocas', 'Fogão para alimentação saudável', 'Eletrodomestico', 4000),
    new Objeto('Geladeira e Freezer', 'Congela rápido', 'Eletrodoméstico', 4000),
    new Objeto('Air Fryer', 'Agiliza seu dia', 'Eletrodoméstico', 950)];

    console.log(objetos);

function filtrarPorCategoria(){
   const inputCategoria = document.querySelector('#categoriaInput').value;
   const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const objetosFiltrados = objetos.filter(objeto => objeto.categoria === inputCategoria);

    if (objetosFiltrados.length === 0){
        resultado.innerHTML = 'Nenhum objeto encontrado para a categoria informada.';
        return;
    }
    objetosFiltrados.forEach(objeto =>{
        const li = document.createElement('li');
        li.innerHTML= `
        <strong>Nome:</strong> ${objeto.nome}<br>
        <strong>Descrição:</strong> ${objeto.descricao}<br>
        <strong>Categoria:</strong> ${objeto.categoria}<br>
        <strong>Preço:</strong> ${objeto.preco}<br><br>
        `
        resultado.appendChild(li);
    })

}