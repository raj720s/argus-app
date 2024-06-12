import Image from 'next/image'
import React from 'react'

function HeaderAds() {
    return (
        <div className='header-ads w-full flex justify-end items-center gap-1'>

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

            <div className="gap-2 w-auto h-32">
                <div className="carousel rounded-sm w-52 h-32">
                    <div className="carousel-item w-1/2">
                        <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="w-full" />
                    </div>
                    <div className="carousel-item w-1/2">
                        <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="w-full" />
                    </div>
                    <div className="carousel-item w-1/2">
                        <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="w-full" />
                    </div>
                    <div className="carousel-item w-1/2">
                        <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" className="w-full" />
                    </div>
                    <div className="carousel-item w-1/2">
                        <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="w-full" />
                    </div>
                    <div className="carousel-item w-1/2">
                        <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" className="w-full" />
                    </div>
                    <div className="carousel-item w-1/2">
                        <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="w-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderAds