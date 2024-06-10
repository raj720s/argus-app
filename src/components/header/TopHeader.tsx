import Link from 'next/link'
import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'

import styles from './styles/header-top.module.scss'
import { BiChevronDown } from 'react-icons/bi'

function TopHeader() {
  return (
    <div className={styles['top-header']}>
      <div className={styles.info}>
        <button className={styles.live_btn}>Live Tv</button>
        <button className={styles.channel_btn}>Channel No</button>

        <div className="temp-indicator">
          Bhubaneswar 36.5°C
        </div>
      </div>
      <div className={styles.info}>
        <div className="subscribe-btn">
          <button className={styles.subscribe_btn}>Subscribe Argus</button>
        </div>

        <div className="social-links flex items-center gap-2 text-lg">
          <BsFacebook color="#1877F2" />
          <BsTwitter color="#1DA1F2" />
          <BsInstagram color="#E4405F" />
          <BsYoutube color="#FF0000" />
        </div>
        {/* <div className="">
          <Link href={'https://www.google.com'}>English</Link> | <Link href={'https://www.google.com'}>ଓଡ଼ିଆ</Link>
        </div> */}
        <div className="dropdown dropdown-hover">
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


    </div>
  )
}

export default TopHeader