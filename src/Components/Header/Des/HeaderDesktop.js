import React from 'react';
import SearchBox from '../HeaderSerachBox/SearchBox';
import HeaderAccountBox from './HeaderAccountBox/HeaderAccountBox';
import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';
import HeaderCategoryMenu from './HeaderCategoryMenu/HeaderCategoryMenu';
import { Logo } from '../../Logo/logo';
import { Col, Row } from 'antd';

import './HeaderDesktop.css';

const HeaderDesktop = () => {
  return (
    <>
      <div className="header-top clearfix">
        <div className="container-fluid">
          <Row className="header-top-inner">
            <Col xs={18}>
              <div className='header-logo-section'>
                <Logo cssClass="logo" />
                <div className='header-search'>
                  <SearchBox />
                </div>
              </div>
            </Col>
            <Col xs={6}>
              <div className='hedaer-user-section'>
                <HeaderAccountBox />
                <HeaderCartButton />
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="header-bottom clearfix">
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
    </>
  )
}

export default HeaderDesktop