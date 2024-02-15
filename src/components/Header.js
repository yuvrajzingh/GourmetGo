import { useState } from 'react';
import logo from './../../assets/logo.png';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';


const Header = () => {

    // const btnName = "Login";
    const [login, setLogin] = useState('Login');
    
    const onlineStatus = useOnlineStatus(); 

    return (
        <div className="header">
            <div className="logo-container">
                <Link to='/'><img className="logo" src={logo} alt="" /></Link>       
            </div>
            <div className="nav-items">
                <ul className="itemList">
                    <li>
                        Online Status: {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li className="item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="item">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="item">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="item">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="item">Cart</li>
                    <button className='' onClick={()=>{
                        login ==="Login" ? setLogin('Logout') : setLogin('Login')
                    }}>{login}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;