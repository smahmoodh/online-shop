import React from "react";
import { Logo } from '../Logo/logo';
import SearchBox from "../HeaderSerachBox/searchBox";
import './HeaderComponent.css';
import HeaderAccountBox from "../HeaderAccountBox/HeaderAccountBox";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";
import HeaderCategoryMenu from "../HeaderCategoryMenu/HeaderCategoryMenu";

const HeaderComponent = () => {

    return (
        <React.Fragment>
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
                                <a href="https://janebi.com/search?status=1&amp;off=1&amp;special=1&amp;sort=sale" dideo-checked="true">پیشنهاد ویژه</a>
                            </li>
                            <li>
                                <a href="https://janebi.com/search?sort=sale" dideo-checked="true">پرفروش ترین</a>
                            </li>
                            <li>
                                <a href="https://janebi.com/search" dideo-checked="true">جدیدترین ها</a>
                            </li>
                            <li>
                                <a href="https://janebi.com/blog" dideo-checked="true">وبلاگ</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HeaderComponent;