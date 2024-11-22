import React, { useState } from 'react';
import products from './data/product';
import Cart from './components/carrinho-checkout/cart';
import Checkout from './components/carrinho-checkout/checkout';
import Product from './components/carrinho-checkout/product';

function AppCarrinho() {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) =>
            prevCart.filter((item) => item.id !== productId)
        );
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        
        <div>
            <div className='navbar1'>
                <nav>
                    <a href="/inicio">BEM-VINDO</a>
                    <ul className="list">
                        <li><a href="/profile">Perfil</a></li>
                        <li><a href="/carrinho">Carrinho</a></li>
                        <li><a href="/catalogo">Catalogo</a></li>
                    </ul>
                    
                </nav>
            </div>
            <h1>Loja Online</h1>
            <div>
                {products.map((product) => (
                    <Product key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>
            <Cart cart={cart} removeFromCart={removeFromCart} />
            <Checkout cart={cart} clearCart={clearCart} />
        </div>
    );
}

export default AppCarrinho;
