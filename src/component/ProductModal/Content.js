import React, { useContext } from "react";
import { Formik } from "formik";
import { Button } from "antd";
import { Input } from "formik-antd";

import ModalContext from "./MultiStepModalContext";

import tui from '../../assets/images/product/tui.png'

import classNames from 'classnames/bind';
import styles from './index.module.css'

const cx = classNames.bind(styles);

const Content = () => {
  const contentOptions = [
    { value: "upper front", text: "Mặt trước phía trên của túi" },
    { value: "lower front", text: "Mặt trước phía dưới của túi" }
  ];

  const { content, setContent, next, prev } = useContext(ModalContext);
  return (
    <Formik
      initialValues={content}
      onSubmit={(values) => {
        setContent(values);
        next();
      }}
      validate={(values) => {
        const errors = {};
        if (!values.content) errors.content = "Missing embroidered content";
        if (values.content.length > 15)
            errors.content =
                "Embroidered content must not be over 15 characters";
        return errors;
      }}
    >
      {({ handleSubmit, errors }) => {
        return (
          <div className={`${cx('wrapper')} d-flex justify-content-between`}>
            <div className={`${cx('product-img')} w-auto`}>
                <img src={tui}/>
            </div>
            <div className={`${cx('content-section')}  d-flex align-items-center`}>
                <div>
                    <label className={cx('input-title')}>Nhập nội dung</label>
                    <p className={cx('input-note')}>Bất kì thông tin nào bạn muốn thêu lên túi (không quá 15 kí tự)</p>
                    <Input name={"content"}  className={cx('input-content')} placeholder="Tên/ Ngày sinh/ ..."/>
                    <p className={cx('error-feedback')}>{errors.content}</p>
                    <Button className={`btn-small prim-btn ${cx('btn-next')} mt-5 float-end`} onClick={handleSubmit}>
                        Tiếp theo
                    </Button>
                </div>
                
            </div>
          </div>
        );
      }}
    </Formik>
  );
};
export default Content;
