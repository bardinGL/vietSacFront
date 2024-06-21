
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import classNames from 'classnames/bind';
import styles from './index.module.css';

import redCheck from '../../assets/images/redCheck.png'

const cx = classNames.bind(styles);

function Thankyou() {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
        navigate('/home')
        }, 5000)
    }, [])

    return (
        <div className={`${cx('wrapper')} d-flex justify-content-center align-items-center`}>
            <div className={`${cx('thankyou-section')} d-flex align-items-center flex-column`}>
                <img src={redCheck}/>
                <div className={`${cx('user-info')} mx-auto d-flex flex-column mb-4 text-center`}>
                    <h1 className={`${cx('thankyou-title')} mt-4 mb-2`}>Thanh toán thành công</h1>
                    <p className={`${cx('thankyou-des')}`}>Cảm ơn quý khách đã tin tưởng Việt Sắc </p>
                    <p className={`${cx('thankyou-des')}`}>Hẹn gặp lại quý khách lần sau </p>
                </div>
            </div>
        </div>
    )
}

export default Thankyou;