import classNames from 'classnames/bind';
import styles from './index.module.css';

import closeIcon from '../../../../assets/icon/close.svg'
import navBackground from '../../../../assets/images/headerBackground.png';

const cx = classNames.bind(styles);


function Navigation() {
    const navigationOption = [ 
        { title: 'home', link: '#', current: true},
        { title: 'sản phẩm', link: '#', current: false},
        { title: 'gallery', link: '#', current: false},
        { title: 'về chúng tôi', link: '#', current: false},
    ];

    const handleCloseNav = () => {
        document.getElementById(`${cx('navigation')}`).classList.add(cx('close-nav'));
    }

    return (
    <div className={`${cx('wrapper')} d-flex justify-content-between align-items-center`} id='navigation'>
        <div className={`${cx('navigation-background')}`}>
            <img className={`${cx('navigation-background')} w-100`} src={navBackground}/>
            <img src={closeIcon} className={`${cx('navigation-close-btn')}`} onClick={handleCloseNav}/>
            <div className={`${cx('navigation-options')}`}>
                {navigationOption.map((option, index) => 
                <div className={`${index % 2 !== 0 ? 'ps-5' : ''}`}>
                   <a href={option.link} className={`${option.current ? cx('chosen-option') : ''} ${cx('nav-option')} w-auto`}>{option.title}</a>
                </div>)}
            </div>
        </div>
    </div>
    );
}

export default Navigation;
