import React from 'react';
import MobileAds from '../components/MobileAds';
// import BreakingNews from './home/components/BreakingNews';
import MobileSponsorsAds from '@/components/header/MobileSponsorAds';

const LeftSidebar = () => {
  return (
    <aside className="left-sidebar">
      {/* <BreakingNews /> */}
      <MobileAds />
      <MobileSponsorsAds />
      <div className="sidebar-section">
        <h2>News Channels</h2>
        <ul>
          <li>
            <img src="https://www.abc.net.au/news/image/9379092-3x2-700x467.jpg" alt="News Channel 1" />
            <p>News Channel 1</p>
          </li>
          <li>
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="News Channel 2" />
            <p>News Channel 2</p>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default LeftSidebar;
