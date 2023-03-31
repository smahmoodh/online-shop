import logo from "../../Assets/img/logo-1.png";
import './logo.css';
export const Logo = (props) => (
    <div  className={props.cssClass}>
        <img src={logo} alt="لوگو" />
    </div>
)