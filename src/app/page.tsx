import React from 'react';
import MobileAds from '../components/MobileAds';
import BreakingNews from './home/components/BreakingNews';
import MobileSponsorsAds from '@/components/header/MobileSponsorAds';
import './page.scss'; // Import SCSS file for styling

function Page() {
  return (
    <div>
      <BreakingNews />
      <div className="page-container">

        {/* Main content */}
        <main className="main-content">
          <h1 className="text-3xl">
            {/* Jay Jagannath Swami */}
          </h1>
          <section className="content-section">
            <article>
              <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="Article 1" />
              <p>Delhi Chief Minister Arvind Kejriwal Gets Bail In Liquor Policy Case. Delhi Chief Minister Arvind Kejriwal Gets Bail In Liquor Policy Case</p>
            </article>
            {/* <article>
              <h3>Article Title 2</h3>
              <img src="https://www.abc.net.au/news/image/9379092-3x2-700x467.jpg" alt="Article 2" />
              <p>Article content...</p>
            </article> */}
            {/* Add more articles */}
          </section>
          {/* Add more sections */}
        </main>

        {/* Vertical bar */}
        <div className="vertical-bar"></div>

        {/* Left sidebar 1 */}
        <aside className="left-sidebar">
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="Sidebar Image" className="sidebar-image" />
          <p>BJP MP Bhartruhari Mahtab Appointed Pro Tem Speaker</p>
          <hr className="sidebar-hr" />
          <p>85 In Physics, 5 In Chemistry: Scorecard Of NEET Aspirant Arrested In Leak Case</p>
          <hr className="sidebar-hr" />
          <p>After Battle For Chief Minister's Chair, A War Over Furniture In Andhra</p>
        </aside>

        {/* Vertical bar */}
        <div className="vertical-bar"></div>

        {/* Left sidebar 2 */}
        <aside className="left-sidebar">
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="Sidebar Image" className="sidebar-image" />
          <p>BJP MP Bhartruhari Mahtab Appointed Pro Tem Speaker</p>
          <hr className="sidebar-hr" />
          <p>85 In Physics, 5 In Chemistry: Scorecard Of NEET Aspirant Arrested In Leak Case</p>
          <hr className="sidebar-hr" />
          <p>After Battle For Chief Minister's Chair, A War Over Furniture In Andhra</p>
        </aside>

        {/* Vertical bar */}
        <div className="vertical-bar"></div>

        {/* Right sidebar */}
        <aside className="right-sidebar">
          {/* Advertisements */}
          <div className="sidebar-section">
            <h2>Advertisement</h2>
            <img src="https://www.w3schools.com/html/pic_trulli.jpg" alt="Advertisement" />
            <p>Advertisement description or related content.</p>
          </div>
          {/* Add more sections as needed */}
        </aside>
      </div>
    </div>
  );
}

export default Page;
