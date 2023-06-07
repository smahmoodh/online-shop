import React, { useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Dropdown, Space } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { AuthContext } from '../../../../Context/Auth/authContext';
import './HeaderAccountBox.css';

    

    let items;

const HeaderAccountBox = ({ showModal }) => {

    const navigate = useNavigate();
    const authContext = useContext(AuthContext);
    const logout = () => {
        authContext.dispatch({ type: 'logout' });
        navigate('/', { replace: true });
    }
    let username = '';
    let auth = false;
    const userInfo = JSON.parse(localStorage.getItem('user'));
    if (userInfo) {
        //console.log(userInfo);
        username = userInfo.username;
        auth = true;
    }
    useEffect(() => {
        const guestMenuItems = [
            {
                label: <div title='ورود / ثبت نام' >ورود / ثبت نام</div>,
                key: '0',
            },
            {
                type: 'divider',
            },
            {
                label: <div>کاربر جدید هستید؟<div title='ثبت نام' >ثبت نام</div></div>,
                key: '1',
            }
        ];

        const registeredMenuItems = [
            {
                label: <Link to='/profile' title='پروفایل'>
                    پروفایل
                </Link>,
                key: '0',
            },
            {
                label: <Link to='/orders' title='سفارش‌های من'>
                    سفارش‌های من
                </Link>,
                key: '1',
            },
            {
                type: 'divider',
            },
            {
                label: <div title='خروج'>
                    خروج
                </div>,
                key: '3',
            }
        ];
        if (auth) {
            authContext.dispatch({ type: 'login', payload: username });
            items = [...registeredMenuItems];
        } else {
            items = [...guestMenuItems];
            authContext.dispatch({ type: 'logout' });
        }
    }, []);
    return (
        <div className="user-area">
            <div className="user-toggle">
                <UserOutlined />
                <Dropdown className="user-menu shadow" menu={{ items }} trigger={['click']}>
                    <div onClick={(e) => e.preventDefault()}>
                        <Space>
                            <div className="nickname-section">
                                <div className="welcome">خوش آمدی!</div>
                                <div className="nickname-title">
                                    {
                                        auth ?
                                            `${username}`
                                            :
                                            'پروفایل'

                                    }
                                </div>
                            </div>
                        </Space>
                    </div>
                </Dropdown>
            </div>

        </div>
    )
}

export default HeaderAccountBox;