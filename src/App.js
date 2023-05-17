import React, { useEffect } from 'react';
import { Outlet } from "react-router-dom";
import { Breadcrumb, Layout, Menu, theme, ConfigProvider } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';
import { BrowserView, MobileView, isBrowser, isMobile, isTablet } from 'react-device-detect';
import HeaderComponent from './Components/Header/HeaderComponent';
import AuthContextProvider from './Context/Auth/authContext';
import CartState from './Context/Cart/CartState';
import FooterComponent from './Components/FooterComponent/FooterComponent';
import './Assets/css/main.css';
import AccountMobileDrawer from './Components/AccountMobileDrawer/AccountMobileDrawer';
const { Header, Content, Footer } = Layout;



function App() {
  useEffect(() => {
    const htmlTag = document.querySelector("html");

    if (isMobile) {
      import('./Assets/css/main_mobile_mode.css');
      htmlTag.classList.add('mode_mobile');
      htmlTag.classList.remove('mode_desktop');
    }
    else {
      htmlTag.classList.remove('mode_mobile');
      htmlTag.classList.add('mode_desktop');
    }
  }, []);
  return (
    <AuthContextProvider>
      <CartState>
        <ConfigProvider direction="rtl" >
          {isBrowser || isTablet ?
            <Layout className="layout">
              <Header className="header">
                <HeaderComponent />
              </Header>
              <Content className='page'>
                <Outlet />
              </Content>
              <Footer className='footer'>
                <FooterComponent />
              </Footer>
            </Layout>
            : null}
          {isMobile ?
            <Layout className="layout">
              <Header className="header header-mobile">
                <HeaderComponent />
              </Header>
              <Content className='page'>
                <div className='container'>
                  <div className='wrapper clearfix'>
                    <div className='main-content sides'>
                      <Outlet />
                    </div>
                    <Footer className='footer'>
                      <FooterComponent />
                    </Footer>
                  </div>
                </div>
              </Content>
            </Layout>
            : null}
        </ConfigProvider>
      </CartState>
    </AuthContextProvider>
  );
}

export default App;