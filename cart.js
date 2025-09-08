let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function displayCart() {
        const cartItemsList = document.getElementById('cart-items-list');
        cartItemsList.innerHTML = '';
        
        let totalPrice = 0;

        if (cart.length === 0) {
            cartItemsList.innerHTML = '<p>Your cart is empty!</p>';
        } else {
            cart.forEach((item, index) => {
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');
                cartItem.innerHTML = 
                    `<div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <p>₹${item.price}</p>
                    </div>
                    <div class="cart-item-actions">
                        <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
                    </div>
                `;
                cartItemsList.appendChild(cartItem);
                
                totalPrice += item.price;
            });
        }

        document.getElementById('total-price').textContent = totalPrice;
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));  
        displayCart(); 
    }

    

function buyNow() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    document.getElementById("payment-modal").style.display = "flex";
}

function closePaymentModal() {
    document.getElementById("payment-modal").style.display = "none";
}

function processPayment(event) {
    event.preventDefault();
    const cardNumber = document.getElementById("card-number").value;
    const cvv = document.getElementById("cvv").value;
    const expiryDate = document.getElementById("expiry-date").value;

    if (cardNumber.length !== 16 || cvv.length !== 3 || !/^\d{2}\/\d{2}$/.test(expiryDate)) {
        alert("Invalid payment details. Please check your input.");
        return;
    }

    alert("Payment successful! Thank you for your purchase.");
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    closePaymentModal();
    displayCart();

    window.location.href = '/myntra clone/payment complete/index.html';
}
    displayCart();