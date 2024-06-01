import React, { useContext } from "react";
import { Formik } from "formik";

import { Input } from "formik-antd";
import MultiStepModalContext from "./MultiStepModalContext";

import chen from '../../assets/images/product/chen.png'

import classNames from 'classnames/bind';
import styles from './index.module.css'

const cx = classNames.bind(styles);

const EmbroideryOption = () => {
  const contentOptions = [
    { value: "upper front", text: "Mặt trước phía trên của túi" },
    { value: "lower front", text: "Mặt trước phía dưới của túi" }
  ];

  const { content, setContent, next, prev } = useContext(MultiStepFormContext);
  return (
    <Formik
      initialValues={content}
      onSubmit={(values) => {
        setContent(values);
        next();
      }}
      validate={(values) => {
        const errors = {};
        // if (!values.info) errors.info = "Missing info is required";
        // if (/^[0-9]+$/.test(values.lastName))
        //     errors.lastName =
        //         "Last name does not require numbers or special characters";
        return errors;
      }}
    >
      {({ handleSubmit, errors }) => {
        return (
          <div className={`${cx('wrapper')} d-flex justify-content-around`}>
            <div className={`${cx('product-img')}`}>
                <img src={chen}/>
            </div>
            <div className={`${cx('content-section')}`}>
                <label className={cx('input-title')}>Nhập nội dung</label>
                <p className={cx('input-note')}>Bất kì thông tin nào bạn muốn thêu lên túi (không quá 15 kí tự)</p>
                <Input name={"content"}  className={cx('content-input')} placeholder="Tên/ Ngày sinh/ ..."/>
                <p className={cx('error-feedback')}>{errors.email}</p>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};
export default EmbroideryOption;
