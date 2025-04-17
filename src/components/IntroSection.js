import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { useNavigate } from 'react-router-dom';
import NewsItem from './NewsItem'; // Import your NewsItem component

const IntroSection = (props) => {
  const navigate = useNavigate();
  const [trendingNews, setTrendingNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextPage, setNextPage] = useState(null);

  // Fetch trending international news
  const fetchTrendingNews = async () => {
    props.setProgress(10);
    
    let url = `https://newsdata.io/api/1/news?apikey=${props.apiKey}&language=en&category=world`;
    
    props.setProgress(30);
    setLoading(true);
    
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      props.setProgress(70);
      
      setTrendingNews(parsedData.results || []);
      setNextPage(parsedData.nextPage);
      setLoading(false);
      props.setProgress(100);
    } catch (error) {
      console.error("Error fetching trending news:", error);
      setLoading(false);
      props.setProgress(100);
    }
  };

  // Load more news for infinite scroll
  const fetchMoreNews = async () => {
    if (!nextPage || loading) return;

    setLoading(true);
    try {
      let url = `https://newsdata.io/api/1/news?apikey=${props.apiKey}&language=en&category=world&page=${nextPage}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      
      setTrendingNews(prev => [...prev, ...(parsedData.results || [])]);
      setNextPage(parsedData.nextPage);
    } catch (error) {
      console.error("Error fetching more news:", error);
    }
    setLoading(false);
  };

  // Handle scroll for infinite loading
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) return;
    fetchMoreNews();
  };

  useEffect(() => {
    fetchTrendingNews();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line
  }, []);

  const handleExploreClick = () => {
    navigate('/news');
  };

  return (
    <div className="intro-container mt-5">
      {/* Glowing background elements */}
      <div className="glowing-background ">
        <div className="glowing-circle blue-circle"></div>
        <div className="glowing-circle purple-circle"></div>
      </div>

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

        {/* CTA Button */}
        <div className="cta-button-container">
          <button 
            onClick={handleExploreClick}
            className="explore-button"
          >
            <span className="button-text">Explore Latest News</span>
          </button>
        </div>

        {/* Trending News Section */}
        <div className="trending-news-section">
        <h2 className="trending-title">Trending Globally</h2>
        
        {loading && trendingNews.length === 0 ? (
          <div className="news-loading-container">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="news-card-skeleton"></div>
            ))}
          </div>
        ) : (
          <>
            <div className="container" style={{ paddingTop: '10px' }}>
          <div className="row justify-content-center">
            {!loading &&
              trendingNews.map((element, index) => {
                return (
                  <div key={index} className="col-md-4 mb-4 d-flex">
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imageUrl={element.image_url}
                      newsUrl={element.link}
                      author={element.creator ? element.creator[0] : 'Unknown'}
                      date={element.pubDate}
                      source={element.source_id}
                    />
                  </div>
                );
              })}
          </div>
        </div>
            {loading && trendingNews.length > 0 && (
              <div className="loading-more-container">
                <div className="loading-spinner"></div>
              </div>
            )}
          </>
        )}
      </div>

      </div>

      <style jsx>{`
        /* Base styles */
        .intro-container {
          position: relative;
          overflow: hidden;
          width: 100%;
        }

        .glowing-background {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .glowing-circle {
          position: absolute;
          border-radius: 50%;
          filter: blur(48px);
          opacity: 0.2;
          animation: pulse 4s infinite ease-in-out;
        }

        .blue-circle {
          width: 256px;
          height: 256px;
          background: #3b82f6;
          top: -80px;
          left: -80px;
        }

        .purple-circle {
          width: 256px;
          height: 256px;
          background: #8b5cf6;
          bottom: -80px;
          right: -80px;
          animation-delay: 1s;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }

        .intro-content {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }

        /* CTA Button styles */
        .cta-button-container {
          margin-top: 2rem;
          text-align: center;
        }

        .explore-button {
          position: relative;
          padding: 12px 32px;
          background: linear-gradient(to right, #3b82f6, #8b5cf6);
          color: white;
          font-weight: 500;
          font-size: 1rem;
          border-radius: 50px;
          border: none;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .explore-button:hover {
          background: linear-gradient(to right, #2563eb, #7c3aed);
          box-shadow: 0 10px 15px rgba(59, 130, 246, 0.3);
          transform: translateY(-2px);
        }

        /* News section styles */
        .trending-news-section {
          margin-top: 4rem;
          padding: 0 ;
        //   max-width: 1400px;
        //   margin-left: auto;
        //   margin-right: auto;
        // }

        .trending-title {
          font-size: 2rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 2rem;
          text-align: center;
          position: relative;
          padding-bottom: 1rem;
        }

        .trending-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(to right, #3b82f6, #8b5cf6);
          border-radius: 2px;
        }

        .news-grid-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
          padding: 1rem;
        }

        .news-item-wrapper {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .news-item-wrapper:hover {
          transform: translateY(-5px);
        }

        .news-loading-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
          padding: 1rem;
        }

        .news-card-skeleton {
          background: #f5f5f5;
          border-radius: 12px;
          overflow: hidden;
          height: 400px;
          position: relative;
          overflow: hidden;
        }

        .news-card-skeleton::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.6),
            transparent
          );
          animation: shimmer 1.5s infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .loading-more-container {
          display: flex;
          justify-content: center;
          padding: 2rem;
        }

        .loading-spinner {
          width: 50px;
          height: 50px;
          border: 5px solid #f3f3f3;
          border-top: 5px solid #3b82f6;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .news-grid-container,
          .news-loading-container {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 1.5rem;
          }
          
          .trending-title {
            font-size: 1.75rem;
          }
        }

        @media (max-width: 480px) {
          .news-grid-container,
          .news-loading-container {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          
          .trending-title {
            font-size: 1.5rem;
          }
        }
      

      `}</style>
    </div>
  );
};

export default IntroSection;