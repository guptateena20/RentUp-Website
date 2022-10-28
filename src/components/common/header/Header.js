import React, { useState } from 'react'
import "./header.css"
import { FaSignOutAlt, FaBars } from 'react-icons/fa'
import {ImCross} from 'react-icons/im'
import Navigation from './Navigation'
import { NavLink } from 'react-router-dom'


const style = { marginRight: "5px" }

const Header = () => {
    const [navList, setNavList] = useState(false);

    return (
        <>
            <header>
                <div className='container flex'>
                    <div className='logo'>
                        <NavLink to="/">
                            <img src="./images/logo.png" alt="logo" />
                        </NavLink>
                    </div>

                    <Navigation navList = {navList}/>
                    
                    <div className='button flex'>
                        {/* <h4>
                            <span>2</span> My List
                        </h4> */}
                        <button className='btn1'>
                            <FaSignOutAlt style={style} />Sign In
                        </button>
                    </div>

                    <div className='toggle'>
                        <button onClick={() => setNavList(!navList)}>
                           {
                            navList ?  <ImCross/> : <FaBars style={style} />
                           }
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header


