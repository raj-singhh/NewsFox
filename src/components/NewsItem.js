import React from "react";
import preview from './preview-not-available.png';

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="news-card-container">
      <article className="news-card">
        <div className="card-media">
          <img
            src={!imageUrl ? preview : imageUrl}
            alt={title || "News preview"}
            className="card-image"
          />
          <div className="media-overlay"></div>
          <span className="source-tag">{source}</span>
        </div>

        <div className="card-body">
          <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <p className="card-excerpt">{description}</p>
          </div>

          <div className="card-footer">
            <div className="meta-info">
              <span className="author-name">{author || "Unknown Author"}</span>
              <time className="publish-date">{formattedDate}</time>
            </div>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="action-button">
              Read More
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </article>

      <style jsx>{`
        .news-card-container {
          margin-bottom: 2.5rem;
          height: 100%;
        }
        
        .news-card {
          height: 100%;
          display: flex;
          flex-direction: column;
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.04);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          border: 1px solid rgba(0, 0, 0, 0.08);
        }
        
        .news-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
          border-color: rgba(0, 0, 0, 0.12);
        }
        
        .card-media {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        
        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .media-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.4) 100%);
          opacity: 0.8;
        }
        
        .news-card:hover .card-image {
          transform: scale(1.05);
        }
        
        .source-tag {
          position: absolute;
          top: 15px;
          right: 15px;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 500;
          backdrop-filter: blur(4px);
        }
        
        .card-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        
        .card-content {
          margin-bottom: 1.5rem;
          flex: 1;
        }
        
        .card-title {
          font-size: 1.25rem;
          line-height: 1.4;
          margin: 0 0 0.75rem 0;
          color: #111;
          font-weight: 700;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .card-excerpt {
          color: #444;
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
        }
        
        .meta-info {
          display: flex;
          flex-direction: column;
        }
        
        .author-name {
          font-size: 0.85rem;
          color: #666;
          font-weight: 500;
        }
        
        .publish-date {
          font-size: 0.75rem;
          color: #999;
        }
        
        .action-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0.5rem 1rem;
          background: transparent;
          color: #0d6efd;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          border: 1px solid rgba(13, 110, 253, 0.3);
        }
        
        .action-button:hover {
          background: rgba(13, 110, 253, 0.05);
          color: #0b5ed7;
          border-color: rgba(13, 110, 253, 0.5);
          transform: translateX(4px);
        }
        
        .action-button svg {
          transition: transform 0.3s ease;
        }
        
        .action-button:hover svg {
          transform: translateX(3px);
        }

        @media (max-width: 768px) {
          .news-card-container {
            margin-bottom: 2rem;
          }
          
          .card-media {
            height: 180px;
          }
          
          .card-body {
            padding: 1.25rem;
          }
          
          .card-title {
            font-size: 1.1rem;
          }
          
          .action-button {
            padding: 0.5rem 0.8rem;
            font-size: 0.85rem;
          }
        }
      `}</style>
    </div>
  );
};

export default NewsItem;