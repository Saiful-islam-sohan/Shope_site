import logo from '../Assets/logo.jpg'
import cart from '../Assets/cart.jpg'
import './Navbar.css'
import { useState } from 'react';

const Navbar = () => {

    const [menu, setMenu] = useState('shop');
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p className='mt-[30px]'>SHOPPER</p>

            </div>

            <ul className="nav-menu">
                <li onClick={() => { setMenu('shope') }}>Shop {menu === "shope" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu('man') }}>Man {menu === "man" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu('women') }}>Women {menu === "women" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu('kids') }}>Kids {menu === "kids" ? <hr /> : <></>}</li>
            </ul>
            <div className='nav-login-cart flex justify-center'>
                <button className='w-[157] h-[37] mb-[10px] border-black '>Login</button>
                <img src={cart} alt="" className='d-flex justify-center mt-[35px]' />
                <div className='nav-cart-count mt-[40px] ml-[-55px] rounded-md border-red-700 color'>
                    0

                </div>

            </div>

        </div>
    );
};

export default Navbar;