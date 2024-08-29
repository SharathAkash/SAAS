import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">JetSnaps</h2>
      <div className="sidebar-options">
        <button className="sidebar-button">Switch Page</button>
        <button className="sidebar-button">Home (All)</button>
        <button className="sidebar-button">Deleted</button>
        <button className="sidebar-button">Affiliate</button>
      </div>
    </div>
  );
}

export default Sidebar;
