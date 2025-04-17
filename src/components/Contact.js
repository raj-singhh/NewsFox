import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './ContactForm.css';
import contactImage from './contact-pic.jpeg';

export default function Contact(props) {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    // Check if all required fields are filled
    const isValid = formValues.name.trim() && 
                    formValues.email.trim() && 
                    formValues.subject.trim() && 
                    formValues.message.trim();
    setFormValid(isValid);
  }, [formValues]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");
    const formData = new FormData();
    
    Object.entries(formValues).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });
    formData.append("access_key", props.web3formKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        setFormValues({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setResult(data.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      setResult("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setResult(""), 5000);
    }
  };

  return (
    <div className="contact-container mt-5 pt-5">
      <div className="contact-layout">
        {/* Left side with image and text */}
        <motion.div 
          className="contact-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="contact-content">
            <h1>Contact Us</h1>
            <p>We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!</p>
            <p>We are committed to providing you with the best support and answering all your queries promptly.</p>
            <div className="contact-details">
              <p><strong>Email:</strong> rajsinghh314@gmail.com</p>
            </div>
          </div>
          <div className="contact-image-container">
            <img 
              src={contactImage} 
              alt="Contact us" 
              className="contact-image"
            />
          </div>
        </motion.div>

        {/* Right side with form */}
        <motion.form
          onSubmit={onSubmit}
          className="contact-form"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="form-group">
            <label>Your Name</label>
            <motion.input
              type="text"
              name="name"
              required
              value={formValues.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              className="form-input"
              whileFocus={{ boxShadow: "0 0 0 2px rgba(70, 130, 180, 0.5)" }}
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <motion.input
              type="email"
              name="email"
              required
              value={formValues.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="form-input"
              whileFocus={{ boxShadow: "0 0 0 2px rgba(70, 130, 180, 0.5)" }}
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <motion.input
              type="tel"
              name="phone"
              value={formValues.phone}
              onChange={handleInputChange}
              placeholder="Your 10-digit number"
              className="form-input"
              pattern="[0-9]{10}"
              whileFocus={{ boxShadow: "0 0 0 2px rgba(70, 130, 180, 0.5)" }}
            />
          </div>

          <div className="form-group">
            <label>Subject</label>
            <motion.input
              type="text"
              name="subject"
              required
              value={formValues.subject}
              onChange={handleInputChange}
              placeholder="What's this about?"
              className="form-input"
              whileFocus={{ boxShadow: "0 0 0 2px rgba(70, 130, 180, 0.5)" }}
            />
          </div>

          <div className="form-group">
            <label>Your Message</label>
            <motion.textarea
              name="message"
              required
              value={formValues.message}
              onChange={handleInputChange}
              rows="4"
              placeholder="Type your message here..."
              className="form-textarea"
              whileFocus={{ boxShadow: "0 0 0 2px rgba(70, 130, 180, 0.5)" }}
            />
          </div>

          <motion.button
            type="submit"
            className={`submit-button ${!formValid ? 'disabled' : ''} `} 
            whileHover={formValid ? { scale: 1.02 } : {}}
            whileTap={formValid ? { scale: 0.98 } : {}}
            disabled={!formValid || isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="spinner"></span>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </motion.button>

          {result && (
            <motion.div
              className={`result-message ${result.includes("Success") ? "success" : "error"}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              {result.startsWith("Form Submitted") ? "✓ " + result : "✗ " + result}
            </motion.div>
          )}
        </motion.form>
      </div>
    </div>
  );
}