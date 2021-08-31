import React, { useRef } from 'react';
import VideoFavoriteComponent from '../../components/VideoFavourites';

function VideoFavorites() {
  const sectionRef = useRef(null);

  return (
    <section className="homepage" ref={sectionRef}>
      <VideoFavoriteComponent />
    </section>
  );
}

export default VideoFavorites;
