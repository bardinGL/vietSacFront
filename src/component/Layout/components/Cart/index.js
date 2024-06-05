import * as React from 'react';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

import trash from '../../../../assets/icon/trash.svg'
import cart from '../../../../assets/icon/cart.svg'
import close from '../../../../assets/icon/closeRed.svg'

import classNames from 'classnames/bind';
import styles from './index.module.css';
import { floor } from 'lodash';

const cx = classNames.bind(styles);

function Cart() {
    const numberWithCommas = (x) => {

        return floor(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const relatedProducts = [
        {productName: 'Chén', price: '325.000', discount: '0'},
        {productName: 'Ghế', price: '325.000', discount: '50'},
        {productName: 'Ví', price: '325.000', discount: '50'},
        {productName: 'Túi', price: '325.000', discount: '50'},
        {productName: 'Chén', price: '325.000', discount: '0'},
        {productName: 'Ghế', price: '325.000', discount: '50'},
        {productName: 'Ví', price: '325.000', discount: '50'},
        {productName: 'Túi', price: '325.000', discount: '50'},
    ]

    const CartProductItem = (product) => {
        return (
        <div className={`${cx('product-wrapper')}`}>
            <div className={`${cx('product-img')}`}>
                <img src={product.img}/>
            </div>
            <div>
                <h2>{product.productName}</h2>
                <h2>x {product.quant}</h2>
                <div className={`${cx('product-price')}`}>
                    {numberWithCommas((parseInt(product.price) * 
                    (1 - parseFloat(product.discount === 0 ? '100' : product.discount)/100)) * 1000)} VND
                </div>
            </div>
            <div className={`${cx('product-delete')}`}>
                <img src={trash}/>
            </div>
            <button>asdsa</button>
        </div>)
    }

    const CartProductList = (
        <Box role="presentation" onClick={toggleDrawer(false)}>
            <img src={close} className={`${cx('cart-close')} float-end mt-4 me-4`} onClick={toggleDrawer(false)}/>
            <div className={`${cx('cart-title')}`}>
                <h2 className={`mb-2`}>Giỏ hàng</h2>
                <div className={`${cx('small-red-box')}`}></div>
            </div>
            {relatedProducts.map((product) => (<CartProductItem product={product}/>))}
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)}>
                <img className={`${cx('header-icon')}`} src={cart} alt="Cart"/>
            </Button>
            <Drawer open={open} anchor={'right'}  onClose={(_, reason) => reason === "backdropClick" && setOpen(false)}>
                {CartProductList}
            </Drawer>
        </div>
    );
}

export default Cart;