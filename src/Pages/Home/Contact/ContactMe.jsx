import React, { useState } from "react";
import "./Contact.css";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    topic: "",
    message: "",
    termsAccepted: false,
  });
  const [formValid, setFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });

    // Check if all required fields are filled
    const isFormValid =
      formData.firstName !== "" &&
      formData.lastName !== "" &&
      formData.email !== "" &&
      formData.phoneNumber !== "" &&
      formData.topic !== "" &&
      formData.message !== "" &&
      formData.termsAccepted;
    setFormValid(isFormValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your logic to handle form submission
    console.log("Form Data:", formData);

    // Show alert for successful submission
    alert("Form submitted successfully!");

    // Reset the form after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      topic: "",
      message: "",
      termsAccepted: false,
    });
    setFormValid(false); // Reset form validity
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Have a question or want to get in touch? Feel free to reach out using the form below.
        </p>
      </div>
      <form className="contact--form--container" onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="firstName"
              id="first-name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="lastName"
              id="last-name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="tel"
              className="contact--input text-md"
              name="phoneNumber"
              id="phone-number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <label htmlFor="choose-topic" className="contact--label">
          <span className="text-md">Choose a Topic</span>
          <select
            id="choose-topic"
            className="contact--input text-md"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            required
          >
            <option value="">Select One...</option>
            <option value="Item 1">Item 1</option>
            <option value="Item 2">Item 2</option>
            <option value="Item 3">Item 3</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message here..."
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="checkbox" className="checkbox--label">
          <input
            type="checkbox"
            required
            name="termsAccepted"
            id="checkbox"
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn"  type="submit"
          disabled={!formValid}>Submit</button>
        </div>
      </form>
    </section>
  );
}
