import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Drawer } from 'antd'
import {
    UserOutlined,
    ContactsOutlined,
    ScheduleOutlined,
    LogoutOutlined,
    FormOutlined,
    ProfileOutlined,
    HeartOutlined,
    ContainerOutlined
} from '@ant-design/icons';
import { AuthContext } from '../../Context/Auth/authContext';

import './AccountMobileDrawer.css';

const AccountMobileDrawer = ({ cssClass, onClose, open }) => {
    let username = '';
    let auth = false;
    let tt = true
    const { authenticate } = useContext(AuthContext);
    if (authenticate) {
        const userInfo = JSON.parse(localStorage.getItem('user'));
        if (userInfo) {
            //console.log(userInfo);
            username = userInfo.username;
            auth = true;
        }
    }
    return (
        
        <Drawer
            height={'fitContent'}
            className={cssClass}
            placement="bottom"
            zIndex={1002}
            onClose={onClose}
            open={open}
            getContainer={'#root'}
        >
            {tt ?
                <ul>
                    <li class="btn-dialog-exit">
                        <a href="#" class="btn-dialog exit-userbox">
                            <LogoutOutlined />
                            خروج
                        </a>
                    </li>
                    <li>
                        <a href="/profile">
                            <ProfileOutlined />
                            پروفایل من
                        </a>
                    </li>
                    <li>
                        <a href="/profile/orders">
                            <ContainerOutlined />
                            سفارش های من
                        </a>
                    </li>
                    <li>
                        <a href="/wishlist">
                            <HeartOutlined />
                            علاقه مندی ها
                        </a>
                    </li>
                    <li>
                        <a href="/profile/edit">
                            <FormOutlined />
                            ویرایش اطلاعات
                        </a>
                    </li>
                </ul>
                :
                <ul>
                    <li>
                        <a href="#" class="btn-dialog">
                            <UserOutlined />
                            ورود
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <ContactsOutlined />
                            ثبت نام
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <ScheduleOutlined />
                            پیگیری سفارشات
                        </a>
                    </li>
                </ul>
            }
        </Drawer>
    )
}

export default AccountMobileDrawer