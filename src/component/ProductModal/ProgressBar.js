import React, { useContext } from "react";

import classNames from 'classnames/bind';
import styles from './index.module.css'

const cx = classNames.bind(styles);

const Progressbar = ({ currentStep, progressbarStepTitle}) => {
  return (
    <ul className={`${cx('progressbar')} position-relative d-flex justify-content-between mt-3`}>
        <div className={`${cx('progressbar-box')}`}></div>
        {progressbarStepTitle.map(function(step, index) {
            if(index < currentStep) {
                return (<li className={cx('complete')}>{step}</li>);
            }
            else if(index === currentStep) {
                return (<li className={cx('active')}>{step}</li>);
            }else {
                return (<li>{step}</li>);
            }
        })}
    </ul>
    );
};
export default Progressbar;
