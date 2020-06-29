import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-top__logo">
          <img
            src={require("../../assets/images/logo.png")}
            alt="Can Kebap Logo"
          />
        </div>
        <ul className="footer-top__nav">
          <li>
            <Link to="/">Anasayfa</Link>
          </li>
          <li>
            <Link to="/hakkimizda">Hakkımızda</Link>
          </li>
          <li>
            <Link to="/menu">Menü</Link>
          </li>
          <li>
            <Link to="/iletisim">İletişim</Link>
          </li>
        </ul>
        <div className="footer-top__contact">
          <p>
            <i className="fas fa-map-marker-alt"></i> ABC Mahallesi, DEF Sokak,
            No: 1, Merkez / ZONGULDAK
          </p>
          <p>
            <i className="fas fa-phone-alt"></i> 0123 456 789
          </p>
          <p>
            <i className="fas fa-envelope"></i> info@cankebap.com
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright &copy; 2020</p>
        <p>
          Designed by{" "}
          <a
            href="https://github.com/mehmetcanaygun"
            target="_blank"
            rel="noopener noreferrer"
          >
            MCA
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
