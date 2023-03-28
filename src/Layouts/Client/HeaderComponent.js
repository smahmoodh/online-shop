import { Logo } from "../../Components/Logo/logo";
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer } = Layout;

const HeaderComponent = () => (
    <Header >
        <Logo cssClass="logo" />
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={new Array(15).fill(null).map((_, index) => {
                const key = index + 1;
                return {
                    key,
                    label: `nav ${key}`,
                };
            })}
        />
        
    </Header>
)

export default HeaderComponent;