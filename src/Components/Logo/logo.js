import { Link } from 'react-router-dom';
import logo from "../../Assets/img/logo-1.png";
import './logo.css';
export const Logo = (props) => (
    <Link to='/' className={props.cssClass}>
        <img src={logo} alt="لوگو" />
    </Link>
)