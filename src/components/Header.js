import { useState } from 'react';
import logo from './../../assets/logo.png';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';


const Header = () => {

    // const btnName = "Login";
    const [login, setLogin] = useState('Login');
    
    const onlineStatus = useOnlineStatus(); 

    return (
        <div className="flex justify-between bg-pink-200 shadow-lg m-2 px">
            <div className="logo-container">
                <Link to='/'><img className="w-24" src={logo} alt="" /></Link>       
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className='px-4'>
                        Online Status: {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">Cart</li>
                    <button className='' onClick={()=>{
                        login ==="Login" ? setLogin('Logout') : setLogin('Login')
                    }}>{login}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;