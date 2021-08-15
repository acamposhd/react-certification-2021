import React, { useRef } from 'react';
import VideoLayer from '../../components/VideoLayer/VideoLayer.component';

import './Home.styles.css';

function HomePage() {
  const sectionRef = useRef(null);

  return (
    <section className="homepage" ref={sectionRef}>
      <VideoLayer />
    </section>
  );
}

export default HomePage;
