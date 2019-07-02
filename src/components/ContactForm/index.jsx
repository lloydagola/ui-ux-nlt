import React from "react";
import "./ContactForm.css";

const ContactForm = () => (
  <section className="contact-us">
    <div className="contact-info">
      <h1>Email</h1>
      <p>info@nairobilawtutors.co.ke</p>
      <h1>Phone</h1>
      <p>+254 202215253/4/5</p>
      <h1>Cell</h1>
      <p>+254 713937282</p>
      <h1>Address</h1>
      <p>3rd floor, Suite C2, Ojijo Plaza, Ojijo Road</p>
      <p>P.O.Box 75821-00200, Nairobi</p>
    </div>
    <div className="email">
      <h1>get in touch</h1>
      <input type="text" placeholder="name" />
      <input type="email" placeholder="email" />
      <input type="text" placeholder="subject" />
      <textarea
        name="comment"
        form="usrform"
        placeholder="type your message here"
      />
      <div id="form-btn" className="flat-button-yellow">
        SEND
      </div>
    </div>
  </section>
);

export default ContactForm;
