import React, { useState } from "react";
import "./Contact.css";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
  });

  const recipientEmail = "ysankarmukesh@gmail.com"; // Replace with your recipient's email address

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleClick = () => {
    const subject = encodeURIComponent(formData.subject);
    const message = encodeURIComponent(formData.message);
    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${message}`;
    window.location.href = mailtoLink;

    setFormData({ subject: "", message: "" });
   
  };

  // Check if subject or message is empty
  const isDisabled = formData.subject.trim() === "" || formData.message.trim() === "";

  return (
    <section id="Contact" className="contact--section">
    
        <div>
          <p className="sub--title">Get In Touch</p>
          <h2>Contact Me</h2>
          <p className="text-lg">
            Have a question or want to get in touch? Feel free to reach out using the form below.
          </p>
        </div>
  
      
        <form className="contact--form--container">
          <label htmlFor="subject" className="contact--label">
            <span className="text-md">Subject</span>
            <textarea
              className="contact--input text-md"
              id="subject"
              rows="1"
              placeholder="Type your subject here..."
              name="subject"
              required
              onChange={handleChange}
              value={formData.subject}
            />
          </label>

          <label htmlFor="message" className="contact--label">
            <span className="text-md">Message</span>
            <textarea
              className="contact--input text-md"
              id="message"
              rows="8"
              placeholder="Type your message here..."
              name="message"
              required
              onChange={handleChange}
              value={formData.message}
            />
          </label>
          <div>
            <button
              className="btn btn-primary contact--form--btn"
              type="button"
              onClick={handleClick}
              disabled={isDisabled}
            >
              Submit
            </button>
          </div>
        </form>
     
    </section>
  );
}
