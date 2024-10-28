import React from 'react'
import { coovid, logo2 } from '../assets/xasan'

const Inpus = () => {
    return (
        <section className='bg-[#E8F9FC]'>
            <div className="container text-center">
                <div className='py-10'>
                    <img className='mx-auto' src={logo2} alt="Logo" />
                    <br />
                    <h3>“Always a pleasure to work with The Agency Creative. Such <br /> professional and happy people and you know you’ll receive a quick <br /> innovative and no fuss service.”</h3>
                    <br />
                    <div className='flex items-center justify-center space-x-2'>
                        <img src={coovid} alt="Xitoy img" />
                        <p>Johnatan Doe <br /> Web Designer</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Inpus