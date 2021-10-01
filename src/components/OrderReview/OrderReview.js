import React from 'react';
import useProducts from '../../hooks/UseProducts';
import useCart from '../../hooks/UseCart'
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb'

const OrderReview = () => {

    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);




    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}

                    ></ReviewItem>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>


            </div>






            {/* <h1>{products.length}</h1>
            <h1>{cart.length}</h1>

            <h2>This is Order Review</h2>
            <Cart cart={cart}></Cart> */}
        </div>
    );
};

export default OrderReview;