import {Helmet} from "react-helmet";

import classNames from 'classnames/bind';
import styles from './index.module.css';

import { useState } from 'react';

const cx = classNames.bind(styles);

function TabsGallery({imgGalleries}) {
    const [chosenImg, setImg] = useState(imgGalleries[0]);
    const [choenIndex, setIndex] = useState(0);

    const handleImgChange = (img) => {
        document.querySelector(`.${cx('img-preview')} img`).src = img.target.src;

        console.log(img.target.src);
        setImg(img.target.src);
    }

    return (
        <div className={`${cx('wrapper')}`}>
            <div className={`${cx('product-image')} d-flex flex-row`}>
                <div className={`${cx('img-list')} d-flex flex-column`}>
                    {imgGalleries.map((img) => (
                        <div className={`${cx('img-option')}`}>
                            <img src={img} onClick={handleImgChange}/>
                        </div>
                    ))}
                </div>
                <div className={`${cx('img-preview')}`}>
                    <img src={imgGalleries[0]}/>
                </div>
            </div>
            <Helmet>
                <script >
                </script>
            </Helmet>
        </div>
    )
}

export default TabsGallery;