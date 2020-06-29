import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Header from "../layout/Header";
import ContactForm from "../layout/ContactForm";
import ContactInfo from "../layout/ContactInfo";

const Contact = () => {
  useEffect(() => {
    document.title = "Can Kebap - İletişim";

    window.scrollTo(0, 0);

    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="contact-page">
      <Header
        bgSrc={require("../../assets/images/contact-header-bg.jpg")}
        title={"İletişim"}
        breadcrumbs={[
          ["/", "Anasayfa"],
          ["/iletisim", "İletişim"],
        ]}
      />

      <div className="page-container">
        <h2 className="page-title">Bizimle iletişime geçin</h2>

        <div className="contact-container">
          <div className="form-container">
            <ContactInfo />
            <ContactForm />
          </div>
          <div id="map" className="map" data-aos="fade-up"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
