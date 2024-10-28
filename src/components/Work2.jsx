import React from 'react'
import { recall } from '../assets/xasan'

const Work = () => {
    return (
        <section>
            <div className="container">
                <div className='text-center py-32'>
                    <h2>Best features in the world</h2>
                    <p>Capture more customers wd recall. Whether you need a tising or as a tagline for you. Capture more <br /> customers wd recall. Whether you need a tising or as a tagline for you.</p>
                </div>
                <ul className='grid grid-cols-3 gap-12'>
                    {recall.map((i, index) => {
                        return(
                            <li className='text-center items-center py-5'>
                                <img className='bg-blue p-5 rounded-full mx-auto' src={i.img} alt="Img icons" />
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

export default Work