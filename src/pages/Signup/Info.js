import React, { useContext } from "react";
import { Formik } from "formik";
import { Button, InputNumber } from "antd";
import { FormItem, Input, Select } from "formik-antd";
import MultiStepFormContext from "./MultiStepFormContext";

import classNames from 'classnames/bind';
import styles from './index.module.css'

import logo from '../../assets/logo/logo.png'

const cx = classNames.bind(styles);

const Info = () => {
  const genderOptions = [
    { value: "male", text: "Nam" },
    { value: "female", text: "Nữ" },
    { value: "diff", text: "Khác" }
  ];

  const { info, setInfo, next, prev } = useContext(MultiStepFormContext);
  return (
    <Formik
      initialValues={info}
      onSubmit={(values) => {
        setInfo(values);
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
          <div className={`${cx('wrapper')} d-flex justify-content-center align-items-center`}>
            <div className={cx('section-signup')}>
                <div className={`row h-100`}>
                    <div className={`col`}>
                        <img src={logo}/>
                        <div className='mt-4'>
                            <h1>Thông tin cơ bản</h1>
                        </div>
                    </div> 
                    <div className={`col d-flex align-items-center position-relative`}>
                        <div>
                          <div className='row'>
                              <div className={`col-4 ${errors.email && "input-error"}`}>
                                  <label className={cx('input-title')}>Ngày sinh</label>
                                  <Input name={"dayDOB"}  className={`${cx('signup-input')} ${cx('input-date')}`} placeholder="DD" min={1}/>
                                  <p className={cx('error-feedback')}>{errors.email}</p>
                              </div>
                              <div className={`col-4 ${errors.email && "input-error"}`}>
                                  <label className={cx('input-title')}>Tháng sinh</label>
                                  <Input name={"monthDOB"}  className={`${cx('signup-input')} ${cx('input-date')}`} placeholder="MM" min={1}/>
                                  <p className={cx('error-feedback')}>{errors.email}</p>
                              </div>
                              <div className={`col-4 ${errors.email && "input-error"}`}>
                                  <label className={cx('input-title')}>Năm sinh</label>
                                  <Input name={"yearDOB"}  className={`${cx('signup-input')} ${cx('input-date')}`} placeholder="YYYY" min={1960}/>
                                  <p className={cx('error-feedback')}>{errors.email}</p>
                              </div>
                          </div>
                          <div className='row mb-5'>
                          <FormItem
                            className={cx('input-title')}
                            name="originalSelect"
                            label="Chọn giới tính"
                          >
                            <Select
                            style={{width: 495,
                              color: "#264234",
                              borderBottom: "2px solid rgba(38, 66, 52, 0.50)"}}
                              name="gender"
                              allowClear
                              placeholder="Select something"
                            >
                              {genderOptions.map((gender) => 
                                (<Select.Option 
                                  style={{width: 495,
                                    padding: "10 10 10 18",
                                    color: "#264234",
                                    fontSize: 20}}
                                 value={gender.value}>{gender.text}</Select.Option>))}
                              
                            </Select>
                          </FormItem>
                          </div>
                        </div>
                        <div>
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
export default Info;
