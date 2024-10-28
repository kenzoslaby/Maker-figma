import React from 'react'
import { PlayIcon } from '../assets/data'

const Work = () => {
    return (
        <section className='bg-work bg-cover bg-no-repeat bg-center py-10'>
            <div className="container">
                <div className='text-center space-y-3'>
                    <h3 className='text-white'>
                        Watch how we work
                    </h3>
                    <p className='text-white'>
                        Capture more customers with a great brand recall. Whether you need a tising or as a tagline for <br /> your business, our slogan generator will help you come up with us.
                    </p>
                    <button>
                        <img className='w-16' src={PlayIcon} alt="play video" />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Work