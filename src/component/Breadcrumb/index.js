import React from 'react'
import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';

import styles from './index.module.css'
const cx = classNames.bind(styles);

function Breadcrumb({pageTitle}) {
    const location = useLocation();
    let pathNames = location.pathname.split('/');
    pathNames = pathNames.filter(Boolean);
    pathNames.pop();
    pathNames.push(pageTitle);

    return (
        <ul class={cx('breadcrumb')}>
           {pathNames.map(function(currPathname, index) {
            let pathToCurr = '';
            for(let i = 0; i <= index; ++i) 
                pathToCurr += `/${pathNames[i]}`
            
            return (<li><a href={pathToCurr}>{currPathname}</a></li>)
           }
           )}
        </ul>
    )
}

export default Breadcrumb;