import classNames from 'classnames/bind';
import styles from './index.module.css';

import Breadcrumb from '../../component/Breadcrumb';
import ProductItem from '../../component/ProductItem';

import shopBanner from '../../assets/images/shopBanner.png'

import gomCategory from '../../assets/images/category/gomCategory.png'
import thocamCategory from '../../assets/images/category/thocamCategory.png'
import danlatCategory from '../../assets/images/category/danlatCategory.png'

import chen from '../../assets/images/product/chen.png'
import ghe from '../../assets/images/product/ghe.png'
import vi from '../../assets/images/product/vi.png'
import tui from '../../assets/images/product/tui.png'
import { getProductsAllAPI } from '../../api/shop';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Shop() {
    const [productsAll, setProductsAll] = useState([]);

    const fetchData = async() => {
        setProductsAll(await getProductsAllAPI());
    }

    useEffect(() => {
        fetchData();
    }, [])

    const filterOptions = [
        {
            filterTitle: 'Mục đích',
            options: [
                {optionTitle: 'Dùng hàng ngày', chosing: false},
                {optionTitle: 'Dùng trang trí', chosing: true},
            ]
        },
        {
            filterTitle: 'Tên thương hiệu',
            options: [
                {optionTitle: 'Gốm Chu Đậu', chosing: false},
                {optionTitle: 'Gốm Bát Tràng', chosing: true},
                {optionTitle: 'Gốm Bàu Trúc', chosing: false},
                {optionTitle: 'Gốm Biên Hòa', chosing: false},
            ]
        }
    ];

    return (
        <div className={`${cx('wrapper')}`}>
            <div className={`${cx('section-banner')}`}>
                <img src={shopBanner}/>
                <div className={`${cx('banner-title')}`}>
                    <h1>Sản phẩm</h1>
                </div>
                <div className={cx('breadcrumb')}>
                    <Breadcrumb pageTitle = 'Đồ gốm'/>
                </div>
            </div>
            <div className={`${cx('page-title')}`}>
                <h1>Đồ gốm</h1>
            </div>
            <div className={`${cx('section-products')} d-flex justify-content-between`}>
                <div className={`${cx('filter-container')}`}>
                    <h2>Phân loại</h2>
                    {filterOptions.map((filter) => (
                        <div className='mb-5'>
                            <div className={`${cx('filter-title')}`}>
                                <h3 className='mb-0'>{filter.filterTitle}</h3>
                            </div>
                            <div className={`${cx('filter-options')} pt-3`}>
                                {filter.options.map((option) => (
                                <p className={`${option.chosing ? cx('option-chosen') : ''} mb-2`}>{option.optionTitle}</p>))}
                                
                            </div>
                        </div>
                    ))}
                    
                </div>
                <div className={`${cx('product-container')} d-flex flex-wrap`}>
                    {productsAll.map((product) => (<ProductItem product={product}/>))}
                </div>
            </div>
        </div>
    )
}

export default Shop;