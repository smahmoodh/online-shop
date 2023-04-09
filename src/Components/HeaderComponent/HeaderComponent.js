import React from "react";
import { Logo } from '../Logo/logo';
import SearchBox from "../HeaderSerachBox/searchBox";
import './HeaderComponent.css';
import HeaderAccountBox from "../HeaderAccountBox/HeaderAccountBox";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";

const HeaderComponent = () => {

    return (
        <React.Fragment>
            <Logo cssClass="logo" />
            <SearchBox />
            <HeaderAccountBox />
            <HeaderCartButton />
        </React.Fragment>
    )
}

export default HeaderComponent;