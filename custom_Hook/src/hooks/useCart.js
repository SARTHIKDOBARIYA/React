import { useState, useEffect, useMemo } from "react";

export function useCart() {
    const [cart, setCart] = useState(() => {
        try{
            const savedCart= localStorage.getItem("cart")
            return savedCart ? JSON.parse(savedCart) : [];
        }catch (error){
            console.error('Failed to load cart', error);
        }
    });

    //persist cart to local storage
    useEffect(()=>{
        try{
            localStorage.setItem("cart", JSON.stringify(cart));
        }catch (error){
            console.error('Failed to save cart to localStorage', error);
        }
    },[cart])

    // sync across the tab
    useEffect(()=>{
        const handleStorage = (e) =>{
            if(e.key === 'cart'){
                try{
                    const newCart = JSON.parse(e.newValue || '[]')
                    setCart(newCart)
                }catch (error){
                    console.error('Failed to parse cart from localStorage', error);
                }
            }
        }
        window.addEventListener("storage", handleStorage);
        return ()=>window.removeEventListener("storage", handleStorage);
    },[])

    const addToCart = (product) => {
        setCart(currentCart => {
            const existingitem = currentCart.find(item => item.id === product.id)
            if(existingitem){
                return currentCart.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item)
            }
            return [...currentCart,{...product,quantity:1}]
        })
    }

    const removeFromCart = (productId) => {
        setCart(currentCart => currentCart.filter(item => item.id !== productId))
    }

    const updateQuantity = (productId, quantity) => {
        if(quantity < 1){
            return
        }
        setCart(currentCart => currentCart.map(item => item.id === productId ? {...item, quantity} : item))
    }

    // This is not required in React19 or later
    const total = useMemo(()=>{
        return Number(cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2))
    },[cart])

    return {
        cart,
        total,
        addToCart,
        removeFromCart,
        updateQuantity
    }
}