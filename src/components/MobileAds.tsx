import Image from 'next/image'
import React from 'react'

function MobileAds() {
    return (
        <div className='mobile-ads md:hidden'>
            <div className="sponsor-ads">

                <div className="ads-carousel rounded-sm flex-grow h-32">
                    <div className="carousel lg:w-full static-ads h-32">
                        <div id="item1" className="carousel-item w-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className='w-full hero' alt='image' />
                        </div>
                        <div id="item2" className="carousel-item w-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className='w-full hero' alt='image' />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MobileAds 