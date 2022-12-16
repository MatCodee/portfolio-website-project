import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <span>MatCode</span>
            </div>
            <ul className="header__link">
                <li><Link to='/'>Services</Link></li>
                <li><Link to='/'>Project</Link></li>
                <li><Link to='/'>About</Link></li>
             </ul>
         
            <Link className="button-secundary">Contact me</Link>
        </div>
    )
}

export default Header