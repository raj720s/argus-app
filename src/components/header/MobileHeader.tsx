import Image from 'next/image'
import React from 'react'
import { BiChevronDown, BiSearch } from 'react-icons/bi'
import { MdMenu } from 'react-icons/md'
import styles from './styles/mobileheader.module.scss'
import Link from 'next/link'
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'

function MobileHeader() {
  return (
    <div className='mobile-header flex gap-2 p-2 items-center md:hidden z-10'>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content w-4">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="drawer-button max-w-4">
            <MdMenu size={24} />
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu  px-2 w-3/5 max-sm:w-[80%] min-h-full bg-white m-0 ">
            <div className="sidebar-content">
              <div className="side-header flex items-center border-b py-2">

                <div className="close-btn">
                  <label htmlFor="my-drawer" className=" drawer-button">
                    <MdMenu className='text-3xl' />
                  </label>
                </div>
                <Image src="/assets/logo/argus_logo.svg" alt="logo" width={120} height={32} className='mx-4' />

                <div className="dropdown dropdown-end ml-auto">
                  <div tabIndex={0} role="button" className="btn btn-sm p-2 btn-outline border-info-500 border-2 rounded-btn hover:bg-secondary hover:text-primary">English <span>
                    <BiChevronDown />
                  </span>
                  </div>
                  <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                    <li><a>English</a></li>
                    <li><a>ଓଡ଼ିଆ</a></li>
                  </ul>
                </div>
              </div>

              <div className="header-actions flex justify-between gap-2 m-2">
                <button className={styles.live_btn}>Live Tv</button>
                <button className={styles.channel_btn}>Channel No</button>
              </div>

              <div className={styles['mobile_menu']}>
                <Link href="/topics/odisha" className={styles['nav_link']}>
                  <span className="nbsp"> Odisha</span>
                </Link>
                <Link href="/topics/national" className={styles['nav_link']}>
                  <span className="nbsp"> National</span>
                </Link>
                <Link href="/topics/international" className={styles['nav_link']}>
                  <span className="nbsp"> International</span>
                </Link>
                <Link href="/topics/election-2024" className={styles['nav_link']}>
                  <span className="nbsp"> Election-24</span>
                </Link>
                <Link href="/topics/tech" className={styles['nav_link']}>
                  <span className="nbsp"> Tech</span>
                </Link>
                <Link href="/topics/education-and-employment" className={styles['nav_link']}>
                  <span className="nbsp"> Education &amp; Employment</span>
                </Link>
                <Link href="/topics/entertainment" className={styles['nav_link']}>
                  <span className="nbsp"> Entertainment</span>
                </Link>
                <Link href="/topics/sports" className={styles['nav_link']}>
                  <span className="nbsp"> Sports</span>
                </Link>
                <Link href="/topics/business" className={styles['nav_link']}>
                  <span className="nbsp"> Business</span>
                </Link>
                <Link href="/topics/horoscope" className={styles['nav_link']}>
                  <span className="nbsp"> Horoscope</span>
                </Link>
                <Link href="" className={styles['nav_link']}>
                  More
                </Link>
              </div>

              <div className="mobile_menu_info  bottom-0 w-full flex flex-col grow justify-end items-center gap-2 mb-2">
                <div className="temp-indicator text-lg text-gray-500">
                  Bhubaneswar 36.5°C
                </div>
                <div className="social-links flex w-full items-center justify-center gap-2 text-xl">
                  <BsFacebook color="#1877F2" />
                  <BsTwitter color="#1DA1F2" />
                  <BsInstagram color="#E4405F" />
                  <BsYoutube color="#FF0000" />
                </div>
              </div>
            </div>


          </ul>
        </div>
      </div>

      <Image src="/assets/logo/argus_logo.svg" alt="logo" width={100} height={32} />

      <div className="w-full"></div>

      <button className={styles['subscribe_btn']}>Subscribe</button>

      <BiSearch className='text-8xl h-10 mx-2' />

    </div>
  )
}

export default MobileHeader