import logo from './../../assets/logo.png';

const Header = () => {
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
                </ul>
            </div>
        </div>
    )
}

export default Header;