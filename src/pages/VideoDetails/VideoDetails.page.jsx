import React, { useRef } from 'react';
import VideoDetailsComponent from '../../components/VideoDetails';

function VideoDetails() {
  const sectionRef = useRef(null);

  return (
    <section className="homepage" ref={sectionRef}>
      {/* <h1>Challenge 3</h1> */}

      <>
        <VideoDetailsComponent />
      </>
    </section>
  );
}

export default VideoDetails;
