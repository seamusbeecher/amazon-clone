import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from '../StateProvider';

function CheckoutProduct({id, image, title, price, rating}) {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch ({
            type: 'REMOVE-FROM-BASKET',
            id: id,
        })
    }

    return (
        <div className='CheckoutProduct'>
            <img className='checkoutProduct-img' src={image} alt=''/>

            <div className='checkoutProduct-info'>
                <p className='checkoutProduct-title'> {title} </p>

                <p className='checkoutProduct-price'> 
                    <small> $ </small>
                    <strong> {price} </strong>
                </p>

                <div className='checkoutProduct-rating'>
                    {Array(rating)
                    .fill()
                    .map(() => (
                        <p>⭐</p>
                    ))}
                </div>

                <button onClick={removeFromBasket}> Remove from Basket </button>
                
            </div>

        </div>
    )
}

export default CheckoutProduct
