

'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

function MobileSponsorsAds() {

    const carouselRef = useRef(null);
    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;
        let scrollAmount = 0;
        const scrollStep = 1; // Adjust this value to control the speed
        const delay = 30; // Adjust this value to control the speed

        const autoScroll = () => {
            scrollAmount += scrollStep;
            //@ts-ignore
            if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
                scrollAmount = 0;
            }
            //@ts-ignore
            carousel.scrollTo({
                left: scrollAmount,
                behavior: 'smooth',
            });
            setTimeout(autoScroll, delay);
        };

        autoScroll();
    }, []);
    return (
        <div className='header-ads w-full flex-col  px-2 items-center gap-1 md:hidden'>
            <p className='text-3xl p-2 text-center text-gray-500 font-bold'>Top Sponsors</p>
            <div className="gap-2 w-auto">
                <div className="carousel gap-2 rounded-sm w-full h-32" ref={carouselRef}>
                    <div className="carousel-item w-1/4">
                        <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="w-full" />
                    </div>
                    <div className="carousel-item w-1/4">
                        <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="w-full" />
                    </div>
                    <div className="carousel-item w-1/4">
                        <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="w-full" />
                    </div>
                    <div className="carousel-item w-1/4">
                        <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" className="w-full" />
                    </div>
                    <div className="carousel-item w-1/4">
                        <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="w-full" />
                    </div>
                    <div className="carousel-item w-1/4">
                        <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" className="w-full" />
                    </div>
                    <div className="carousel-item w-1/4">
                        <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="w-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileSponsorsAds