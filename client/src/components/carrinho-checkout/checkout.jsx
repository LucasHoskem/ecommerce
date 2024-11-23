import React from 'react';

function Checkout({ cart, clearCart }) {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleCheckout = () => {
        alert(`Compra finalizada! Total: $${total.toFixed(2)}`);
        clearCart();
    };

    return (
        <div className="checkout-container">
            <h2 className="checkout-title">Checkout</h2>
            <p className="checkout-total">Total: R$ {total.toFixed(2)}</p>
            <button
                className="checkout-button"
                onClick={handleCheckout}
                disabled={cart.length === 0}
            >
                Finalizar Compra
            </button>
        </div>

    );
}

export default Checkout;
