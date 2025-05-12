import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div id="contact">
      <a><h2 className="contact-title">Let's Connect!</h2></a>
      <form
        action="https://formspree.io/f/xblozrbe"
        method="POST"
        className="contact-form"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="4" required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
