import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ReportIssue.css'; // We'll create this CSS file

const ReportIssue = (props) => {
  const [issue, setIssue] = useState({
    type: 'bug',
    description: '',
    url: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIssue(prev => ({ ...prev, [name]: value }));
    setSubmitError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!issue.description) {
      setSubmitError('Please provide a description of the issue');
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('access_key', props.web3formKey); // Replace with your key
    formData.append('type', issue.type);
    formData.append('description', issue.description);
    formData.append('url', issue.url);
    formData.append('email', issue.email);
    formData.append('subject', `New Issue Report: ${issue.type} from NewsFox`);
    formData.append('botcheck', ''); // For spam protection

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setIssue({
          type: 'bug',
          description: '',
          url: '',
          email: ''
        });
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
        className="report-container" style={{ marginTop: '6rem' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="report-success">
          <motion.h2
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Issue Reported Successfully
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            We've received your report and will look into it shortly.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="reference-id"
          >
            Reference ID: #{Math.floor(Math.random() * 1000000)}
          </motion.p>
          <motion.button 
            onClick={() => setIsSubmitted(false)}
            className="submit-button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Report Another Issue
          </motion.button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="report-container" style={{ marginTop: '6rem' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="report-header">
        <h1>Report an Issue</h1>
        <p>Help us improve NewsFox by reporting problems</p>
      </div>

      <motion.form 
        onSubmit={handleSubmit}
        className="report-form"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="form-group">
          <label htmlFor="type">Issue Type</label>
          <motion.select
            id="type"
            name="type"
            value={issue.type}
            onChange={handleChange}
            whileFocus={{ boxShadow: '0 0 0 2px rgba(70, 130, 180, 0.5)' }}
          >
            <option value="bug">Bug</option>
            <option value="feature">Feature Request</option>
            <option value="content">Incorrect Content</option>
            <option value="ui">UI/UX Problem</option>
            <option value="other">Other</option>
          </motion.select>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description *</label>
          <motion.textarea
            id="description"
            name="description"
            rows="5"
            value={issue.description}
            onChange={handleChange}
            placeholder="Please describe the issue in detail..."
            required
            whileFocus={{ boxShadow: '0 0 0 2px rgba(70, 130, 180, 0.5)' }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="url">Page URL (if applicable)</label>
          <motion.input
            type="url"
            id="url"
            name="url"
            value={issue.url}
            onChange={handleChange}
            placeholder="https://newsfox.com/..."
            whileFocus={{ boxShadow: '0 0 0 2px rgba(70, 130, 180, 0.5)' }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email (optional)</label>
          <motion.input
            type="email"
            id="email"
            name="email"
            value={issue.email}
            onChange={handleChange}
            placeholder="If you'd like us to follow up"
            whileFocus={{ boxShadow: '0 0 0 2px rgba(70, 130, 180, 0.5)' }}
          />
        </div>


        {submitError && (
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
          disabled={isSubmitting || !issue.description}
        >
          {isSubmitting ? (
            <>
              <span className="spinner"></span>
              Submitting...
            </>
          ) : (
            'Submit Report'
          )}
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default ReportIssue;