import React from 'react';
import MobileAds from '../components/MobileAds';
import BreakingNews from '../../';
import MobileSponsorsAds from '@/components/header/MobileSponsorAds';
import styles from '../styles/page.module.scss';

function Page() {
  return (
    <div>
      <BreakingNews />
      <div className={styles.container}>
        <div className={styles.leftBar}>
          <h2>Left Bar</h2>
          <p>Some dummy content for the left bar.</p>
          <MobileAds />
        </div>
        <div className={styles.middleBar}>
          <h1 className="text-3xl">Jay Jagannath Swami</h1>
          <p>Some dummy content for the middle bar.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt.</p>
          <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className={styles.rightBar}>
          <h2>Right Bar</h2>
          <p>Some dummy content for the right bar.</p>
          <MobileSponsorsAds />
        </div>
      </div>
    </div>
  );
}

export default Page;
