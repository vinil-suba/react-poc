import { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { useSelector } from 'react-redux';
// import UserContext from '../utils/UserContext';



const Header = () =>  {
    const [btnStatus, setBtnStatus] = useState("LogIn");
    const onlineStatus = useOnlineStatus();
    // const {userName, setUserName} = useContext(UserContext);
    const cartItems = useSelector((store) => store.items)
    // console.log('fom header', cartItems)
    return (
        <div className="header-main">
        <div className="logo-container">
            <img className="logo"
                src="https://static.vecteezy.com/system/resources/previews/007/500/121/non_2x/food-delivery-icon-clip-art-logo-simple-illustration-free-vector.jpg"
                ></img>
              <Link to='/'></Link>
        </div>
        <div className="nav-items">
            <ul>
                {/* <ul>My Name: <input type='text' value={userName} 
                onChange={(e) => {
                    setUserName(e.target.value);
                }} /></ul> */}
                <li>Your in {onlineStatus ? "Online": "Offline"}</li>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/cart'>cart - ({cartItems.length })</Link></li>
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