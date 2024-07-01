'use client'
import React from 'react'
import styles from '../styles/maincontent.module.scss'
import Link from 'next/link'

const MainContent: React.FC = () => {

    return (
        <main className={`${styles.main_content}`}>
        <h1 className="text-3xl">
          {/* Jay Jagannath Swami */}
        </h1>
        <section className="content-section">
          <article className="article-container">
          <Link href="/details">
          {/* <a href="http://localhost:3000/details" target="_blank" rel="noopener noreferrer"> */}
            <img src="https://c.ndtvimg.com/2024-06/smp7dqg_rohit-sharma-afp_625x300_24_June_24.jpg?im=FaceCrop,algorithm=dnn" alt="Article 1" className="article-image" />
            {/* </a> */}
            </Link>
            <p className='article-content'>T20 WC Live: Rohit Out After Setting 2 World Records, Australia Relieved | Live Scorecard</p>
          </article>
        </section>
      </main>
    );
}

export default MainContent;
