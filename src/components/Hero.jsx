import React from 'react'
import { HeroImg } from '../assets/data'

const Hero = () => {
    return (
        <section className='bg-lightblue py-10'>
            <div className="container">
                <div className='grid grid-cols-2 items-center'>
                    <div className='space-y-6'>
                        <h1>Make a Creative solutions for your Creative ideas.</h1>
                        <p>
                            We are here to give you effective ideas. We help the brands to become what they want.
                        </p>
                        <button className='nav_btn'>
                            Get Started
                        </button>
                    </div>
                    <div>
                        <img src={HeroImg} alt="heroImg" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero