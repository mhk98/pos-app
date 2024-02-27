import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle, faPenToSquare, faBan, faHandHolding, faScissors, faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { useEffect } from 'react';
import './Cart.css'
import Product from './Home/Product';
import useProducts from './hooks/useProducts';


const Cart = ({product}) => {
    
    const [cart, setCart] = useState([])
    const [item, setItem] = useState({cart})
    const [finalCart, setFinalCart] = useState([])
    

    const handleAddToCart = (product) =>{
        setCart(product)
    }
    // console.log(cart)
    // const {name, price} = cart || {};
    // console.log(cart?.name)
    

    useEffect(  () =>{
        if(cart){
            setItem(cart)
        }
    }, [cart])

    console.log(item.name)


    const handleAddToFinalCart = (item) =>{
        let newFinalCart= [...finalCart, item] 
        setFinalCart(newFinalCart)
    }
    const handleDeleteToFinalCart = (finalCart) =>{
        
        let newFinalCart= finalCart.pop()
        setFinalCart(newFinalCart)
    }

    let subtotal = 0;
    let shipping = 0;
    for(const product of finalCart){
        subtotal = subtotal + product.price;
        shipping = shipping + product.shipping;
    }

    const tax = parseFloat(subtotal * 0.15).toFixed(2);
    const discount = parseFloat(subtotal * 0.1).toFixed(2);
    const total = subtotal + shipping + tax + discount;

    const handleRemoveProduct = product =>{
        const rest = item.filter(pd => pd.id !== product.id);
        setItem(rest);
        
    }

    return (
            <div className='cart mt-4 p-2 cart-container'>
                <div className='d-flex justify-content-between'>
                <button className='border-0'><FontAwesomeIcon className='icon-btn' icon={faPenToSquare}></FontAwesomeIcon></button>
                <h6>Name:{item.name}</h6>
                <h6 className='mr-10'>Price:{item.price}</h6>
                <button className='border-0' onClick={() => handleAddToFinalCart(item)}><FontAwesomeIcon className='icon-btn' icon={faPlusCircle}></FontAwesomeIcon></button>
                <h6>Quantity:${finalCart.length}</h6>
                <button className='border-0' onClick={() => handleDeleteToFinalCart(item)}><FontAwesomeIcon className='icon-btn' icon={faMinusCircle}></FontAwesomeIcon></button>
                <h6>Total Price: {subtotal}</h6>
                <button onClick={() => handleRemoveProduct(product)} className='border-0'>X</button>
                </div>
                <div>
                    <p>SubTotal: ${subtotal}</p>
                    <p>Tax: ${tax}</p>
                    <p>Shipping: ${shipping}</p>
                    <p>Discount on Cart: ${discount}</p>
                    </div>

                    <div className='d-flex justify-content-between total'>
                        <div>Products Count:{finalCart.length}</div>
                        <div>
                        <h3 className='total-order'>Total: ${total}</h3>
                        </div>
                </div>

                <div className='d-flex'>
                    <h1 className='user-action1'><button><FontAwesomeIcon icon={faBan}></FontAwesomeIcon>Cancel</button></h1>
                    <h1 className='user-action2'><button><FontAwesomeIcon icon={faHandHolding}></FontAwesomeIcon>Hold</button></h1>
                    <h1 className='user-action3'><button><FontAwesomeIcon icon={faScissors}></FontAwesomeIcon>Discount</button></h1>
                    <h1 className='user-action4 '><button><FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon>Pay Now</button></h1>
                </div>
                <div>
                    <Product handleAddToCart={handleAddToCart}></Product>
                </div>
            </div>
    );
};

export default Cart;