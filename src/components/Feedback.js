import React, { useState } from 'react';
import './ContactFeedback.css';
const Feedback = () => {
  const [feedback, setFeedback] = useState({
    rating: 0,
    comments: '',
    email: ''
  });
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRatingClick = (rating) => {
    setFeedback(prev => ({ ...prev, rating }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, you would send this to your backend
    console.log('Feedback submitted:', feedback);
  };

  if (isSubmitted) {
    return (
      <div className="feedback-container mt-5">
        <div className="feedback-success">
          <h2>Thank You for Your Feedback!</h2>
          <p>We appreciate you taking the time to help us improve NewsFox.</p>
          <button onClick={() => setIsSubmitted(false)} className="submit-btn">
            Submit Another Feedback
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="feedback-container mt-5">
      <div className="feedback-header">
        <h1>Share Your Feedback</h1>
        <p>We'd love to hear your thoughts about NewsFox</p>
      </div>

      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="form-group">
          <label>How would you rate your experience?</label>
          <div className="rating-stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${star <= (hoverRating || feedback.rating) ? 'filled' : ''}`}
                onClick={() => handleRatingClick(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="comments">Your Comments</label>
          <textarea
            id="comments"
            name="comments"
            rows="5"
            value={feedback.comments}
            onChange={handleChange}
            placeholder="What did you like or how can we improve?"
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email (optional)</label>
          <input
            type="email"
            id="email"
            name="email"
            value={feedback.email}
            onChange={handleChange}
            placeholder="If you'd like us to follow up"
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default Feedback;