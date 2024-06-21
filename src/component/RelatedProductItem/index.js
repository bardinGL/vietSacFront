import classNames from 'classnames/bind';
import styles from './index.module.css';

const cx = classNames.bind(styles);

function RelatedProductItem({product}) {
    return (
        <div className={`${cx('wrapper')}`}>
            <a href={`/shop/${product.productName}`}>
                <div className={`${cx('section-product-img')}`}>
                    <img src={product.productImg}/>
                </div>
            </a>
        </div>
    )
}

export default RelatedProductItem;