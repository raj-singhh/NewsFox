import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
// import './IntroSection.css';

const IntroSection = () => {
  return (
    <div className="intro-container">
      <div className="intro-content">
        <div className="intro-header">
          <div className="logo-circle">
            <svg viewBox="0 0 24 24" className="logo-icon">
              <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/>
            </svg>
          </div>
          <h1 className="app-title">
            NewsFox
            <span className="fox-emoji" role="img" aria-label="fox">🦊</span>
          </h1>
        </div>

        <div className="typewriter-container">
          <Typewriter
            words={[
              'Stay informed with real-time updates',
              'Customized news for your interests',
              'Global coverage, local relevance',
              'Trusted sources, curated for you',
              'Your window to the world'
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            cursorColor="#3b82f6"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </div>

        <div className="intro-description">
          <p>Get personalized news updates from around the world. Select your preferred categories and regions for a tailored experience.</p>
        </div>

        <div className="visual-elements">
          <div className="circle-element blue"></div>
          <div className="circle-element purple"></div>
          <div className="line-element"></div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;