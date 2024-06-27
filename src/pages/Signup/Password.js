import React, { useContext } from "react";
import { Formik } from "formik";
import { Button } from "antd";
import { Input } from "formik-antd";
import MultiStepFormContext from "./MultiStepFormContext";

import classNames from 'classnames/bind';
import styles from './index.module.css'

import logo from '../../assets/logo/logo.png'

const cx = classNames.bind(styles);

const Password = () => {
  const { password, setPassword, next, prev } = useContext(MultiStepFormContext);
  return (
    <Formik
      initialValues={password}
      onSubmit={(values) => {
        const errors = {};
        if(values.password === values.passwordCheck) {
            setPassword(values);
            next();
        }
      }}
      validate={(values) => {
        const errors = {};
        if (!values.password) errors.password = "Password is required";
        if (!values.passwordCheck) errors.passwordCheck = "Please enter your password again";
        if(values.password !== values.passwordCheck) errors.passwordCheck = "Passwords are not matched";
        return errors;
      }}
    >
      {({ handleSubmit, errors }) => {
        return (
          <div className={`${cx('wrapper')} d-flex justify-content-center align-items-center`}>
            <div className={cx('section-signup')}>
                <div className={`row h-100`}>
                    <div className={`col`}>
                        <img src={logo}/>
                        <div className='mt-4'>
                            <h1>Tạo một mật khẩu</h1>
                        </div>
                    </div> 
                    <div className={`col d-flex align-items-center position-relative`}>
                        <div className='col'>
                            <div className={`row ${errors.password && "input-error"}`}>
                                <label className={cx('input-title')}>Mật khẩu *</label>
                                <Input name={"password"}  className={cx('signup-input')} placeholder="Vui lòng nhập mật khẩu của bạn" type="password"/>
                                <p className={cx('error-feedback')}>{errors.password}</p>
                            </div>
                            <div className={`row ${errors.passwordCheck && "input-error"}`}>
                                <label className={cx('input-title')}>Xác nhận *</label>
                                <Input name={"passwordCheck"}  className={cx('signup-input')} placeholder="Nhập lại mật khẩu của bạn" type="password"/>
                                <p className={cx('error-feedback')}>{errors.passwordCheck}</p>
                            </div>
                            <Button className={`btn-small prim-btn ${cx('btn-prev')} position-absolute`} onClick={prev}>
                                Quay lại
                            </Button>
                            <Button className={`btn-small prim-btn ${cx('btn-next')} position-absolute`} onClick={handleSubmit}>
                                Tạo tài khoản
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};
export default Password;
