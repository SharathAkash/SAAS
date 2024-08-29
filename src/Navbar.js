import React from 'react';
import logo from './octopuslogo2.jpg';

function Navbar() {
  const handleInstagramConnect = () => {
    const clientId = 'YOUR_INSTAGRAM_CLIENT_ID';
    const redirectUri = 'https://www.instagram.com/accounts/login/'; // Replace with your redirect URI
    const scope = 'user_profile,user_media'; // Adjust scope as needed
    window.location.href = `https://api.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`;
  };

  const handleYouTubeConnect = () => {
    const clientId = 'YOUR_YOUTUBE_CLIENT_ID';
    const redirectUri = 'YOUR_REDIRECT_URI'; // Replace with your redirect URI
    const scope = 'https://www.googleapis.com/auth/youtube'; // Adjust scope as needed
    window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code&access_type=offline`;
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
        <h1>JetSnaps</h1>
        <div className="navbar-links">
          <button onClick={handleInstagramConnect}>Connect Instagram</button>
          <button onClick={handleYouTubeConnect}>Connect YouTube</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
