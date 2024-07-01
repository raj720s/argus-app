'use client'
import React, { useEffect, useState } from 'react'
import styles from '../styles/breakingnews.module.scss'

interface NewsItem {
    id: number;
    content: string;
    image?: string;
    video?: string;
}

const newsData: NewsItem[] = [
    { id: 1, content: 'Lorem, ipsum dolor natus nesciunt exercitationem aliquam!', image: '/images/news1.jpg' },
    { id: 2, content: 'Breaking: Major event happened in the city.', video: '/videos/news2.mp4' },
    { id: 3, content: 'Sports update: Local team wins championship!', image: '/images/news3.jpg' },
    // Add more news items as needed
];

const BreakingNews: React.FC = () => {
    const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
    const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % newsData.length);
            setAnimationKey((prevKey) => prevKey + 1);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const currentNews = newsData[currentNewsIndex];

    return (
        <div className={`${styles.breaking_news} my-1 flex items-center`}>
            <div className="bg-primary text-white p-1 font-bold text-nowrap">
                Breaking News
            </div>
            <div className={`${styles.news_line} p-1 bg-secondary w-full`}>
                <div className={`${styles.news_content} w-full`} key={animationKey}>
                    {currentNews.image && (
                        <img src={currentNews.image} alt="News" className={styles.news_image} />
                    )}
                    {currentNews.video && (
                        <video src={currentNews.video} className={styles.news_video} autoPlay muted loop />
                    )}
                    <p className="px-2 inline-block whitespace-nowrap">
                        {currentNews.content}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default BreakingNews;
