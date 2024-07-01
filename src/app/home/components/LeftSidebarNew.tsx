// LeftSidebar.js

import React from 'react';
import '../styles/LeftSidebarNew.scss'; // Import SCSS file for styling

const LeftSidebar = () => {
  return (
    <aside className="left-sidebar">
      <div className="sidebar-content">
        <img src="https://c.ndtvimg.com/2024-05/9adbivvo_naveen-patnaik-ani_625x300_30_May_24.jpeg?downsize=243:151&w=243" alt="Sidebar Image" className="sidebar-image" />
        <p>BJP MP Bhartruhari Mahtab Appointed Pro Tem Speaker</p>
        <hr className="sidebar-hr" />
        <p>85 In Physics, 5 In Chemistry: Scorecard Of NEET Aspirant Arrested In Leak Case</p>
        <hr className="sidebar-hr" />
        <p>After Battle For Chief Minister's Chair, A War Over Furniture In Andhra</p>
      </div>
    </aside>
  );
}

export default LeftSidebar;
