import logo from '../Assets/logo.jpg'
import cart from '../Assets/cart.jpg'
import './Navbar.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menu, setMenu] = useState('shop');
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p className='mt-[30px]'>SHOPPER</p>

            </div>

            <ul className="nav-menu">
                <li onClick={() => { setMenu('shope') }}> <Link to='/'>Shop</Link> {menu === "shope" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu('man') }}><Link to='/mens'>Man</Link> {menu === "man" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu('women') }}><Link to='/women'>Womwns</Link> {menu === "women" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu('kids') }}><Link to='/kids'>Kids</Link> {menu === "kids" ? <hr /> : <></>}</li>
            </ul>
            <div className='flex justify-center nav-login-cart'>
                <Link to='/login'><button className='w-[157] h-[37] mt-[40px] border-black '>Login</button></Link>
                <Link to='/cart'><img src={cart} alt="" className='d-flex justify-center mt-[35px]' /></Link>

                <div className='nav-cart-count mt-[40px] ml-[-55px] rounded-md border-red-700 color'>
                    0

                </div>

            </div>

        </div>
    );
};

export default Navbar;