import React from 'react'
import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';

import styles from './index.module.css'
const cx = classNames.bind(styles);

function Breadcrumb({pages, filter}) {
    const filtersName = Object.keys(filter);
    filtersName.forEach((filterName) => {
        if(filter[filterName] !== 'all') {
            pages.push({title: filter[filterName], path: '/shop'})
        }
    });

    return (
        <ul class={cx('breadcrumb')}>
           {pages.map((page, index) => (<li><a href={page.path}>{page.title}</a></li>))}
        </ul>
    )
}

export default Breadcrumb;