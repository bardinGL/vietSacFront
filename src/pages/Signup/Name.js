import React, { useContext } from "react";
import { Formik } from "formik";
import { Button } from "antd";
import { Input } from "formik-antd";
import MultiStepFormContext from "./MultiStepFormContext";

import classNames from 'classnames/bind';
import styles from './index.module.css'

import logo from '../../assets/logo/logo.png'

const cx = classNames.bind(styles);

const Name = () => {
  const { userInfo, setUserInfo, next } = useContext(MultiStepFormContext);

  const nameInitialValues = {
    'firstName': userInfo.firstName,
     'lastName': userInfo.lastName
  };
  
  return (
    <Formik
      initialValues={nameInitialValues}
      onSubmit={(values) => {
        setUserInfo({...userInfo, 'firstName': values.firstName, 'lastName': values.lastName});
        next();
      }}
      validate={(values) => {
        const errors = {};
        if (!values.firstName) errors.firstName = "First name is required";
        if (!values.lastName) errors.lastName = "Last name is required";
        if (/^[0-9]+$/.test(values.firstName))
            errors.firstName =
                "First name does not require numbers or special characters";
        if (/^[0-9]+$/.test(values.lastName))
            errors.lastName =
                "Last name does not require numbers or special characters";
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
                            <div className={`row ${errors.lastName && "input-error"}`}>
                                <label className={cx('input-title')}>Họ *</label>
                                <Input name={"lastName"}  className={cx('signup-input')} placeholder="Nhập họ của bạn"/>
                                <p className={cx('error-feedback')}>{errors.lastName}</p>
                            </div>
                            <div className={`row ${errors.firstName && "input-error"}`}>
                                <label className={cx('input-title')}>Tên *</label>
                                <Input name={"firstName"}  className={cx('signup-input')} placeholder="Nhập tên của bạn"/>
                                <p className={cx('error-feedback')}>{errors.firstName}</p>
                            </div>
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
export default Name;
