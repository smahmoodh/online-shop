import React from 'react';
import './Assets/css/main.css';
import { Outlet } from "react-router-dom";
import { Breadcrumb, Layout, Menu, theme, ConfigProvider } from 'antd';
import HeaderComponent from './Components/HeaderComponent/HeaderComponent';
import AuthContextProvider from './Context/Auth/authContext';
import CartState from './Context/Cart/CartState';
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
            <Content className='container'>
              <Outlet />
            </Content>
          </Layout>
        </ConfigProvider>
      </CartState>
    </AuthContextProvider>
  );
}

export default App;