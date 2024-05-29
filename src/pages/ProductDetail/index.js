import classNames from 'classnames/bind';
import styles from './index.module.css';

import ProductCard from '../../component/ProductCard';

import homeBanner from '../../assets/images/homeBanner.png'

import gomCategory from '../../assets/images/category/gomCategory.png'
import thocamCategory from '../../assets/images/category/thocamCategory.png'
import danlatCategory from '../../assets/images/category/danlatCategory.png'

import chen from '../../assets/images/product/chen.png'
import ghe from '../../assets/images/product/ghe.png'
import vi from '../../assets/images/product/vi.png'
import tui from '../../assets/images/product/tui.png'
import { useState } from 'react';

const cx = classNames.bind(styles);

function ProductDetail() {
    const productsHotDeal = [
        {productName: 'Chén', productImg: chen, price: '325.000', discount: '0'},
        {productName: 'Ghế', productImg: ghe, price: '325.000', discount: '50'},
        {productName: 'Ví', productImg: vi, price: '325.000', discount: '50'},
        {productName: 'Túi', productImg: tui, price: '325.000', discount: '50'},
    ]

    const [tabs, setTabs] = useState('des-btn');

    function switchTab(btn) {
        if(tabs === 'des-btn' && btn.target.id === 'size-btn') {
            document.getElementById(btn.target.id).classList.add(cx('chosen-tab'));
            document.getElementById('des-btn').classList.remove(cx('chosen-tab'));

            document.getElementById('size-tab').style.display = "block";
            document.getElementById('des-tab').style.display = "none";
        }else if(tabs === 'size-btn' && btn.target.id === 'des-btn'){
            document.getElementById(btn.target.id).classList.add(cx('chosen-tab'));
            document.getElementById('size-btn').classList.remove(cx('chosen-tab'));

            document.getElementById('des-tab').style.display = "block";
            document.getElementById('size-tab').style.display = "none";
        }
        setTabs(btn.target.id);
    }
    return (
        <div className={`${cx('wrapper')}`}>
            <div className={`${cx('section-product-detail')} d-flex justify-content-around`}>
                <div className={`${cx('product-image')} d-flex flex-row`}>
                    <div className={`${cx('img-list')} d-flex flex-column`}>
                        <div className={`${cx('img-option')}`}>
                            <img src={chen}/>
                        </div>
                        <div className={`${cx('img-option')}`}>
                            <img src={chen}/>
                        </div>
                        <div className={`${cx('img-option')}`}>
                            <img src={chen}/>
                        </div>
                        <div className={`${cx('img-option')}`}>
                            <img src={chen}/>
                        </div>
                    </div>
                    <div className={`${cx('img-preview')}`}>
                        <img src={chen}/>
                    </div>
                </div>
                <div className={`${cx('product-detail')}`}>
                    <div className={`${cx('product-title')}`}>
                        <h1>tui xach tho cam</h1>
                    </div>
                    <div className={`${cx('small-red-box')}`}></div>
                    <div className={`${cx('product-tabs')} d-flex justify-content-between mt-4`}>
                        <button className={`${cx('chosen-tab')} btn-tabs d-inline-block`} id='des-btn' onClick={switchTab}>Mô tả</button>
                        <button className={`btn-tabs d-inline-block`} id='size-btn' onClick={switchTab}>Kích thước</button>
                    </div>
                    <div className={`${cx('tabs')} d-flex flex-column`}>
                        <div className={`${cx('tab-option')}`} id='des-tab'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div className={`${cx('tab-option')}`} id='size-tab'>
                            <ul className={`${cx('size-table')}`}>
                                <li className='d-flex justify-content-between'>
                                    <span className={`${cx('size-title')}`}>Chiều dài</span>
                                    <span className={`${cx('size-value')}`}>50 cm</span>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <span className={`${cx('size-title')}`}>Chiều dài</span>
                                    <span className={`${cx('size-value')}`}>50 cm</span>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <span className={`${cx('size-title')}`}>Chiều dài</span>
                                    <span className={`${cx('size-value')}`}>50 cm</span>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <span className={`${cx('size-title')}`}>Chiều dài</span>
                                    <span className={`${cx('size-value')}`}>50 cm</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={`${cx('img-preview')}`}>
                        <img src={chen}/>
                    </div>
                </div>
            </div>
            <div className={`${cx('section-realted-product')} d-flex flex-row`}>

            </div>
        </div>
    )
}

export default ProductDetail;