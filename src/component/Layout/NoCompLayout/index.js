import classNames from 'classnames/bind';
import styles from './NoCompLayout.module.css';

const cx = classNames.bind(styles);

function NoCompLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            {children}
        </div>
    );
}

export default NoCompLayout;
