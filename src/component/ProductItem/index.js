import classNames from 'classnames/bind';
import styles from './index.module.css';
import { floor } from 'lodash';

const cx = classNames.bind(styles);

function ProductItem({product}) {
    const numberWithCommas = (x) => {

        return floor(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    product.priceAfter = numberWithCommas((parseInt(product.price) * 
    (1 - parseFloat(product.discount)/100)));

// function ProductItem() {
    return (
        <div className={`${cx('wrapper')}`}>
            <a href={`/shop/${product.id}`}>
                <div className={`${cx('section-product-img')}`}>
                    <img src={product.image}/>
                </div>
            </a>
            <div className={`${cx('section-product-info')}`}>
                <div className={`${cx('product-name')}`}>
                    <p>{product.name}</p>
                </div>
                {/* <div className={`${cx('small-red-box')}`}></div> */}
                <div className={`${cx('product-price')}`}>
                    {/* <p className={`${cx('price-after')}`}>{product.discount === '0' ? product.price : product.priceAfter} VND</p> */}
                    <p className={`${cx('price-after')}`}>{product.priceAfter} VND</p>
                    {product.discount === '0' || product.discount === 0 ? '': (<p className={`${cx('price-before')}`}>{numberWithCommas(product.price)} VND</p>)}
                    
                </div>
            </div>
        </div>
    )
}

export default ProductItem;