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

    const products = [
        { name: "Smartphone X100", price: 1500},
        { name: "Fone Bluetooth Pro", price: 300},
        { name: "Notebook Ultra", price: 3500},
        { name: "Smartwatch Fit", price: 800},
        { name: "Câmera Digital Z7", price: 2500},
        { name: "Monitor 4K Vision", price: 2000},
        { name: "Teclado Mecânico Pro", price: 400},
        { name: "Mouse Gamer RX", price: 250},
        { name: "Caixa de Som Wave", price: 600},
        { name: "HD Externo 1TB", price: 500},
        { name: "Drone Phantom", price: 4500},
        { name: "Console Gamer X", price: 2500},
        { name: "Tablet Pro 10", price: 1800},
        { name: "Carregador Rápido Turbo", price: 150},
        { name: "Headset Gamer 7.1", price: 700},
        { name: "Impressora Multifuncional X", price: 1200},
      ];

    return (
        
        <div>
            <div className='navbar-container'>
                <nav className='navbar'>
                    <a href="/inicio">BEM-VINDO</a>
                    <ul className="navbar-menu">
                        <li className='navbar-item'><a href="/profile">Perfil</a></li>
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
