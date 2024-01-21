import { useState } from 'react';
import logo from './../../assets/logo.png';

const Header = () => {

    // const btnName = "Login";
    const [login, setLogin] = useState('Login');


    return (
        <div className="header">
            <div className="logo-container">
                 <img className="logo" src={logo} alt="" />
            </div>
            <div className="nav-items">
                <ul className="itemList">
                    <li className="item">Home</li>
                    <li className="item">About Us</li>
                    <li className="item">Contact Us</li>
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