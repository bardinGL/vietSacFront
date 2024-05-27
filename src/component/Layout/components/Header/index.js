import classNames from 'classnames/bind';
import styles from './index.module.css';

import line from '../../../../assets/icon/line.svg'
import cart from '../../../../assets/icon/cart.svg'
import opNavIcon from '../../../../assets/icon/openNav.svg'
import userIcon from '../../../../assets/icon/user.svg'
import logoSmall from '../../../../assets/logo/logoSmall.png'
import closeIcon from '../../../../assets/icon/close.svg'
import navBackground from '../../../../assets/images/headerBackground.png';

import { useState } from 'react';

const cx = classNames.bind(styles);

function Header({isTransparent}) {
    const navigationOption = [ 
        { title: 'home', link: '#', current: true},
        { title: 'sản phẩm', link: '#', current: false},
        { title: 'gallery', link: '#', current: false},
        { title: 'về chúng tôi', link: '#', current: false},
    ];

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenNav = () => {
        if(!isOpen) {
            console.log(document.querySelector(`.${cx('navigation')}`));
            document.querySelector(`.${cx('navigation')}`).classList.remove(cx('close-nav'));
            document.querySelector(`.${cx('navigation')}`).classList.add(`${cx('open-nav')}`)
            setIsOpen(true);
        }
    }

    const handleCloseNav = () => {
        if(isOpen) {
            document.querySelector(`.${cx('navigation')}`).classList.remove(cx('open-nav'));
            document.querySelector(`.${cx('navigation')}`).classList.add(cx('close-nav'));
            setIsOpen(false);
        }
    }

    let prevScrollpos = window.scrollY;
    window.onscroll = function() {
    let currentScrollPos = window.scrollY;
    if (prevScrollpos < currentScrollPos) {
        handleCloseNav();
    }
    prevScrollpos = currentScrollPos;
    }

    return (
    <div className={`${cx('header-cover')} ${!isTransparent ? cx('intransparent-header') : ''}`}>
        <div className={`${cx('wrapper')} d-flex justify-content-between align-items-center`}>
            <div>
                <h5><img src={opNavIcon} alt="Navigation" className={cx('navigation-icon')} onClick={handleOpenNav}/></h5>
            </div>
            <div className='d-flex justify-content-center flex-column' style={{paddingLeft: '165px'}}>
                <img className={`${cx('header-logo')}`} src={logoSmall} alt="Navigation"/>
                <label className={`${cx('header-logo-text')}`}>Việt Sắc</label>
            </div>
            <div className={`${cx('header-user-section')} d-flex justify-content-center align-items-center flex-row`}>
                <div className='d-flex justify-content-center align-items-center flex-row'>
                    <p className={`${cx('user-title')} m-0 me-3`}>Say hi to us</p>
                    <img className={`${cx('header-icon')}`} src={userIcon} alt="User"/>
                </div>
                <img className={`mx-4`} src={line} alt="Line"/>
                <img src={cart} alt="Cart"/>
            </div>
        </div>
        <div className={cx('navigation')}>
            <div className={`${cx('wrapper-nav')}`}>
                <img className={`${cx('navigation-background')}`} src={navBackground}/>
                <img src={closeIcon} className={`${cx('navigation-close-btn')}`} onClick={handleCloseNav}/>
                <div className={`${cx('navigation-options')}`}>
                    {navigationOption.map((option, index) => 
                    <div className={`${index % 2 !== 0 ? 'ps-5' : ''}`}>
                        <a href={option.link} className={`${option.current ? cx('chosen-option') : ''} ${cx('nav-option')} w-auto`}>{option.title}</a>
                    </div>)}
                </div>
            </div>
        </div>
    </div>
    );
}

export default Header;
