import React, {useState} from 'react';
import { Drawer } from 'antd';
import { AlignRightOutlined } from '@ant-design/icons';
import { Logo } from '../../Logo/logo';
import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';
import SearchBox from '../HeaderSerachBox/SearchBox';
import HeaderSideMenu from './HeaderSideMenu/HeaderSideMenu';
import AccountMobileDrawer from '../../AccountMobileDrawer/AccountMobileDrawer';
import LoginModal from '../../LoginModal/LoginModal';

import './HeaderMobile.css';

const HeaderMobile = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const [openAccountDrawer, setOpenAccountDrawer] = useState(false);
    const showAccountDrawer = () => {
        console.log("showAccountDrawer");
        onClose();
        setOpenAccountDrawer(true);
    };
    const onCloseAccountDrawer = () => {
        setOpenAccountDrawer(false);
    };

    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const showModal = () => {
        onCloseAccountDrawer();
        setIsLoginModalOpen(true);
    };
    const handleLoginModalCancel = () => {
        setIsLoginModalOpen(false);
    }
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
                <HeaderSideMenu onClose={onClose} open={open} cssClass="side-menu" showAccountDrawer={showAccountDrawer} />
                <AccountMobileDrawer cssClass={'account-drawer'} onClose={onCloseAccountDrawer} open={openAccountDrawer} showModal={showModal} />
            </div>
            <LoginModal isLoginModalOpen={isLoginModalOpen} handleLoginModalCancel={handleLoginModalCancel} />
        </>
    )
}

export default HeaderMobile