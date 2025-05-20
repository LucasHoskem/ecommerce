import React from 'react';

function Checkout({ cart, clearCart, userId }) {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleCheckout = async () => {
        // Criação do objeto para enviar na requisição
        const orderData = {
            userId,  // Passando o ID do usuário
            total: total.toFixed(2),
            items: cart.map(item => ({
                menuItemId: item.id,  // Supondo que cada item tem um 'id' (identificador do menu)
                quantity: item.quantity,
                price: item.price,
            })),
        };

        try {
            // Envia uma requisição POST para a API
            const response = await fetch('http://localhost:5000/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });

            if (!response.ok) {
                throw new Error('Erro ao finalizar a compra');
            }

            // Se a requisição for bem-sucedida
            const order = await response.json();
            alert(`Compra finalizada com sucesso! Total: R$ ${total.toFixed(2)}`);
            clearCart();  // Limpa o carrinho após finalizar a compra

        } catch (error) {
            alert('Houve um erro ao processar sua compra. Tente novamente.');
            console.error(error);
        }
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
