import React from 'react'
import { Button } from 'react-bootstrap';
import './styles.scss'
export default function Card() {
    return (
        <div className="card-product pb-3 pt-2 mx-3 my-5">
            <img className="image" src='https://philong.com.vn/media/product/24769-10.jpg' alt="" />
            <div className="info-product">
                <h5>LAP ABC</h5>
                <p>Hang: ASUS</p>
                <p>Chip: Itel</p>
                <p>Gia: 10000000 VND</p>
            </div>
            <div className="btn-view">
                <Button variant="primary">Xem san pham</Button>
            </div>
        </div>
    )
}
