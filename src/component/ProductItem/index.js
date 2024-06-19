import classNames from 'classnames/bind';
import styles from './index.module.css';
import { floor } from 'lodash';

const cx = classNames.bind(styles);

function ProductItem({product}) {
    const numberWithCommas = (x) => {

        return floor(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    product.priceAfter = numberWithCommas((parseInt(product.price) * 
    (1 - parseFloat(product.discount)/100)) * 1000);

// function ProductItem() {
    return (
        <a href='/shop/product'>
            <div className={`${cx('wrapper')}`}>
                <div className={`${cx('section-product-img')}`}>
                    <img src={product.productImg}/>
                </div>
                <div className={`${cx('section-product-info')}`}>
                    <div className={`${cx('product-name')}`}>
                        <p>{product.productName}</p>
                    </div>
                    {/* <div className={`${cx('small-red-box')}`}></div> */}
                    <div className={`${cx('product-price')}`}>
                        <p className={`${cx('price-after')}`}>{product.discount === '0' ? product.price : product.priceAfter} VND</p>
                        {product.discount === '0' ? '': (<p className={`${cx('price-before')}`}>{product.price} VND</p>)}
                        
                    </div>
                </div>
            </div>
        </a>
    )
}

export default ProductItem;