import classNames from 'classnames/bind';
import styles from './index.module.css';

import line from '../../../../assets/icon/line.svg'
import cart from '../../../../assets/icon/cart.svg'
import opNavIcon from '../../../../assets/icon/openNav.svg'
import userIcon from '../../../../assets/icon/user.svg'
import logoSmall from '../../../../assets/logo/logoSmall.png'

const cx = classNames.bind(styles);

function Header() {
    return (
    <div className={`${cx('wrapper')} d-flex justify-content-between align-items-center`}>
        <div>
            <h5 class="mx-2"><img src={opNavIcon} alt="Navigation"/></h5>
        </div>
        <div className='d-flex justify-content-center flex-column' style={{paddingLeft: '150px'}}>
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
    );
}

export default Header;
