import React, { useState } from 'react';
import './ContactFeedback.css';
const ReportIssue = () => {
  const [issue, setIssue] = useState({
    type: 'bug',
    description: '',
    url: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIssue(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    // In a real app, you would send this to your backend
    console.log('Issue reported:', issue);
  };

  if (isSubmitted) {
    return (
      <div className="report-container mt-5">
        <div className="report-success">
          <h2>Issue Reported Successfully</h2>
          <p>We've received your report and will look into it shortly.</p>
          <p>Reference ID: #{Math.floor(Math.random() * 1000000)}</p>
          <button 
            onClick={() => {
              setIssue({
                type: 'bug',
                description: '',
                url: '',
                email: ''
              });
              setIsSubmitted(false);
            }} 
            className="submit-btn"
          >
            Report Another Issue
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="report-container mt-5">
      <div className="report-header">
        <h1>Report an Issue</h1>
        <p>Help us improve NewsFox by reporting problems</p>
      </div>

      <form onSubmit={handleSubmit} className="report-form">
        <div className="form-group">
          <label htmlFor="type">Issue Type</label>
          <select
            id="type"
            name="type"
            value={issue.type}
            onChange={handleChange}
          >
            <option value="bug">Bug</option>
            <option value="feature">Feature Request</option>
            <option value="content">Incorrect Content</option>
            <option value="ui">UI/UX Problem</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description *</label>
          <textarea
            id="description"
            name="description"
            rows="5"
            value={issue.description}
            onChange={handleChange}
            placeholder="Please describe the issue in detail..."
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="url">Page URL (if applicable)</label>
          <input
            type="url"
            id="url"
            name="url"
            value={issue.url}
            onChange={handleChange}
            placeholder="https://newsfox.com/..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email (optional)</label>
          <input
            type="email"
            id="email"
            name="email"
            value={issue.email}
            onChange={handleChange}
            placeholder="If you'd like us to follow up"
          />
        </div>

        <button 
          type="submit" 
          className="submit-btn"
          disabled={isSubmitting || !issue.description}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Report'}
        </button>
      </form>
    </div>
  );
};

export default ReportIssue;