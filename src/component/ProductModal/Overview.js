import React, { useState, useContext } from "react";
import { Formik } from "formik";
import { Button } from "antd";
import { Input } from "formik-antd";
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';

import ModalContext from "./MultiStepModalContext";

import tui from '../../assets/images/product/tui.png'

import classNames from 'classnames/bind';
import styles from './index.module.css'

const cx = classNames.bind(styles);

function Confirm() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <React.Fragment>
        <Button className={`btn-small prim-btn ${cx('btn-next')} d-inline`} onClick={handleOpen}>
            Xác nhận
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
        >
          <div className={`${cx('confirm-modal')} d-flex justify-content-around align-items-center`}>
            <div>
                <h2>Lưu thiết kế và thêm sản phẩm vào giỏ hàng?</h2>
                <div className="mt-5">
                    <Button className={`btn-small sec-btn ${cx('btn-prev')}`} onClick={handleClose}>
                        Hủy
                    </Button>
                    <Button className={`btn-small prim-btn ${cx('btn-next')}`} onClick={handleClose}>
                        Lưu
                    </Button>
                </div>
            </div>
          </div>
        </Modal>
      </React.Fragment>
    );
  }

const Overview = () => {
  const { content, embOption, next, prev } = useContext(ModalContext);
  return (
    <Formik
    //   initialValues={content}
      onSubmit={(values) => {
        // setContent(values);
        next();
      }}
      validate={(values) => {
        const errors = {};
        // if (!values.content) errors.content = "Missing embroidered content";
        // if (values.content.length > 15)
        //     errors.content =
        //         "Embroidered content must not be over 15 characters";
        return errors;
      }}
    >
      {({ handleSubmit, errors }) => {
        return (
          <div className={`${cx('wrapper')} d-flex flex-column justify-content-center`}>
            <div className={`${cx('overview-img')} text-center`}>
                <img src={tui}/>
            </div>
            <div className={`${cx('content-section')} text-center mt-5`}>
                <Button className={`btn-small sec-btn ${cx('btn-prev')} d-inline me-5`} onClick={prev}>
                    Quay lại
                </Button>
                {/* <Button className={`btn-small prim-btn ${cx('btn-next')} d-inline`} onClick={handleSubmit}>
                    Xác nhận
                </Button> */}
                <Confirm/>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};
export default Overview;
