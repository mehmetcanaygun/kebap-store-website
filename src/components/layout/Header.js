import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Header = ({ bgSrc, title, breadcrumbs }) => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <header
      className="page-header"
      style={{
        background: `url(${bgSrc}) no-repeat center center/cover`,
      }}
      data-aos="fade-down"
    >
      <div className="overlay">
        <h1 className="page-header__title">{title}</h1>
        <div
          className="page-header__breadcrumbs"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          {breadcrumbs.map((b, index) => (
            <span key={index}>
              <Link to={b[0]}>{b[1]}</Link>
              {index !== breadcrumbs.length - 1 && (
                <i className="fas fa-angle-right"></i>
              )}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
