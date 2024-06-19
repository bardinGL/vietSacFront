import classNames from 'classnames/bind';

import styles from './index.module.css'

import logo from '../../assets/logo/logo.png'

const cx = classNames.bind(styles);

const Login = () => {
    return (
        <div className={`${cx('wrapper')} d-flex justify-content-center align-items-center`}>
           <div className={`${cx('section-login')}`} >
                <div className={`row h-100`}>
                    <div className={`${cx('section-login-logo')} col`}>
                        <img src={logo}/>
                        <div className='mt-4'>
                            <h1>Đăng nhập vào tài khoản của bạn</h1>
                        </div>
                    </div>
                    <div className={`${cx('section-login-logo')} col d-flex align-items-center`}>
                        <div className='col'>
                            <div className={`row`}>
                                <label className={cx('input-title')}>email/sđt</label>
                                <input className={cx('login-email')} type='email' name='email' placeholder='Nhập email của bạn'/>
                            </div>
                            <div className={`row mt-4`}>
                                <label className={cx('input-title')}>mật khẩu</label>
                                <input className={cx('login-password')} type='password' name='password' placeholder='Nhập mật khẩu của bạn'/>
                            </div>
                            <a href='/home'>
                                <button className={`${cx('btn-login')} float-end`}>
                                    Đăng nhập
                                </button>
                            </a>
                        </div>
                    </div>
                    <a href='/signup' className={`${cx('signup-option')}`}>
                        Chưa có tài khoản? ĐĂNG KÝ NGAY
                    </a>
                </div>
           </div>
        </div>
    )
}

export default Login;