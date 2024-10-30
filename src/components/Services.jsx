import React from 'react'
import { services } from '../assets/data'

const Services = () => {
    return (
        <section className='py-10'>
            <div className="container">
                <div className='text-center space-y-3'>
                    <h2>
                        We provide great services
                    </h2>
                    <p>
                        We help people to think independent. Be the boss of your brand and be the <br /> storyteller. An appropriate approach.
                    </p>
                </div>
                <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8'>
                    {services.map((i, index) => {
                        return(
                            <li key={index} className='text-center items-center hover:bg-lightblue rounded-2xl p-3 space-y-3 mt-10'>
                                <img className='bg-blue rounded-full mx-auto' src={i.img} alt="Img icons" />
                                <h4>{i.title}</h4>
                                <p>{i.description}</p>
                            </li>
                        )
                    })}
                </ul>

            </div>
        </section>
    )
}

export default Services