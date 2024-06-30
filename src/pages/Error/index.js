
import React from 'react'

import classNames from 'classnames/bind';
import styles from './index.module.css';

import error from '../../assets/images/error.png'

const cx = classNames.bind(styles);

function Error() {
    return (
        <div className={`${cx('wrapper')} d-flex justify-content-center align-items-center`}>
            <div className={`${cx('error-section')} d-flex align-items-center flex-column`}>
                <img src={error}/>
                <div className={`${cx('user-info')} mx-auto d-flex flex-column text-center`}>
                    <h1 className={`${cx('error-title')} mt-4 mb-2`}>Oops!</h1>
                    <p className={`${cx('error-des')}`}>Đã xảy ra lỗi, vui lòng thử lại sau</p>
                    <div className='py-5'>
                        <a href='/home' >
                            <button className={`btn-small prim-btn w-100`}>
                                Trở về trang chủ
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error;