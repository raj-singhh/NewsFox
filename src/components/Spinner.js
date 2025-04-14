import React from 'react';

const Spinner = () => {
  return (
    <div className="bounce-spinner">
      <div className="bounce-dot"></div>
      <div className="bounce-dot"></div>
      <div className="bounce-dot"></div>
      <style jsx>{`
        .bounce-spinner {
          display: flex;
          justify-content: center;
          gap: 8px;
          padding: 2rem;
        }
        .bounce-dot {
          width: 16px;
          height: 16px;
          background: #3b82f6;
          border-radius: 50%;
          animation: bounce 1.4s infinite ease-in-out;
        }
        .bounce-dot:nth-child(1) { animation-delay: -0.32s; }
        .bounce-dot:nth-child(2) { animation-delay: -0.16s; }
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
};
export default Spinner;