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
            <div className='navbar-container'>
                <nav className='navbar'>
                    <a href="/inicio">BEM-VINDO</a>
                    <ul className="navbar-menu">
                        <li className='navbar-item'><a href="/profile">Perfil</a></li>
                        <li className='navbar-item'><a href="/carrinho">Carrinho</a></li>
                        <li className='navbar-item'><a href="/catalogo">Catalogo</a></li>
                    </ul>
                    
                </nav>
            </div>
            <h1>Loja Online</h1>
            <div>
                {products.map((product) => (
                    <Product key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>
            <div className="cart-container">
                <Cart cart={cart} removeFromCart={removeFromCart} />
            </div>
            <div className="checkout-container">
                <Checkout cart={cart} clearCart={clearCart} />
            </div>

        </div>
    );
}

export default AppCarrinho;
