import React from 'react'
import { ManIcon, RightImg } from '../assets/data'

const Doe = () => {
    return (
        <section className='py-10'>
            <div className="container">
                <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-5 md:gap-60'>
                    <div className='space-y-3'>
                        <h2>
                            Johnatan Doe
                        </h2>
                        <p>
                            Marketing Specialist
                        </p>
                        <p>
                            To make your web design company famous in the little
                            we are here to provide you as many as catchy and useful
                            web design company will surely help your company.
                        </p>
                        <button className='ftr_btn text-blue ! border-lightblue hover:bg-lightblue'>
                            Learn More
                        </button>
                    </div>
                    <div>
                        <img src={RightImg} alt="team" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Doe