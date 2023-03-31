import React from 'react';
import './Assets/css/main.css';
import { Outlet } from "react-router-dom";
import { Breadcrumb, Layout, Menu, theme, ConfigProvider } from 'antd';
import HeaderComponent from './Components/HeaderComponent/HeaderComponent';
import AuthContextProvider from './Context/Auth/authContext';

const { Header, Content, Footer } = Layout;



function App() {
  return (
    <AuthContextProvider>
      <ConfigProvider direction="rtl" >
        <Layout className="layout">
          <HeaderComponent />
          <Content className='container'>
            <Outlet />
          </Content>
        </Layout>
      </ConfigProvider>
    </AuthContextProvider>
  );
}

export default App;
