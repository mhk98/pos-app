import React from 'react';
import Cart from './src/Cart';
import useProducts from './src/hooks/useProducts';

const Order = () => {
    const [products, setProducts] = useProducts()

    return (
        <div>
            {
                products?.map(product => <Cart key={product.id} product={product}></Cart>)
            }
        </div>
    );
};

export default Order;