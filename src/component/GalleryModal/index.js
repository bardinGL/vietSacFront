import {Helmet} from "react-helmet";

import classNames from 'classnames/bind';
import styles from './index.module.css';

import iconClose from '../../assets/icon/closeRed.svg'

const cx = classNames.bind(styles);

function GalleryModal({title, imgParagraph, paragraphs}) {
    return (
        <div className={`${cx('wrapper')}`}>
            <div className="d-flex justify-content-around mb-4">
                <img className={`${cx('paragraph-img')} me-4`} src={imgParagraph}/>
                <div>
                    <h1 className={`${cx('paragraph-title')}`}>{title}</h1>
                    <blockquote className={`${cx('primary-paragraph')}`}>{paragraphs[0]}</blockquote>
                </div>
            </div>
            {paragraphs.slice(1).map((paragraph) => <blockquote className={`${cx('primary-paragraph')}`}>{paragraph}</blockquote>)}
        </div>
    )
}

export default GalleryModal;