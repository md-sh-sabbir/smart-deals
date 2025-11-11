import React from 'react';
import { Link } from 'react-router';

const Product = ({ product }) => {

    const { _id, title, price_min, price_max, image } = product
    console.log(product);

    return (
        <div className="card bg-base-100 shadow-sm">
            <figure className='p-5'>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" className='rounded-xl' />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Price : ${price_min} - {price_max}</p>
                <div className="card-actions justify-end">
                    <Link to={`/productDetails/${_id}`} className="btn btn-primary w-full">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Product;