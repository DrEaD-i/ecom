document.addEventListener('DOMContentLoaded', function() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));

    const cartList = document.getElementById('cart-items');
        //Render cart items
    if (cartItems && cartList) {
        cartItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ${item.price}`;
            cartList.appendChild(li);
        });
    }

   
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            // Checkout
            alert('Thank you!');
            const cartItems = document.querySelector('.cart-items');
            if (cartItems) {
                cartItems.innerHTML = ''; 
                localStorage.removeItem('cartItems'); 
            }
        });
    }

    // Clear cart button
    const clearCartBtn = document.getElementById('clear-cart-btn');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', function() {
            const cartItems = document.querySelector('.cart-items');
            if (cartItems) {
                cartItems.innerHTML = ''; 
                localStorage.removeItem('cartItems'); 
            }
        });
    }
});
