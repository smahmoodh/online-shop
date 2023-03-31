import React from "react";
import { Layout } from 'antd';
import { Logo } from '../Logo/logo';
import SearchBox from "../HeaderSerachBox/searchBox";
import './HeaderComponent.css';
import HeaderAccountBox from "../HeaderAccountBox/HeaderAccountBox";

const { Header } = Layout;

const HeaderComponent = () => {

    return (
        <Header className="header">
            <Logo cssClass="logo" />
            <SearchBox />
            <HeaderAccountBox />
            <div style={{ flexGrow: "1", color:"#fff"}}>سبد خرید</div>
        </Header>
    )
}

export default HeaderComponent;