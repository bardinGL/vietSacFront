import classNames from 'classnames/bind';
import styles from './index.module.css';

import ProductCard from '../../component/ProductCard';
import iconClose from '../../assets/icon/closeRed.svg'

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

import danDo from '../../assets/images/galleryContent/danDo.png'
import { useEffect, useState } from 'react';
import { Dialog } from '@material-ui/core';
import GalleryModal from '../../component/GalleryModal';


const cx = classNames.bind(styles);

const Mask = ({ gallery,handleOpenModal }) => {
    const maskImg = new Image();
    maskImg.src = gallery.mask;

    return (
        <div className={`${cx('gallery-img-wrapper')} bg-image position-absolute`} style={gallery.location} onClick={handleOpenModal}>
            <img src={gallery.galleryImg} style={gallery.mask} />
            <div class="mask" style={gallery.mask}></div>
        </div>
    );
}

function Home() {
    const [productsHotDeal, setProductsHotDeal] = useState([]);

    // useEffect(() => {
    //     fetchData();
    // }, [])

    // const fetchData = async() => {
    //     setProductsHotDeal(await getProductsHotDealsAPI());
    // }
    
    const categoryOptions = [
        {title: 'đồ gốm', categoryImg: gomCategory, pathTo: '/shop'},
        {title: 'đồ thổ cẩm', categoryImg: thocamCategory, pathTo: '/shop'},
        {title: 'đồ đan lát', categoryImg: danlatCategory, pathTo: '/shop'},
    ]

    const [openModal, setOpenModal] = useState(false);
 
    const handleCloseModal = () => {
        setOpenModal(false);
    };
 
    const handleOpenModal = () => {
        setOpenModal(true);
    };

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
                                <a href={option.pathTo}>
                                    <img src={option.categoryImg}/>
                                </a>
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
                        <Mask gallery={gallery1} handleOpenModal={handleOpenModal} ></Mask>
                        <Mask gallery={gallery2} handleOpenModal={handleOpenModal} ></Mask>
                        <Mask gallery={gallery3} handleOpenModal={handleOpenModal} ></Mask>
                        <Mask gallery={gallery4} handleOpenModal={handleOpenModal} ></Mask>
                        <Mask gallery={gallery5} handleOpenModal={handleOpenModal} ></Mask>
                        <Mask gallery={gallery6} handleOpenModal={handleOpenModal} ></Mask>
                        <Mask gallery={gallery7} handleOpenModal={handleOpenModal} ></Mask>
                        <Mask gallery={gallery8} handleOpenModal={handleOpenModal} ></Mask>
                        <Mask gallery={gallery9} handleOpenModal={handleOpenModal} ></Mask>
                        <Mask gallery={gallery10} handleOpenModal={handleOpenModal} ></Mask>
                        <Mask gallery={gallery11} handleOpenModal={handleOpenModal} ></Mask>
                        <Mask gallery={gallery12} handleOpenModal={handleOpenModal} ></Mask>
                        <Mask gallery={gallery13} handleOpenModal={handleOpenModal} ></Mask>
                    </div>
                </div>
            </div>
            <Dialog  
            open={openModal}
            onClose={handleCloseModal}
            maxWidth={'lg'}
            >
                 <div className={`${cx('section-modal')} position-relative`}>
                    <img src={iconClose} className={`${cx('close-modal-btn')} position-absolute`} onClick={handleCloseModal}/>
                    <GalleryModal title={`Làng nghề đan đó 200 tuổi ở Hưng Yên`} imgParagraph={danDo} paragraphs={[`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie`,`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie`]}/>
                </div>
                
            </Dialog >
        </div>
    )
}

export default Home;