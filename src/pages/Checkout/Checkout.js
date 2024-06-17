import classNames from 'classnames/bind';
import styles from './index.module.css';
import CheckoutContext from "./CheckoutContext";
import $ from 'jquery';

import { useState, useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Formik } from "formik";
import { Button, Radio, Space } from "antd";
import { Input } from "formik-antd";
import { floor } from 'lodash';
import { getUserCartAPI, getUserInfoAPI } from '../../api/site';

const cx = classNames.bind(styles);

const numberWithCommas = (x) => {

    return floor(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const CartProductItem = ({product}) => {
    return (
    <div className={`${cx('product-wrapper')} d-flex justify-content-between`}>
        <div className='d-flex'>
            <div className={`${cx('product-img')}`}>
                <img src={product.productImg}/>
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
    const [cart, setCart] = useState([]);
    const [userInfo, setUserInfo] = useState({});

    const fetchData = async() => {
        setCart(await getUserCartAPI());
        setUserInfo(await getUserInfoAPI());
    }

    useEffect(() => {
        fetchData();
    }, [])

    const shippingOptions = [
        {
            value: 'standard', text: 'Tốc độ tiêu chuẩn (từ 5-10 ngày làm việc)'
        },
        {
            value: 'fast', text: 'Hỏa tốc (sau 2 ngày từ khi đặt hàng)'
        }
    ]

    const paymentMethods = [
        {
            value: 'COD', text: 'Thanh toán tiền mặt khi nhận hàng'
        },
        {
            value: 'eWallet', text: 'Thanh toán bằng ví MOMO'
        },
        {
            value: 'bank', text: 'Thanh toán bằng ngân hàng'
        }
    ]

    const shipCost = 30000;

    const subtotal = cart.reduce((subtotal, product) => subtotal + parseInt(product.price) * product.quant * 1000, 0);
    const discount = cart.reduce((discount, product) => discount + ((parseInt(product.price) * 
        (parseFloat(product.discount)/100)) * 1000) * product.quant, 0);
    const total = subtotal - discount

    const { checkout, setCheckout, next, prev } = useContext(CheckoutContext);
    return (
        <Formik
        initialValues={checkout}
        onSubmit={(values) => {
            values.city = document.querySelector('select[name="city"]').value;
            values.district = document.querySelector('select[name="district"]').value;
            values.ward = document.querySelector('select[name="ward"]').value;
            setCheckout(values);
            next();
        }}
        validate={(values) => {
            const errors = {};
            return errors;
        }}
        >
        {({ handleSubmit, handleChange, errors }) => {
        return (
            <div className={`${cx('wrapper')} d-flex flex-row `}>
                <div className={`${cx('order-product-section')}`}>
                    <div>
                        <h2 className='mb-4'>ĐƠN HÀNG CỦA BẠN</h2>
                        <div className={`${cx('product-list')}`}>
                            {cart.map((product) => <CartProductItem product={product}/>)}
                        </div>
                        <div className={`${cx('bill-table-wrapper')}`}>
                            <div className={`${cx('input-voucher-wrapper')} ${errors.lastName && "input-error"} mb-4 d-flex flex-row`}>
                                <Input name={"voucher"} className={cx('voucher-input')} placeholder="Nhập mã giảm giá"/>
                                <button className={`btn-small sec-btn ms-4`} style={{borderRadius: 0}}>Sử dụng</button>
                            </div> 
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
                        <div>
                            <div>
                                <h2 >THÔNG TIN GIAO HÀNG</h2>
                                <div className={`${cx('small-red-box')}`}></div>
                                <div className={`${cx('ship-info-inputs')} py-4`}>
                                    <div className={`${cx('input-ship-wrapper')} ${errors.lastName && "input-error"} d-flex flex-column`}>
                                        <label className={cx('input-title')}>Email *</label>
                                        <Input name={"email"} className={cx('info-input')} placeholder="Nhập email của bạn" value={userInfo.email}/>
                                        <p className={cx('error-feedback')}>{errors.email}</p>
                                    </div> 
                                    <div className={`${cx('input-col')} d-flex justify-content-between`}>
                                        <div className={`${cx('input-ship-wrapper')} ${errors.lastName && "input-error"} d-flex flex-column`}>
                                            <label className={cx('input-title')}>Họ *</label>
                                            <Input name={"lastName"} className={cx('info-input')} placeholder="Nhập họ của bạn" value={userInfo.lastName}/>
                                            <p className={cx('error-feedback')}>{errors.fisrtName}</p>
                                        </div>
                                        <div className={`${cx('input-ship-wrapper')} ${errors.lastName && "input-error"} d-flex flex-column`}>
                                            <label className={cx('input-title')}>Tên *</label>
                                            <Input name={"firstName"} className={cx('info-input')} placeholder="Nhập tên của bạn" value={userInfo.firstName}/>
                                            <p className={cx('error-feedback')}>{errors.lastName}</p>
                                        </div>
                                    </div>
                                    <div className={`${cx('input-ship-wrapper')} ${errors.lastName && "input-error"} d-flex flex-column`}>
                                        <label className={cx('input-title')}>Địa chỉ *</label>
                                        <Input name={"address"} className={cx('info-input')} placeholder="Nhập địa chỉ của bạn" value={userInfo.address}/>
                                        <p className={cx('error-feedback')}>{errors.address}</p>
                                    </div>
                                    <div className={`${cx('input-ship-wrapper')} ${errors.lastName && "input-error"} d-flex flex-column`}>
                                        <label className={cx('input-title')}>Số điện thoại *</label>
                                        <Input name={"phone"} className={cx('info-input')} placeholder="Nhập số điện thoại của bạn" value={userInfo.phone}/>
                                        <p className={cx('error-feedback')}>{errors.phone}</p>
                                    </div>
                                    <div className={`${cx('input-select')} my-2`}>
                                        <select
                                        name="city"
                                        placeholder="TỈNH/THÀNH"
                                        id="city"
                                        >
                                        <option value="0">Tỉnh Thành</option>
                                        </select>
                                    </div>
                                    <div className={`${cx('input-col')} d-flex justify-content-between my-3`}>
                                        <div className={`${cx('input-select')}`}>
                                            <select
                                            name="district"
                                            placeholder="QUẬN/HUYỆN"
                                            id="district"
                                            >
                                            <option value="0">Quận Huyện</option>
                                            </select>
                                        </div>
                                        <div className={`${cx('input-select')}`}>
                                            <select
                                            name="ward"
                                            placeholder="XÃ/PHƯỜNG"
                                            id="ward"
                                            >
                                            <option value="0">Phường Xã</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <h2>PHƯƠNG THỨC VẬN CHUYỂN</h2>
                                <div className={`${cx('small-red-box')}`}></div>
                                <div className={`my-4`}>
                                    <Radio.Group name={"shippingOption"}>
                                        <Space direction="vertical">
                                        {shippingOptions.map((option) => (
                                            <Radio value={option.value} 
                                            onChange={handleChange}
                                            style={{ fontSize: "20px", color: "#264234" }}>{option.text}</Radio>
                                        ))}
                                        </Space>
                                    </Radio.Group>
                                </div>     
                            </div>
                            <div>
                                <h2>PHƯƠNG THỨC THANH TOÁN</h2>
                                <div className={`${cx('small-red-box')}`}></div>
                                <div className={`my-4`}>
                                    <Radio.Group name={"paymentMethod"}>
                                        <Space direction="vertical">
                                        {paymentMethods.map((option) => (
                                            <Radio value={option.value} 
                                            onChange={handleChange}
                                            style={{ fontSize: "20px", color: "#264234" }}>{option.text}</Radio>
                                        ))}
                                        </Space>
                                    </Radio.Group>
                                </div>     
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <a href='/home' className='me-4'>
                            <Button className={`btn-large sec-btn ${cx('btn-prev')}`}>
                                Hủy
                            </Button>
                        </a>
                        <Button className={`btn-large prim-btn ${cx('btn-next')}`} onClick={handleSubmit}>
                            Thanh toán
                        </Button>
                    </div>
                </div>
            </div>
        );}}
        </Formik>
    )
}

export default Checkout;