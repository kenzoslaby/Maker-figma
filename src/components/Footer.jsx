import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-darkblue text-white'>
            <div className="container">
                <div className='grid text-center md:text-start grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-20'>
                    {/* 1chi grid */}
                    <div className='py-6 space-y-3'>
                        <h3>Freelancer</h3>
                        <h4><span>19</span>/mo</h4>
                        <ul>
                            <li><a className='text-gray space-y-3' href="#">5 Psd fles included</a></li>
                            <li><a className='text-gray space-y-3' href="#">24 hours free support</a></li>
                            <li><a className='text-gray space-y-3' href="#">Multiple features installed</a></li>
                            <li><a className='text-gray space-y-3' href="#">100 Elements PSD + Al</a></li>
                        </ul>
                        <button className="ftr_btn">Subscribe</button>
                    </div>
                    {/* 2chi grid */}
                    <div className='py-6 space-y-3'>
                        <h3>Corporate</h3>
                        <h4><span>24</span>/mo</h4>
                        <ul>
                            <li><a className='text-gray space-y-3' href="#">5 Psd fles included</a></li>
                            <li><a className='text-gray space-y-3' href="#">24 hours free support</a></li>
                            <li><a className='text-gray space-y-3' href="#">Multiple features installed</a></li>
                            <li><a className='text-gray space-y-3' href="#">100 Elements PSD + Al</a></li>
                        </ul>
                        <button className="ftr_btn">Subscribe</button>
                    </div>
                    {/* 3chi grid */}
                    <div className='py-6 space-y-3'>
                        <h3>Agency</h3>
                        <h4><span>25</span>/mo</h4>
                        <ul>
                            <li><a className='text-gray space-y-3' href="#">5 Psd fles included</a></li>
                            <li><a className='text-gray space-y-3' href="#">24 hours free support</a></li>
                            <li><a className='text-gray space-y-3' href="#">Multiple features installed</a></li>
                            <li><a className='text-gray space-y-3' href="#">100 Elements PSD + Al</a></li>
                        </ul>
                        <button className="ftr_btn">Subscribe</button>
                    </div>
                    {/* 4chi grid */}
                    <div className='py-6 space-y-3'>
                        <h3>Enterprise</h3>
                        <h4><span>15</span>/mo</h4>
                        <ul>
                            <li><a className='text-gray space-y-3' href="#">5 Psd fles included</a></li>
                            <li><a className='text-gray space-y-3' href="#">24 hours free support</a></li>
                            <li><a className='text-gray space-y-3' href="#">Multiple features installed</a></li>
                            <li><a className='text-gray space-y-3' href="#">100 Elements PSD + Al</a></li>
                        </ul>
                        <button className="ftr_btn">Subscribe</button>
                    </div>
                </div>
                <hr />
                <div>
                    <ul className='flex flex-col md:flex-row py-7 text-center md:text-start space-y-2 md:space-y-0 gap-6'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contact us</a></li>
                    </ul>
                    <div>
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-instagram"></i>
                        <i class="bi bi-twitter"></i>

                        <i class="bi bi-twitter"></i>
                    </div>
                    <p className='hidden md:block'>@ A new era 2016. Awesome wireframe  by Andrei Dorin</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
