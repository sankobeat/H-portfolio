import React from "react";
import axios from "axios";
import { useState } from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container container">
        <div className="container-header">
          <h1>contact me</h1>
        </div>
        <div className="contact-content">
          <div className="left">
            <p>feel free to contact me or hire me</p>
          </div>
          <span className="hr"></span>
          <div className="right">the form here</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
