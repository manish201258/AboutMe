import React, { useState } from "react";
import { toast } from 'react-toastify';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading spinner
    try {
      const response = await fetch(
        "https://portfoliowebsitebackend-e714.onrender.com/api/auth/contactData",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.status === 201) {
        toast("Thanks For Feedback");
        setFormData({
          username: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.log("Client-side form error");
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };

  const formInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div className="contact">
        <div className="d-flex flex-column align-items-center mb-5">
          <p className="text-danger m-0 fs-2 fw-bold">Contact Me</p>
          <p className=".text-body-emphasis">Get in touch</p>
        </div>
        <div className="contact-data d-flex justify-content-center gap-5 flex-wrap">
          {/* Contact Details */}
          <div className="contact-details d-flex flex-column gap-5 ">
            <span className="sp1">
              <li className="fw-bold fs-5">Contact Me</li>
              <li className="text-secondary">+91 9351814612</li>
            </span>
            <span className="sp2">
              <li className="fw-bold fs-5">Email</li>
              <li className="text-secondary">manish201258@gmail.com</li>
            </span>
            <span className="sp3">
              <li className="fw-bold fs-5">Location</li>
              <li className="text-secondary">Jaipur, Rajasthan, India</li>
            </span>
          </div>
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-input">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="username"
                value={formData.username}
                onChange={formInput}
                required
                minLength={4}
              />
            </div>

            <div className="form-input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={formInput}
                required
                pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$"
                size="30"
              />
            </div>

            <div className="form-input">
              <label htmlFor="message">Message</label>
              <textarea
                className="text-white"
                id="message"
                name="message"
                value={formData.message}
                onChange={formInput}
                required
                minLength="12"
              ></textarea>
            </div>

            <div>
                {loading ? (
                  <div className="d-flex align-items-center  gap-3">
                  <button type="submit" className="btn btn-danger" disabled={loading}>
                  <li className="msg-send">Send Message</li>
              </button>
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  </div>
                ) : ( 
                  <button type="submit" className="btn btn-danger" disabled={loading}>
                  <li className="msg-send">Send Message</li>
              </button>
                )}
              
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
