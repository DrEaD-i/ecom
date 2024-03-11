document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.buy-button');
    const checkoutBtn = document.getElementById('checkout-btn');

    buyButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const item = event.target.closest('.skateboard-item');
            const name = item.querySelector('.board-name').textContent;
            const price = item.querySelector('.board-price').textContent;

            
            addToCart(name, price);
        });
    });

    function addToCart(name, price) {

        let cartItems = localStorage.getItem('cartItems');

        cartItems = cartItems ? JSON.parse(cartItems) : [];

        cartItems.push({ name, price });

        localStorage.setItem('cartItems', JSON.stringify(cartItems));

    }
})