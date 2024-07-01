// Page.js

import React from 'react';
import BreakingNews from './home/components/BreakingNews';
import MainContent from './home/components/MainContent';
import LeftSidebar from './home/components/LeftSidebar';
import LeftSidebarNew from './home/components/LeftSidebarNew';
import RightSidebar from './home/components/RightSidebar';
import './page.scss'; // Import SCSS file for styling

function Page() {
  return (
    <div>
      <BreakingNews />
      <div className="page-container">
        {/* Main content */}
        <MainContent />

        {/* Vertical bar */}
        <div className="vertical-bar"></div>

        {/* Left sidebar 1 */}
        <LeftSidebar />

        {/* Vertical bar */}
        <div className="vertical-bar"></div>

        {/* Left sidebar 2 (if needed) */}
        <LeftSidebarNew />

        {/* Vertical bar */}
        <div className="vertical-bar"></div>

        {/* Right sidebar */}
        <RightSidebar />
      </div>
    </div>
  );
}

export default Page;
