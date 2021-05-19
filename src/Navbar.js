// import React from 'react'
// import './App.css';
// import {Link} from 'react-router-dom';
// import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
// export default function Nav() {

//     const navStyle = {
//         color: 'white'
//     };




//     return ( 
//        <nav>
//             <h3>BULACAN STATE UNIVERSITY</h3>
//             <ul className ="nav-Link">

//                 <Link style={navStyle} to="/">
//                 <li>Home</li>
//                 </Link>  

//                 <Link style={navStyle} to="/login">
//                 <li>Login</li>
//                 </Link>  

//                 <Link style={navStyle} to="/register">  
//                 <li>Register</li>
//                 </Link>

//             </ul>

//        </nav>
//     )
// }

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () =>{
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect(()=>{
        showButton();
    },[]);


    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    {/* <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                         BULACAN STATE UNIVERSITY
                    </Link> */}
                    <div className='menu-icon' onClick={handleClick}>
                        <i class={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                        <li className='nav-item'>
                            <Link to='/' 
                            className='nav-links' 
                            onClick={closeMobileMenu}>
                                HOME
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/login' 
                            className='nav-links' 
                            onClick={closeMobileMenu}>
                                LOGIN
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' 
                            className='nav-links' 
                            onClick={closeMobileMenu}>
                                ABOUT
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/register' 
                            className='nav-links-mobile' 
                            onClick={closeMobileMenu}>
                                SIGNUP
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGNUP</Button>}
                </div>

            </nav>

            <div className='logoNavbar'> <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                         BULACAN STATE UNIVERSITY
                    </Link></div>
        </>
    )
}

export default Navbar;