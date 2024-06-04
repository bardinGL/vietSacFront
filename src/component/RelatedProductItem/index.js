import classNames from 'classnames/bind';
import styles from './index.module.css';

const cx = classNames.bind(styles);

function RelatedProductItem({product}) {
    return (
        <div className={`${cx('wrapper')}`}>
            <div className={`${cx('section-product-img')}`}>
                <img src={product.productImg}/>
            </div>
        </div>
    )
}

export default RelatedProductItem;