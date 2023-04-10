import React from 'react';
import { Outlet } from "react-router-dom";
import { Breadcrumb, Layout, Menu, theme, ConfigProvider } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';
import HeaderComponent from './Components/HeaderComponent/HeaderComponent';
import AuthContextProvider from './Context/Auth/authContext';
import CartState from './Context/Cart/CartState';
import FooterComponent from './Components/FooterComponent/FooterComponent';
import './Assets/css/main.css';
const { Header, Content, Footer } = Layout;



function App() {
  return (
    <AuthContextProvider>
      <CartState>
        <ConfigProvider direction="rtl" >
          <Layout className="layout">
            <Header className="header">
              <HeaderComponent />
            </Header>
            <Content className='container-fluid'>
              <Outlet />
            </Content>
            <Footer className='footer'>
              <FooterComponent />
            </Footer>
          </Layout>
        </ConfigProvider>
      </CartState>
    </AuthContextProvider>
  );
}

export default App;