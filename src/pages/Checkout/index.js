import classNames from 'classnames/bind';
import styles from './index.module.css';

import userAvatar from '../../assets/images/user/userAvatar.png'

import chen from '../../assets/images/product/chen.png'
import ProductItem from '../../component/ProductItem';

import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Formik } from "formik";
import { Button } from "antd";
import { Input } from "formik-antd";
import { floor } from 'lodash';

const cx = classNames.bind(styles);

const numberWithCommas = (x) => {

    return floor(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const CartProductItem = ({product}) => {
    return (
    <div className={`${cx('product-wrapper')} d-flex justify-content-between`}>
        <div className='d-flex'>
            <div className={`${cx('product-img')}`}>
                <img src={product.img}/>
            </div>
            <div className='ms-3'> 
                <h5>{product.productName}</h5>
                <div className={`${cx('small-red-box')}`}></div>
            </div>
        </div>
        <div className={`${cx('product-info')} d-flex flex-column justify-content-end align-items-end`}>
            <h5 className={``}>x {product.quant}</h5>
            <h5 className={`${cx('product-price')} float-end`}>
                {numberWithCommas((parseInt(product.price) * 
                (1 - parseFloat(product.discount === 0 ? '100' : product.discount)/100)) * 1000)} VND
            </h5>
        </div>
    </div>)
}

function Checkout() {
    const cityList = [
        {
            value: 'HCM', text: 'TP Hồ Chí Minh'
        },
        {
            value: 'HN', text: 'TP Hà Nội'
        }
    ]

    const cart = [
        {productName: 'Chén Chén Chén Chén Chén Chén Chén Chén', img: chen, price: '325.000', discount: '20', quant: 10},
        {productName: 'Chén', img: chen, price: '325.000', discount: '10', quant: 10},

    ]

    const shipCost = 30000

    const subtotal = cart.reduce((subtotal, product) => subtotal + parseInt(product.price) * product.quant * 1000, 0);
    const discount = cart.reduce((discount, product) => discount + ((parseInt(product.price) * 
        (parseFloat(product.discount)/100)) * 1000) * product.quant, 0);
    const total = subtotal - discount

    return (
        <div className={`${cx('wrapper')} d-flex flex-row `}>
            <div className={`${cx('order-product-section')}`}>
                <div>
                    <h2 className='mb-4'>Đơn hàng của bạn</h2>
                    <div className={`${cx('product-list')}`}>
                        {cart.map((product) => <CartProductItem product={product}/>)}
                    </div>
                    <div className={`${cx('bill-table-wrapper')}`}>
                        <ul className={`${cx('bill-table')}`}>
                            <li className='d-flex justify-content-between'>
                                <span className={`${cx('bill-title')}`}>Tạm tính</span>
                                <span className={`${cx('bill-value')}`}>{numberWithCommas(subtotal)} VND</span>
                            </li>
                            <li className='d-flex justify-content-between'>
                                <span className={`${cx('bill-title')}`}>Phí vận chuyển</span>
                                <span className={`${cx('bill-value')}`}>{numberWithCommas(shipCost)} VND</span>
                            </li>
                            <li className='d-flex justify-content-between'>
                                <span className={`${cx('bill-title')}`}>Giảm giá</span>
                                <span className={`${cx('bill-value')}`}>{numberWithCommas(discount)} VND</span>
                            </li>
                            <li className='d-flex justify-content-between'>
                                <span className={`${cx('bill-title')}`}>Tổng cộng</span>
                                <span className={`${cx('bill-value')}`}>{numberWithCommas(total)} VND</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='w-50'></div>
            <div className={`${cx('order-info-section')}`}>
                <div>
                    <h2 >THÔNG TIN GIAO HÀNG</h2>
                    <div className={`${cx('small-red-box')}`}></div>
                    
                </div>
            </div>
        </div>
    )
}

export default Checkout;