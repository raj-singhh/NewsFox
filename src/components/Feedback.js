import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './FeedbackForm.css'; // We'll create this CSS file

const Feedback = (props) => {
  const [feedback, setFeedback] = useState({
    rating: 0,
    comments: '',
    email: ''
  });
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleRatingClick = (rating) => {
    setFeedback(prev => ({ ...prev, rating }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (feedback.rating === 0) {
      setSubmitError('Please provide a rating');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    const formData = new FormData();
    formData.append('access_key', props.web3formKey); // Replace with your key
    formData.append('rating', feedback.rating);
    formData.append('comments', feedback.comments);
    formData.append('email', feedback.email);
    formData.append('subject', 'New Feedback Submission From NewsFox');
    formData.append('botcheck', ''); // For spam protection

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setFeedback({ rating: 0, comments: '', email: '' });
      } else {
        setSubmitError(data.message || 'Submission failed. Please try again.');
      }
    } catch (error) {
      setSubmitError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div 
        className="feedback-container " style={{ marginTop: '6rem' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="feedback-success">
          <motion.h2
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Thank You for Your Feedback!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            We appreciate you taking the time to help us improve NewsFox.
          </motion.p>
          <motion.button 
            onClick={() => setIsSubmitted(false)}
            className="submit-button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Submit Another Feedback
          </motion.button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="feedback-container " style={{ marginTop: '6rem' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="feedback-header">
        <h1>Share Your Feedback</h1>
        <p>We'd love to hear your thoughts about NewsFox</p>
      </div>

      <motion.form 
        onSubmit={handleSubmit}
        className="feedback-form"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="form-group">
          <label>How would you rate your experience?</label>
          <div className="rating-stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.span
                key={star}
                className={`star ${star <= (hoverRating || feedback.rating) ? 'filled' : ''}`}
                onClick={() => handleRatingClick(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                ★
              </motion.span>
            ))}
          </div>
          {submitError && feedback.rating === 0 && (
            <motion.p 
              className="error-message"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {submitError}
            </motion.p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="comments">Your Comments</label>
          <motion.textarea
            id="comments"
            name="comments"
            rows="5"
            value={feedback.comments}
            onChange={handleChange}
            placeholder="What did you like or how can we improve?"
            whileFocus={{ boxShadow: '0 0 0 2px rgba(70, 130, 180, 0.5)' }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email (optional)</label>
          <motion.input
            type="email"
            id="email"
            name="email"
            value={feedback.email}
            onChange={handleChange}
            placeholder="If you'd like us to follow up"
            whileFocus={{ boxShadow: '0 0 0 2px rgba(70, 130, 180, 0.5)' }}
          />
        </div>

        <input type="hidden" name="redirect" value="https://yourdomain.com/thank-you" />

        {submitError && feedback.rating > 0 && (
          <motion.p 
            className="error-message"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {submitError}
          </motion.p>
        )}

        <motion.button 
          type="submit" 
          className="submit-button"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="spinner"></span>
              Submitting...
            </>
          ) : (
            'Submit Feedback'
          )}
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Feedback;