import React, {useState} from 'react';
import { Drawer } from 'antd';
import { AlignRightOutlined } from '@ant-design/icons';
import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';
import { Logo } from '../../Logo/logo';
import SearchBox from '../HeaderSerachBox/SearchBox';
import './HeaderMobile.css';
import HeaderSideMenu from './HeaderSideMenu/HeaderSideMenu';

const HeaderMobile = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <div className="clearfix">
                <div className="header-mobile-inner">
                    <div className="header-mobile-inner-top">
                        <div className="toolbar" onClick={showDrawer}>
                            <AlignRightOutlined />
                        </div>
                        <Logo cssClass="toolbar mobile-logo" />
                        <HeaderCartButton />
                    </div>
                    <SearchBox />
                </div>
                <HeaderSideMenu onClose={onClose} open={open} cssClass="side-menu" />
            </div>
        </>
    )
}

export default HeaderMobile