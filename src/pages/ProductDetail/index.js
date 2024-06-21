import {Helmet} from "react-helmet";
import Dialog from "@material-ui/core/Dialog";
import Carousel from "react-elastic-carousel";

import classNames from 'classnames/bind';
import styles from './index.module.css';

import logo from '../../assets/logo/logo.png'
import chen from '../../assets/images/product/chen.png'
import ghe from '../../assets/images/product/ghe.png'
import vi from '../../assets/images/product/vi.png'
import tui from '../../assets/images/product/tui.png'

import iconClose from '../../assets/icon/closeRed.svg'
import { useState, useEffect } from 'react';
import TabsGallery from "../../component/TabsGallery";
import ProductModal from "../../component/ProductModal";
import RelatedProductItem from "../../component/RelatedProductItem";
import { getProductDetailAPI } from "../../api/shop";

const cx = classNames.bind(styles);

function ProductDetail() {
    const [product, setProduct] = useState({});

    const fetchData = async() => {
        setProduct(await getProductDetailAPI());
    }

    useEffect(() => {
        fetchData();
    }, [])

    console.log(product.productImgs);
    const relatedProducts = [
        {productName: 'Chén', productImg: chen, price: '325.000', discount: '0'},
        {productName: 'Ghế', productImg: ghe, price: '325.000', discount: '50'},
        {productName: 'Ví', productImg: vi, price: '325.000', discount: '50'},
        {productName: 'Túi', productImg: tui, price: '325.000', discount: '50'},
        {productName: 'Chén', productImg: chen, price: '325.000', discount: '0'},
        {productName: 'Ghế', productImg: ghe, price: '325.000', discount: '50'},
        {productName: 'Ví', productImg: vi, price: '325.000', discount: '50'},
        {productName: 'Túi', productImg: tui, price: '325.000', discount: '50'},
    ]

    const [openModal, setOpenModal] = useState(false);
 
    const handleCloseModal = () => {
        setOpenModal(false);
    };
 
    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const breakPoints = [
        { width: 1, itemsToShow: 1, itemsToScroll: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3, itemsToScroll: 3 },
        { width: 1200, itemsToShow: 4, itemsToScroll: 4 },
      ];

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
                <TabsGallery imgGalleries={product.productImgs || [logo]}/>
                <div className={`${cx('product-detail')}`}>
                    <div className={`${cx('product-title')}`}>
                        <h1>{product.productName}</h1>
                    </div>
                    <div className={`${cx('small-red-box')}`}></div>
                    <div className={`${cx('product-tabs')} d-flex justify-content-between mt-4`}>
                        <button className={`${cx('chosen-tab')} btn-tabs d-inline-block`} id='des-btn' onClick={switchTab}>Mô tả</button>
                        <button className={`btn-tabs d-inline-block`} id='size-btn' onClick={switchTab}>Kích thước</button>
                    </div>
                    <div className={`${cx('tabs')} d-flex flex-column`}>
                        <div className={`${cx('tab-option')}`} id='des-tab'>
                            <p>{product.description}</p>
                        </div>
                        <div className={`${cx('tab-option')}`} id='size-tab'>
                            <ul className={`${cx('size-table')}`}>
                                {product.sizeInfo ? product.sizeInfo.map((element) => (
                                    <li className='d-flex justify-content-between'>
                                        <span className={`${cx('size-title')}`}>{element.title}</span>
                                        <span className={`${cx('size-value')}`}>{element.value}</span>
                                    </li>
                                )) : "null"}
                            </ul>
                        </div>
                    </div>
                    <div className={`${cx('product-price')}`}>
                        <h2>{product.price} VND</h2>
                    </div>
                    <div className={`${cx('product-quant')} my-4`}>
                        <label>Số lượng</label>
                        <input id='product-quant-input' className='ps-3' type='number' min={1} max={99}/>
                    </div>
                    <button className={`btn-exlarge sec-btn w-100 my-3`} onClick={handleOpenModal}>Thiết kế cho riêng bạn</button>
                    <div className="d-flex justify-content-between my-3">
                        <button className={`${cx('add-btn')} btn-large`}><span>Thêm vào giỏ hàng</span></button>
                        <button className={`${cx('buy-btn')} btn-large prim-btn`}>Mua ngay</button>
                    </div>
                </div>
            </div>
            <div className={`${cx('section-related-product')}`}>
                <div className={`${cx('related-product-title')} text-center`}>
                    <h1>SẢN PHẨM LIÊN QUAN</h1>
                </div>
                <div className={`${cx('big-red-box')} mx-auto mb-5`}></div>
                <Carousel breakPoints={breakPoints}>
                    {relatedProducts.map((product) => (<RelatedProductItem product={product}/>))}
                </Carousel>
            </div>
            <Dialog  
            open={openModal}
            onClose={handleCloseModal}
            maxWidth={'lg'}
            >
                 <div className={`${cx('section-modal')}`}>
                    <img src={iconClose} className={`${cx('close-modal-btn')}`} onClick={handleCloseModal}/>
                    <h2>THIẾT KẾ MẪU CHO RIÊNG BẠN</h2>
                    <ProductModal/>
                </div>
                
            </Dialog >
            <Helmet>
                <script >
                    document.getElementById('des-tab').style.display = "block";
                    document.getElementById('size-tab').style.display = "none";
                    document.getElementById('product-quant-input').value = 1;
                </script>
            </Helmet>
        </div>
    )
}

export default ProductDetail;