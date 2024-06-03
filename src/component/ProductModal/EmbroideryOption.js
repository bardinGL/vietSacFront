import React, { useContext } from "react";
import { Formik } from "formik";
import { Button, Radio, Space } from "antd";
import { Input } from "formik-antd";

import ModalContext from "./MultiStepModalContext";

import embroiOption from '../../assets/images/modal/embroiOption.png'


import classNames from 'classnames/bind';
import styles from './index.module.css'

const cx = classNames.bind(styles);

const EmbroideryOption = () => {
  const embroiderOptions = [
    { value: "upper front", text: "Mặt trước phía trên của túi" },
    { value: "lower front", text: "Mặt trước phía dưới của túi" }
  ];

  const { embOption, setEmbOption, next, prev } = useContext(ModalContext);
  return (
    <Formik
      initialValues={embOption}
      onSubmit={(values) => {
        setEmbOption(values);
        next();
      }}
      validate={(values) => {
        const errors = {};
        if (!values.embOption) errors.embOption = "Embroidery option is required";
        return errors;
      }}
    >
      {({ handleSubmit, errors }) => {
        return (
          <div className={`${cx('wrapper')} d-flex justify-content-around`}>
            <div className={`${cx('product-img')} w-auto`}>
                <img src={embroiOption}/>
            </div>
            <div className={`${cx('content-section')}  d-flex align-items-center h-100`}>
                <div>
                    <label className={cx('input-title')}>Chọn vị trí</label>
                    <p className={cx('input-note')}>Chọn ví trị thêu bạn muốn</p>
                    <Radio.Group name={"embOption"}>
                      <Space direction="vertical">
                        {embroiderOptions.map((option) => (
                            <Radio value={option.value} 
                            style={{ fontSize: "20px", fontFamily: "Be Vietnam" }}>{option.text}</Radio>
                        ))}
                      </Space>
                    </Radio.Group>
                    <p className={cx('error-feedback')}>{errors.embOption}</p>
                    <div className="float-end">
                      <Button className={`btn-small prim-btn ${cx('btn-next')} d-block`} onClick={handleSubmit}>
                          Tiếp theo
                      </Button>
                      <Button className={`btn-small sec-btn ${cx('btn-prev')} d-block mt-4`} onClick={prev}>
                          Quay lại
                      </Button>
                    </div>
                </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};
export default EmbroideryOption;
