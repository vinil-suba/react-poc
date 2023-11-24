import { useState } from 'react'

const Header = () =>  {
    const [btnStatus, setBtnStatus] = useState("LogIn")
    return (
        <div className="header-main">
        <div className="logo-container">
            <img className="logo"
                src="https://static.vecteezy.com/system/resources/previews/007/500/121/non_2x/food-delivery-icon-clip-art-logo-simple-illustration-free-vector.jpg"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Cart</li>
                <button className="btn-login" onClick={
                    () => {
                       btnStatus === 'LogIn' ? setBtnStatus("LogOut") : setBtnStatus("LogIn");
                    }
                } > {btnStatus}</button>
            </ul>
        </div>
    </div>
    )
   };

   export default Header;