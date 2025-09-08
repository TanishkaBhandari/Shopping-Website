let cart = [];

function addToCart(productName, productPrice) {
    const item = {
        name: productName,
        price: productPrice
    };
    
    cart.push(item);

    localStorage.setItem('cart', JSON.stringify(cart));
    
    alert(`${productName} has been added to the cart!`);
    updateCartCount();
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.innerText = cart.length;
}

window.onload = function() {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartCount();
};

function searchFunction() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const suggestions = document.getElementById('suggestions');
    if (filter) {
        suggestions.innerHTML = `<p>Showing results for "${filter}"</p>`;
    } else {
        suggestions.innerHTML = '';
    }
}
