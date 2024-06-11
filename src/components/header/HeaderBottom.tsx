import Link from 'next/link'
import React from 'react'
import { BsYoutube } from 'react-icons/bs'
import styles from './styles/header-bottom.module.scss'

function HeaderBottom() {
    return (
        <div className={
            `header-section-scroll`
        }>
            <div id="scrollquestion" className={`${styles.custom_scrollbar}  border-b border-t border-orange-300 flex justify-items-start items-center overflow-x-auto whitespace-nowrap gap-1 `}>

                <div className="you-tube ml-1 flex items-center">
                    <Link href="https://www.youtube.com/channel/UCZL6FfQYRm7qkzXcGw9gBwA" target="_blank" rel="noopener noreferrer">

                        <BsYoutube fontSize={24} color='red' className='mr-2' />
                    </Link>
                    <p className='text-red-500 text-base'>Youtube</p>
                </div>

                <div className="flex items-center">
                    <Link href="/" className="nav-link px-2 px-lg-3 py-1  ">
                        Home
                    </Link>
                    <Link href="/topics/odisha" className="nav-link  px-2 px-lg-3 py-1 ">
                        <span className="nbsp"> Odisha</span>
                    </Link>
                    <Link href="/topics/national" className="nav-link  px-2 px-lg-3 py-1 ">
                        <span className="nbsp"> National</span>
                    </Link>
                    <Link href="/topics/international" className="nav-link  px-2 px-lg-3 py-1 ">
                        <span className="nbsp"> International</span>
                    </Link>
                    <Link href="/topics/election-2024" className="nav-link  px-2 px-lg-3 py-1 ">
                        <span className="nbsp"> Election-24</span>
                    </Link>
                    <Link href="/topics/tech" className="nav-link  px-2 px-lg-3 py-1 ">
                        <span className="nbsp"> Tech</span>
                    </Link>
                    <Link href="/topics/education-and-employment" className="nav-link  px-2 px-lg-3 py-1 ">
                        <span className="nbsp"> Education &amp; Employment</span>
                    </Link>
                    <Link href="/topics/entertainment" className="nav-link  px-2 px-lg-3 py-1 ">
                        <span className="nbsp"> Entertainment</span>
                    </Link>
                    <Link href="/topics/sports" className="nav-link  px-2 px-lg-3 py-1 ">
                        <span className="nbsp"> Sports</span>
                    </Link>
                    <Link href="/topics/business" className="nav-link  px-2 px-lg-3 py-1 ">
                        <span className="nbsp"> Business</span>
                    </Link>
                    <Link href="/topics/horoscope" className="nav-link  px-2 px-lg-3 py-1 ">
                        <span className="nbsp"> Horoscope</span>
                    </Link>
                    <Link href="" className="nav-link px-2 d-none d-lg-block  py-1">
                        More
                    </Link>
                </div>
            </div>





        </div >
    )
}

export default HeaderBottom