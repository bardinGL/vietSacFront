import classNames from 'classnames/bind';

import styles from './index.module.css'

import logo from '../../assets/logo/logo.png'
import { useNavigate } from 'react-router-dom';
import { postSignInUser } from '../../api/site';
import { Formik } from "formik";
import { Button } from "antd";
import { Input } from "formik-antd";
import { useAuth } from '../../provider';
import { useState } from 'react';

const cx = classNames.bind(styles);

const Login = () => {
    const navigate = useNavigate();
    const { setToken, setUserID } = useAuth();

    async function signInUser(userInfo) {
        await postSignInUser(userInfo)
            .then(res => {
                console.log(res);
                if(res.statusCode === 0) {
                    document.querySelector('#signin-noti').innerText = 'Sai thông tin đăng nhập, vui lòng thử lại';
                    document.querySelector(`.${cx('login-password')}`).value = '';
                } else {
                    navigate('/home');
                    setToken(res.data['token']);
                    setUserID(res.data['responseUserModel'].id)
                }
            })
            .catch(res => {
                navigate('/error');
            })
    }
    return (
    <Formik
        initialValues={{
            'username': '',
            'password': ''
        }}
        onSubmit={(values) => {
        signInUser({
            'userName': values.username,
            'password': values.password
        });
      }}
      validate={(values) => {
        const errors = {};
        if (!values.username) errors.username = "Username is required";
        if (!values.password) errors.password = "Password is required";
        document.querySelector('#signin-noti').innerText = '';
        // if (/^[0-9]+$/.test(values.lastName))
        //     errors.lastName =
        //         "Last name does not require numbers or special characters";
        return errors;
      }}
    >
    {({ handleSubmit, errors }) => {
        return (<div className={`${cx('wrapper')} d-flex justify-content-center align-items-center`}>
        <div className={`${cx('section-login')}`} >
            <div className={`row h-100`}>
                <div className={`${cx('section-login-logo')} col`}>
                    <img src={logo} alt='Logo'/>
                    <div className='mt-4'>
                        <h1>Đăng nhập vào tài khoản của bạn</h1>
                    </div>
                </div>
                <div className={`${cx('section-login-logo')} col d-flex align-items-center`}>
                    <div className='col'>
                        <div className={`row`}>
                            <label className={cx('input-title')}>email</label>
                            <Input className={cx('login-email')} type='email' name={"username"} placeholder='Nhập email của bạn'/>
                            <p className={cx('error-feedback')}>{errors.username}</p>
                        </div>
                        <div className={`row mt-4`}>
                            <label className={cx('input-title')}>mật khẩu</label>
                            <Input className={cx('login-password')} type='password' name={"password"} placeholder='Nhập mật khẩu của bạn'/>
                            <p className={cx('error-feedback')}>{errors.password}</p>
                        </div>
                        <p className={`${cx('error-feedback')} mb-0`} id='signin-noti'></p>
                        <Button className={`${cx('btn-login')} float-end`} onClick={handleSubmit}>
                            Đăng nhập
                        </Button>
                    </div>
                </div>
            </div>
            <div className={`${cx('signup-option')}`}>
                <a href='/signup'>
                    Chưa có tài khoản? ĐĂNG KÝ NGAY
                </a>
            </div>
        </div>
        </div>)
    }}
    </Formik>
    )
}

export default Login;