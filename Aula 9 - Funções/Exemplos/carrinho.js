const shoppingCart = [];

function addItemToCart(item){
    shoppingCart.push(item);
}

function removeItem(item){
    let index = shoppingCart.indexOf(item);
    if(index !== -1){
        shoppingCart.splice(index, 1);
        console.log(`${item} removed.`);
    }else{
        console.log('Item is not in the cart.')
    }
}

function viewcart(){
    if(shoppingCart.length == 0){
        console.log('Your shopping cart is empty.')
    }else{
        console.log('Itens in your shopping cart:');
        shoppingCart.forEach(element => {console.log(`Item ${shoppingCart.indexOf(element) + 1} - ${element}`)});
    }
}

function clearCart(){
    shoppingCart.length = 0;
    console.log('Your shopping cart has been cleared.')
}

addItemToCart('Blusa');
addItemToCart('PS5');
addItemToCart('Televisão');
viewcart();

removeItem('Feijão');
removeItem('Blusa');
viewcart();

clearCart();
viewcart();