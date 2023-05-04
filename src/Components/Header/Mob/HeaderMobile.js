import React from 'react';
import { AlignRightOutlined } from '@ant-design/icons';
import HeaderCartButton from '../../HeaderCartButton/HeaderCartButton';
import { Logo } from '../../Logo/logo';
import SearchBox from '../HeaderSerachBox/SearchBox';
import './HeaderMobile.css';

const HeaderMobile = () => {
    return (
        <>
            <header className="header-mobile">
                <div className="clearfix">
                    <div className="header-mobile-inner">
                        <div className="header-mobile-inner-top">
                            <a href="#mm-menu" className="toolbar mm-menu-link " title="منو">
                                <AlignRightOutlined />
                            </a>
                            <Logo cssClass="toolbar mobile-logo" />
                            <HeaderCartButton />
                        </div>
                        <SearchBox />
                    </div>
                </div>
            </header>
        </>
    )
}

export default HeaderMobile