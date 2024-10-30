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
                    <div className='hidden lg:block'>
                        <ul className='text-gray  flex space-x-9'>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">The Team</a>
                            </li>
                            <li>
                                <a href="#">Pricing</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <button className='nav_btn text-white'>
                        Sign Up
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header