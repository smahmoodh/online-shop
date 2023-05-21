import React,{useEffect, useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import { Drawer } from 'antd'
import { AuthContext } from '../../../../Context/Auth/authContext'
import { Logo } from '../../../Logo/logo'
import HeaderCategoryMenu from '../HeaderCategoryMenu/HeaderCategoryMenu'

import './HeaderSideMenu.css'

const HeaderSideMenu = ({ onClose, open, cssClass, showAccountDrawer }) => {

    const { authenticate } = useContext(AuthContext);
    const [username, setUsername] = useState('پروفایل');
    let auth = false;
    useEffect(() => { 
        console.log(authenticate);
        if (authenticate) {
            auth = true;
            const userInfo = JSON.parse(localStorage.getItem('user'));
            setUsername(userInfo.username);
            console.log(userInfo);
        }
        // const userInfo = JSON.parse(localStorage.getItem('user'));

    }, [])
    useEffect(() => {
        console.log(authenticate);
        if (authenticate) {
            auth = true;
            const userInfo = JSON.parse(localStorage.getItem('user'));
            setUsername(userInfo.username);
            console.log(userInfo);
        }
        // const userInfo = JSON.parse(localStorage.getItem('user'));

    }, [authenticate])
    

    return (
        <Drawer zIndex={1002} className={cssClass} placement="right" onClose={onClose} open={open}>
            <Logo cssclassName="" />
            <div className='drawer-item'>
                <div className='drawer-item-inner user-area'>
                    <div className="user-toggle user_box" onClick={showAccountDrawer}>
                        <i className="fal fa-user"></i>
                        <div className="nickname-section">
                            <div className="welcome">خوش آمدی!</div>
                            <div className="nickname-title">
                                { username }
                            </div>
                        </div>
                    </div>
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