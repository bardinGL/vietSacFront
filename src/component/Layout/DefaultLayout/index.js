import Header from '../components/Header';
import Footer from '../components/Footer';

import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.css';


const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
