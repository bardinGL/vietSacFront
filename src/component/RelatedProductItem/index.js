import classNames from 'classnames/bind';
import styles from './index.module.css';
import { floor } from 'lodash';

const cx = classNames.bind(styles);

function RelatedProductItem({product}) {
    return (
        <div className={`${cx('wrapper')}`}>
            <div className={`${cx('section-product-img')}`}>
                <img src={product.productImg}/>
            </div>
            <div className={`${cx('section-product-info')}`}>
                <input id="heart" type="checkbox" />
                <label for="heart">❤</label>
            </div>
        </div>
    )
}

export default RelatedProductItem;