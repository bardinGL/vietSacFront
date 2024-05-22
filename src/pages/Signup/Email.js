import React, { useContext } from "react";
import { Formik } from "formik";
import { Button } from "antd";
import { Input } from "formik-antd";
import MultiStepFormContext from "./MultiStepFormContext";

import classNames from 'classnames/bind';
import styles from './index.module.css'

import logo from '../../assets/logo/logo.png'

const cx = classNames.bind(styles);

const Email = () => {
  const { email, setEmail, next, prev } = useContext(MultiStepFormContext);
  return (
    <Formik
      initialValues={email}
      onSubmit={(values) => {
        setEmail(values);
        next();
      }}
      validate={(values) => {
        const errors = {};
        if (!values.email) errors.email = "Email address is required";
        // if (/^[0-9]+$/.test(values.lastName))
        //     errors.lastName =
        //         "Last name does not require numbers or special characters";
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
                            <h1>Tạo tài khoản của bạn</h1>
                        </div>
                    </div> 
                    <div className={`col d-flex align-items-center position-relative`}>
                        <div className='col'>
                            <div className={`row ${errors.email && "input-error"}`}>
                                <label className={cx('input-title')}>Email *</label>
                                <Input name={"email"}  className={cx('signup-input')} placeholder="Nhập email của bạn"/>
                                <p className={cx('error-feedback')}>{errors.email}</p>
                            </div>
                            <Button className={`btn-small prim-btn ${cx('btn-prev')} position-absolute`} onClick={prev}>
                                Quay lại
                            </Button>
                            <Button className={`btn-small prim-btn ${cx('btn-next')} position-absolute`} onClick={handleSubmit}>
                                Tiếp theo
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
export default Email;
