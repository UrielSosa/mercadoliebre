let carritoConNumero = qs('.fa-shopping-basket');
let buttons = qsa('.add-to-cart');
let cart = [];

if(localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
}

// Hasta acá tenemos la variable cart con dos opciones(carrito vacio o lleno)

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        cart.push(e.target.value);
        carritoConNumero.innerText = cart.length;
        localStorage.setItem('cart', JSON.stringify(cart))
    })
});