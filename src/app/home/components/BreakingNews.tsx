'use client'
import React, { useEffect, useState } from 'react'
import styles from '../styles/breakingnews.module.scss'

interface NewsItem {
    id: number;
    content: string;
}


const newsData = [
    { id: 1, content: 'Lorem, ipsum dolor natus nesciunt exercitationem aliquam!' },
    { id: 2, content: 'Breaking: Major event happened in the city.' },
    { id: 3, content: 'Sports update: Local team wins championship!' },
    // Add more news items as needed
];

const BreakingNews = () => {
    const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
    const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % newsData.length);
            setAnimationKey((prevKey) => prevKey + 1);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`${styles.breaking_news} my-1 flex items-center`}>
            <div className="bg-primary text-white p-1 font-bold text-nowrap">
                Breaking News
            </div>
            <div className={`${styles.news_line} p-1 bg-secondary w-full`}>
                <div className={`${styles.news_content} w-full`} key={animationKey}>
                    <p className="px-2 inline-block whitespace-nowrap">
                        {newsData[currentNewsIndex].content}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default BreakingNews;
