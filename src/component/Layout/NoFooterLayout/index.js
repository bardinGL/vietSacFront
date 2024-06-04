import Header from '../components/Header';

import classNames from 'classnames/bind';
import styles from './NoFooterLayout.module.css';


const cx = classNames.bind(styles);

function NoFooterLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header isTransparent={false}/>
            <div className={cx('container')}>
                {children}
            </div>
        </div>
    );
}

export default NoFooterLayout;
