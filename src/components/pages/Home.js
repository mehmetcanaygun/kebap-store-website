import React, { useEffect, useContext } from "react";
import SiteContext from "../../context/siteContext";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

import SlideShow from "../layout/SlideShow";

const Home = () => {
  const siteContext = useContext(SiteContext);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Scroll Animations with AOS
    Aos.init({ duration: 1000 });

    siteContext.setLoading(false);
  }, []);

  return (
    <section className="home-page">
      {/* Slide Show */}
      <SlideShow
        source={[
          {
            id: 0,
            imgSrc: require("../../assets/images/slide-1.jpg"),
            content: {
              title: "Tavuk dürümün kralı",
              body: "Özel sosuyla tavuk dürümlerimiz sizleri bekliyor",
            },
          },
          {
            id: 1,
            imgSrc: require("../../assets/images/slide-2.jpg"),
            content: {
              title: "Can Burger",
              body: "Burger çeşitlerimiz şimdi sizlerle",
              link: "/menu",
            },
          },
          {
            id: 2,
            imgSrc: require("../../assets/images/slide-3.jpg"),
            content: {
              title: "Izgaralar",
              body: "Nefis ızgaralarımızdan denediniz mi?",
            },
          },
        ]}
      />

      {/* Mini About */}
      <div className="home-page__about mini-section">
        <h2 className="mini-section__title" data-aos="fade-down">
          Can Kebap'ı merak mı ediyorsun?
        </h2>
        <div className="home-page__about__container">
          <div className="col-1" data-aos="fade-left">
            <img
              src={require("../../assets/images/mini-about-bg.svg")}
              alt="Illustration of a man sitting on a chef hat"
            />
          </div>
          <div className="col-2" data-aos="fade-right">
            <h3>Biz kimiz?</h3>
            <p>
              Can Kebap 1996'dan bu yana Zonguldak'ın en güzide kebap salonu
              olarak hizmet vermektedir. Konu müşteri memnuniyetiyse "limit is
              the sky" prensibininden asla ödün vermeden hizmete devam
              etmekteyiz.
            </p>
            <Link to="/hakkimizda">Daha fazla öğrenin</Link>
          </div>
        </div>
      </div>

      {/* Mini Menu */}
      <div className="home-page__menu mini-section">
        <h2 className="mini-section__title" data-aos="fade-down">
          Can Kebap'ın Ağzınıza Layık Lezzetleri
        </h2>
        <div className="home-page__menu-container" data-aos="zoom-out">
          <div className="overlay">
            <h3>Kebap, Pide, Izgara, Tatlı ve daha nicesi...</h3>
            <p>
              Seçemiyor musun? Belki menüye bakmak yardıcı olur. Hadi, ne
              bekliyorsun?
            </p>
            <Link to="/menu">Menü</Link>
          </div>
        </div>
      </div>

      {/* Mini Contact */}
      <div className="home-page__contact mini-section">
        <h2 className="mini-section__title" data-aos="fade-down">
          Can Kebap'a nasıl ulaşırım?
        </h2>
        <div className="home-page__contact__container">
          <div className="col-1" data-aos="fade-right">
            <h3>Bize ulaşmak mı istiyorsun?</h3>
            <p>
              Sen de Can Kebap'ın leziz lezzetlerine bir an önce ulaşmak
              istiyorsan hemen bizimle iletişime geç!
            </p>
            <Link to="/iletisim">Bize ulaşmak için tıkla</Link>
          </div>
          <div className="col-2" data-aos="fade-left">
            <img
              src={require("../../assets/images/mini-contact-bg.svg")}
              alt="Illustration of a small building"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
