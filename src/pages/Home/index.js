import classNames from 'classnames/bind';
import styles from './index.module.css';

import ProductCard from '../../component/ProductCard';

import homeBanner from '../../assets/images/homeBanner.png'

import gomCategory from '../../assets/images/category/gomCategory.png'
import thocamCategory from '../../assets/images/category/thocamCategory.png'
import danlatCategory from '../../assets/images/category/danlatCategory.png'

import gallery1 from '../../assets/images/gallery/gallery1';
import gallery2 from '../../assets/images/gallery/gallery2';
import gallery3 from '../../assets/images/gallery/gallery3';
import gallery4 from '../../assets/images/gallery/gallery4';
import gallery5 from '../../assets/images/gallery/gallery5';
import gallery6 from '../../assets/images/gallery/gallery6';
import gallery7 from '../../assets/images/gallery/gallery7';
import gallery8 from '../../assets/images/gallery/gallery8';
import gallery9 from '../../assets/images/gallery/gallery9';
import gallery10 from '../../assets/images/gallery/gallery10';
import gallery11 from '../../assets/images/gallery/gallery11';
import gallery12 from '../../assets/images/gallery/gallery12';
import gallery13 from '../../assets/images/gallery/gallery13';

import chen from '../../assets/images/product/chen.png'
import ghe from '../../assets/images/product/ghe.png'
import vi from '../../assets/images/product/vi.png'
import tui from '../../assets/images/product/tui.png'
import { useEffect, useState } from 'react';
import { getProductsHotDealsAPI } from '../../api/site';


const cx = classNames.bind(styles);

const Mask = ({ gallery }) => {
    const maskImg = new Image();
    maskImg.src = gallery.mask;

    return (
        <div className={`${cx('gallery-img-wrapper')} bg-image position-absolute`} style={gallery.location}>
            <img src={gallery.galleryImg} style={gallery.mask} />
            <div class="mask" style={gallery.mask}></div>
        </div>
    );
}

function Home() {
    const fetchData = async() => {
        setProductsHotDeal(await getProductsHotDealsAPI());
    }

    const [productsHotDeal, setProductsHotDeal] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])
    
    const categoryOptions = [
        {title: 'đồ gốm', categoryImg: gomCategory},
        {title: 'đồ thổ cẩm', categoryImg: thocamCategory},
        {title: 'đồ đan lát', categoryImg: danlatCategory},
    ]
    return (
        <div className={`${cx('wrapper')}`}>
            <div className={`${cx('section-banner')}`}>
                <img src={homeBanner}/>
                <div className={`${cx('banner-title')}`}>
                    <h1>Nơi “ Lan tỏa nét đẹp Việt”</h1>
                </div>
            </div>
            <div className={`${cx('section-category')}`}>
                <div className={`${cx('category-title')}`}>
                    <h1>DANH MỤC SẢN PHẨM</h1>
                </div>
                <div className={`${cx('category')} w-100 d-flex flex-row`}>
                    {categoryOptions.map((option) => (
                    <div className={`${cx('category-option')} col-4`}>
                        <div>
                            <img src={option.categoryImg}/>
                            <p>{option.title}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className={`${cx('section-hot-deal')}`}>
                <div className={`${cx('category-title')}`}>
                    <h1>hot deal</h1>
                </div>
                <div className={`${cx('hot-deal')} w-100 d-flex flex-row justify-content-around`}>
                    {productsHotDeal?.map((product) => (<ProductCard product={product}/>))}
                </div>
            </div>
            <div className={`${cx('section-gallery-wrapper')}`} id='gallery'>
                <div className={`${cx('section-gallery')}`}>
                    <h1>gallery</h1>
                    <div className='position-relative'>
                        <Mask gallery={gallery1}></Mask>
                        <Mask gallery={gallery2}></Mask>
                        <Mask gallery={gallery3}></Mask>
                        <Mask gallery={gallery4}></Mask>
                        <Mask gallery={gallery5}></Mask>
                        <Mask gallery={gallery6}></Mask>
                        <Mask gallery={gallery7}></Mask>
                        <Mask gallery={gallery8}></Mask>
                        <Mask gallery={gallery9}></Mask>
                        <Mask gallery={gallery10}></Mask>
                        <Mask gallery={gallery11}></Mask>
                        <Mask gallery={gallery12}></Mask>
                        <Mask gallery={gallery13}></Mask>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;