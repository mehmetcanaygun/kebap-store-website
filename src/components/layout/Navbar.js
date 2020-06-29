import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import SiteContext from "../../context/siteContext";

const Navbar = () => {
  const siteContext = useContext(SiteContext);

  const [sidebarToggled, setSidebarToggled] = useState(false);
  const [navTopVisible, setNavTopVisible] = useState(true);

  // Hide navigation top on scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line
  }, []);

  const handleScroll = () => {
    let scrollTop = window.pageYOffset;

    if (scrollTop > 200) {
      setNavTopVisible(false);
    } else {
      setNavTopVisible(true);
    }
  };

  // Disable scroll bar when sidebar is toggled
  if (sidebarToggled) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "visible";
  }

  // Catch the clicked element, and add toggled class to the sublist
  const toggleSublist = (el) => {
    let sublist;
    let icon;

    if (el.classList.contains("si")) {
      // Icon is clicked & Find sublist
      sublist = el.parentElement.parentElement.nextElementSibling;
      icon = el;
    } else {
      // Button is clicked & Find sublist
      sublist = el.parentElement.nextElementSibling;
      icon = el.children[0];
    }

    // Rotate sublist icon
    icon.classList.toggle("toggled");

    // Toggle sublist
    if (sublist.getAttribute("data-toggled") === "false") {
      sublist.setAttribute("data-toggled", "true");
      sublist.classList.add("toggled");
    } else {
      sublist.setAttribute("data-toggled", "false");
      sublist.classList.remove("toggled");
    }
  };

  return (
    <nav className={navTopVisible ? "navigation" : "navigation top-hidden"}>
      <div className="navigation__top">
        <a href="tel:+90123456789" className="navigation__top__phone">
          <i className="fas fa-phone-alt"></i> 0123 456 789
        </a>
        <ul className="navigation__top__sm-container">
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
      <div className="navigation__bottom">
        <div className="navigation__bottom__logo">
          <img
            src={require("../../assets/images/logo.png")}
            alt="Can Kebap Logo"
          />
        </div>
        <ul className="navigation__bottom__nav">
          <li className="navigation__bottom__nav__item">
            <Link
              to="/"
              onClick={() => {
                siteContext.setLoading(true);
              }}
            >
              Anasayfa
            </Link>
          </li>
          <li className="navigation__bottom__nav__item">
            <Link
              to="/hakkimizda"
              onClick={() => {
                siteContext.setLoading(true);
              }}
            >
              Hakkımızda
            </Link>
          </li>
          <li className="navigation__bottom__nav__item">
            <Link
              to="/menu"
              onClick={() => {
                siteContext.setLoading(true);
              }}
            >
              Menü
            </Link>
            <ul className="navigation__bottom__nav__item__sublist">
              <li>
                <Link
                  to="/kebap"
                  onClick={() => {
                    siteContext.setLoading(true);
                  }}
                >
                  Kebap
                </Link>
              </li>
              <li>
                <Link
                  to="/pide"
                  onClick={() => {
                    siteContext.setLoading(true);
                  }}
                >
                  Pide
                </Link>
              </li>
              <li>
                <Link
                  to="/izgara"
                  onClick={() => {
                    siteContext.setLoading(true);
                  }}
                >
                  Izgara
                </Link>
              </li>
              <li>
                <Link
                  to="/tatli"
                  onClick={() => {
                    siteContext.setLoading(true);
                  }}
                >
                  Tatlı
                </Link>
              </li>
            </ul>
          </li>
          <li className="navigation__bottom__nav__item">
            <Link
              to="/iletisim"
              onClick={() => {
                siteContext.setLoading(true);
              }}
            >
              İletişim
            </Link>
          </li>
        </ul>
        <button
          className={
            sidebarToggled
              ? "navigation__bottom__menu-btn toggled"
              : "navigation__bottom__menu-btn"
          }
          onClick={() => {
            setSidebarToggled(!sidebarToggled);
          }}
        >
          <span className="top-line"></span>
          <span className="middle-line"></span>
          <span className="bottom-line"></span>
        </button>
        <ul
          className={
            sidebarToggled
              ? "navigation__bottom__sidebar toggled"
              : "navigation__bottom__sidebar"
          }
        >
          <li className="navigation__bottom__sidebar__item">
            <Link
              to="/"
              onClick={() => {
                setSidebarToggled(false);
                siteContext.setLoading(true);
              }}
            >
              Anasayfa
            </Link>
          </li>
          <li className="navigation__bottom__sidebar__item">
            <Link
              to="/hakkimizda"
              onClick={() => {
                setSidebarToggled(false);
                siteContext.setLoading(true);
              }}
            >
              Hakkımızda
            </Link>
          </li>
          <li className="navigation__bottom__sidebar__item with-sublist">
            <div>
              <Link
                to="/menu"
                onClick={() => {
                  setSidebarToggled(false);
                  siteContext.setLoading(true);
                }}
              >
                Menü
              </Link>
              <button
                className="sb"
                onClick={(e) => {
                  toggleSublist(e.target);
                }}
              >
                <i
                  className="fas fa-chevron-down si" // sublist icon
                ></i>
              </button>
            </div>
            <ul
              data-toggled="false"
              className="navigation__bottom__sidebar__item__sublist"
            >
              <li>
                <Link
                  to="/kebap"
                  onClick={() => {
                    setSidebarToggled(false);
                    siteContext.setLoading(true);
                  }}
                >
                  Kepab
                </Link>
              </li>
              <li>
                <Link
                  to="/pide"
                  onClick={() => {
                    setSidebarToggled(false);
                    siteContext.setLoading(true);
                  }}
                >
                  Pide
                </Link>
              </li>
              <li>
                <Link
                  to="/izgara"
                  onClick={() => {
                    setSidebarToggled(false);
                    siteContext.setLoading(true);
                  }}
                >
                  Izgara
                </Link>
              </li>
              <li>
                <Link
                  to="/tatli"
                  onClick={() => {
                    setSidebarToggled(false);
                    siteContext.setLoading(true);
                  }}
                >
                  Tatlı
                </Link>
              </li>
            </ul>
          </li>
          <li className="navigation__bottom__sidebar__item">
            <Link
              to="/iletisim"
              onClick={() => {
                setSidebarToggled(false);
                siteContext.setLoading(true);
              }}
            >
              İletişim
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
