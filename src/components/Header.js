import React, { useState, useEffect } from 'react';
import { Switch } from '@mui/material';
import videoBackground from '../assets/videos/video2.mp4';
import videoBackground1 from '../assets/videos/video1.mp4';

function VideoPlayer({ videoSrc }) {
  return (
    <video src={videoSrc} loop autoPlay muted></video>
  );
}

function Header() {
  const [showVideo, setShowVideo] = useState(true);

  const handleToggleVideo = () => {
    setShowVideo(!showVideo);
  };

  useEffect(() => {
    // Generate a random boolean value to determine which video to display
    const randomShowVideo = Math.random() < 0.5;
    setShowVideo(randomShowVideo);
  }, []);

  return (
    <header>
      <Switch
        checked={showVideo}
        onChange={handleToggleVideo}
        color="primary"
        inputProps={{ 'aria-label': 'toggle video' }}
        sx={{display:'none'}}
      />

      {showVideo && <VideoPlayer videoSrc={videoBackground1} />}
      {!showVideo && <VideoPlayer videoSrc={videoBackground} />}

      <h1>DiJen Foods</h1>
      <div className="headerbg"></div>
    </header>
  );
}

export default Header;
