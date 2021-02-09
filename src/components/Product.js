import React from 'react';
import './Product.css';
import { useStateValue } from '../StateProvider';

function Product({ id, title, image, price, rating }) {

    // Access to data layer
    const [{basket}, dispatch] = useStateValue();

    // console.log('Items in the basket', basket);

    const addToBasket = () => {
        // Dispatch item into data layer
        alert('Added Item');
        dispatch ({
            type: 'ADD-TO-BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className='product'>
            <div className='product-info'>
                <p> {title} </p>

                <p className='product-price'>
                    <small>$</small>
                    <strong> {price} </strong>
                </p>

                <div className='product-rating'>
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>

            <img className='product-image' src={image}  alt=''/>

            <button className='product-button' onClick={addToBasket}>Add to Basket</button>

        </div>
    )
}

export default Product
