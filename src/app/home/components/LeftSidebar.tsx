// LeftSidebar.js

import React from 'react';
import '../styles/LeftSidebar.scss'; // Import SCSS file for styling

const LeftSidebar = () => {
  return (
    <aside className="left-sidebar">
      <div className="sidebar-content">
        <img src="https://c.ndtvimg.com/2024-06/6t44ef7g_delhi-ridge_625x300_24_June_24.jpg?im=FaceCrop,algorithm=dnn,width=650,height=400" alt="Sidebar Image" className="sidebar-image" />
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
