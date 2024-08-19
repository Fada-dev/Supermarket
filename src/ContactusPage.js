import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setFormErrors({
      ...formErrors,
      [name]: ''
    });
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (formData.name.trim() === '') {
      setFormErrors((errors) => ({ ...errors, name: 'Name is required' }));
      valid = false;
    }

    if (!validateEmail(formData.email)) {
      setFormErrors((errors) => ({ ...errors, email: 'Invalid email address' }));
      valid = false;
    }

    if (formData.message.trim() === '') {
      setFormErrors((errors) => ({ ...errors, message: 'Message is required' }));
      valid = false;
    }

    if (valid) {
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }
  };

  return (
    <div className="contact-us">
      <div className="contact-banner">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-content">
        <div className="contact-image">
          <img src="https://cdn.pixabay.com/photo/2024/03/26/11/57/market-8656652_640.jpg" alt="K1 Supermarket" />
          <div className="overlay"></div>
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p><strong>Address:</strong> 123 Supermarket Street, Grocery City, Accra</p>
            <p><strong>Phone:</strong> (233) 591 436 117</p>
            <p><strong>Email:</strong> k1supermarket@gmail.com</p>
          </div>
        </div>
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {formErrors.name && <span className="error">{formErrors.name}</span>}
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {formErrors.email && <span className="error">{formErrors.email}</span>}
            </label>
            <label>
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              {formErrors.message && <span className="error">{formErrors.message}</span>}
            </label>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <div className="map">
        <h2>Find Us</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d126980.4013508024!2d-0.20714!3d5.5602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgh!4v1681991624111!5m2!1sen!2sgh"
          allowFullScreen=""
          loading="lazy"
          title="K1 Supermarket Location"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;