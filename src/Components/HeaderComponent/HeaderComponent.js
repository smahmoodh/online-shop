import React from "react";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { Logo } from '../Logo/logo';
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";
import HeaderCategoryMenu from "../HeaderCategoryMenu/HeaderCategoryMenu";
import HeaderAccountBox from "../Header/Des/HeaderAccountBox/HeaderAccountBox";
import SearchBox from "../Header/HeaderSerachBox/SearchBox";
import HeaderMobile from "../Header/Mob/HeaderMobile";

import './HeaderComponent.css';

const HeaderComponent = () => {

    return (
        <React.Fragment>
            {isMobile ? <HeaderMobile /> :
            <>
            <div className="header-top">
                <div className="container-fluid">
                    <div className="header-top-inner">
                        <Logo cssClass="logo" />
                        <SearchBox />
                        <HeaderAccountBox />
                        <HeaderCartButton />
                    </div>
                </div>
            </div>
            <div className="header-bottom">
                <div className="container-fluid">
                    <nav className="main-menu-inner clearfix">
                        <div className="cats-menu">
                            <a className="cat-menu-toggle justify-content-center align-self-center" href="#" dideo-checked="true">
                                <i className="far fa-bars"></i>
                                <span>دسته بندی محصولات</span>
                            </a>
                            <div className="cats-menu-count clearfix">
                                <HeaderCategoryMenu />
                            </div>
                        </div>
                    </nav>
                    <div className="header-page-list">
                        <ul>
                            <li>
                                <a href="#" dideo-checked="true">پیشنهاد ویژه</a>
                            </li>
                            <li>
                                <a href="#" dideo-checked="true">پرفروش ترین</a>
                            </li>
                            <li>
                                <a href="#" dideo-checked="true">جدیدترین ها</a>
                            </li>
                            <li>
                                <a href="#" dideo-checked="true">وبلاگ</a>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
                </>}
        </React.Fragment>
    )
}

export default HeaderComponent;