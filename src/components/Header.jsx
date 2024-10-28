import React from 'react'
import { LogoIcon } from '../assets/data'

const Header = () => {
    return (
        <header className='bg-lightblue'>
            <div className="container">
                <div className='flex justify-between items-center' >
                    <a href="#">
                        <img src={LogoIcon} alt="logo" />
                    </a>
                    <ul className='text-gray flex space-x-9'>
                        <li>
                            Home
                        </li>
                        <li>
                            Services
                        </li>
                        <li>
                            About
                        </li>
                        <li>
                            The Team
                        </li>
                        <li>
                            Pricing
                        </li>
                        <li>
                            Contact
                        </li>
                    </ul>
                    <button className='nav_btn text-white'>
                        Sign Up
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header