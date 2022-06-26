import React from 'react'
import './styles.scss'
export default function Footer() {
    return (
        <div className="footerContainer">
            <div className="content">
            <div className="general">
                <h5>Thông tin chung</h5>
                <ul>
                    <li>Giới thiệu về công ty</li>
                    <li>Tin tuyển dụng</li>
                    <li>Liên hệ góp ý</li>
                </ul>
            </div>
            <div className="branch">
                <h5>Chi nhánh</h5>
                <ul>
                    <li>Đà Nẵng: 123 Lê Đình Lý</li>
                    <li>Huế: 345 Hoàng Diệu</li>
                    <li>TP HCM: 436 Võ Thị Sáu</li>
                </ul>
            </div>
            <div className="contact">
                <h5>Liên lạc</h5>
                <ul>
                    <li>Facebook</li>
                    <li>Youtube</li>
                    <li>Google</li>
                </ul>
            </div>
            </div>
        </div>
    )
}
