import Header from '../components/Header';
import Footer from '../components/Footer';

import classNames from 'classnames/bind';
import styles from './TransHeaderLayout.module.css';


const cx = classNames.bind(styles);

function TransHeaderLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header isTransparent={true}/>
            <div className={cx('container')}>
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default TransHeaderLayout;
