import React from 'react'
import { Link } from 'react-router-dom'
import { Drawer } from 'antd'
import { Logo } from '../../../Logo/logo'
import HeaderCategoryMenu from '../HeaderCategoryMenu/HeaderCategoryMenu'

import './HeaderSideMenu.css'

const HeaderSideMenu = ({ onClose, open, cssClass }) => {

    let username = '';
    let auth = false;
    const userInfo = JSON.parse(localStorage.getItem('user'));
    if (userInfo) {
        //console.log(userInfo);
        username = userInfo.username;
        auth = true;
    }

    return (
        <Drawer zIndex={1002} className={cssClass} placement="right" onClose={onClose} open={open}>
            <Logo cssclassName="" />
            <div className='drawer-item'>
                <div className='drawer-item-inner user-area'>
                    <a className="user-toggle user_box" href="#mobile_user_box">
                        <i className="fal fa-user"></i>
                        <div className="nickname-section">
                            <div className="welcome">خوش آمدی!</div>
                            <div className="nickname-title">
                                {auth ? { username } : 'پروفایل'}
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div className='drawer-item'>
                <div className='drawer-item-inner header-page-list'>
                    <ul>
                        <li>
                            <Link to="#">پیشنهاد ویژه</Link>
                        </li>
                        <li>
                            <Link to="#">پرفروش ترین</Link>
                        </li>
                        <li>
                            <Link to="#">جدیدترین ها</Link>
                        </li>
                        <li>
                            <Link to="#">وبلاگ</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='drawer-item'>
                <div className='drawer-item-inner cat-menu'>
                    <HeaderCategoryMenu onClose={onClose} />
                </div>
            </div>
        </Drawer>
    )
}

export default HeaderSideMenu