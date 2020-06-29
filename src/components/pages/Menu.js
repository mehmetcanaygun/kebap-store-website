import React, { useEffect, useContext } from "react";
import SiteContext from "../../context/siteContext";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

import Header from "../layout/Header";

const Menu = () => {
  const siteContext = useContext(SiteContext);

  useEffect(() => {
    document.title = "Can Kebap - Menü";

    window.scrollTo(0, 0);

    Aos.init({ duration: 1000 });

    siteContext.setLoading(false);
  }, []);

  return (
    <section className="menu-page">
      <Header
        bgSrc={require("../../assets/images/menu-header-bg.jpg")}
        title={"Menü"}
        breadcrumbs={[
          ["/", "Anasayfa"],
          ["/menu", "Menü"],
        ]}
      />

      <div className="page-container">
        <h2 className="page-title" data-aos="fade-right">
          Çeşitlerimiz
        </h2>
        <div className="page-paragraph" data-aos="fade-right">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          dolores inventore vel et fugit distinctio saepe, deserunt voluptas
          dicta ipsum, dolorem cupiditate autem ratione explicabo iure eius
          perferendis odit omnis eveniet quas molestias laboriosam nihil modi
          tempore. Cupiditate, debitis autem.
        </div>

        <div className="menu-cards-container">
          <div className="card kebap-card" data-aos="zoom-in-up">
            <Link to="/kebap">Kebap</Link>
          </div>
          <div
            className="card pide-card"
            data-aos="zoom-in-up"
            data-aos-delay="200"
          >
            <Link to="/pide">Pide</Link>
          </div>
          <div
            className="card izgara-card"
            data-aos="zoom-in-up"
            data-aos-delay="400"
          >
            <Link to="/izgara">Izgara</Link>
          </div>
          <div
            className="card tatli-card"
            data-aos="zoom-in-up"
            data-aos-delay="600"
          >
            <Link to="/tatli">Tatlı</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
