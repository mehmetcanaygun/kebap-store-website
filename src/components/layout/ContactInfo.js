import React from "react";

const ContactInfo = () => {
  return (
    <div className="form-container__info" data-aos="fade-right">
      <p>
        <i className="fas fa-map-marker-alt"></i> ABC Mahallesi, DEF Sokak, No:
        1, Merkez / ZONGULDAK
      </p>
      <p>
        <i className="fas fa-phone-alt"></i> 0123 456 789
      </p>
      <p>
        <i className="fas fa-envelope"></i> info@cankebap.com
      </p>
      <ul className="sm-list">
        <li>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
