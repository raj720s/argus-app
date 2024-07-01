// RightSidebar.js

import React from 'react';
import '../styles/RightSidebar.scss'; // Import SCSS file for styling

const RightSidebar = () => {
  return (
    <aside className="right-sidebar">
      <div className="sidebar-section">
        <h2>Advertisement</h2>
        <img src="https://www.w3schools.com/html/pic_trulli.jpg" alt="Advertisement" />
        <p>Advertisement description or related content.</p>
      </div>
      {/* Add more sections as needed */}
    </aside>
  );
}

export default RightSidebar;
