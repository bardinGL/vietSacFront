import classNames from 'classnames/bind';

import styles from './index.module.css'

const cx = classNames.bind(styles);

const Footer = () => {
    return (
        <div className={`${cx('wrapper')} d-flex justify-content-center align-items-center`}>
           <div className={`${cx('section-connect')} d-flex justify-content-center align-items-center`} >
                <div>
                    <div>
                        <p className={`${cx('footer-title')}`}>Connect with Us</p>
                    </div>
                    <div className={`${cx('footer-email')} w-100 d-flex justify-content-center align-items-center`}>
                        <input name={"contactEmail"}  className={`${cx('footer-input')}`} placeholder="Email" />
                        <button className={`${cx('footer-btn')}`}>Confirm</button>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Footer;