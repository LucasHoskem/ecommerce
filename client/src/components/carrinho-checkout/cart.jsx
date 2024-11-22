import React from 'react';

function Cart({ cart, removeFromCart }) {
    return (
        <div>
            <h2>Carrinho de Compras</h2>
            {cart.length === 0 ? (
                <p>Seu carrinho está vazio.</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            {item.name} - ${item.price} x {item.quantity}
                            <button onClick={() => removeFromCart(item.id)}>Remover</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Cart;
