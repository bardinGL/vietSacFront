import classNames from 'classnames/bind';

import styles from './index.module.css';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <h1>Header</h1>
        </header>
    );
}

export default Header;
