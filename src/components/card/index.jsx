import React from 'react'
import { Button } from 'react-bootstrap';
import './styles.scss'
export default function Card({product}) {
    // console.log("Product: ", product);
    return (
        <div className="card-product pb-3 pt-2 mx-3 my-5">
            <img className="image" src={product.image} alt="" />
            <div className="info-product">
                
                <h5>{product.name}</h5>
                <p>{product.brand}</p>
                <p>{product.chip}</p>
                <p>{product.price}</p>
            </div>
            <div className="btn-view">
                <Button variant="primary">Xem san pham</Button>
            </div>
        </div>
    )
}
