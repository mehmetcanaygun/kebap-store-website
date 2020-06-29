import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Header from "../layout/Header";
import Gallery from "../layout/Gallery";

const About = () => {
  useEffect(() => {
    document.title = "Can Kebap - Hakkımızda";

    window.scrollTo(0, 0);

    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="about-page">
      <Header
        bgSrc={require("../../assets/images/about-header-bg.jpg")}
        title={"Hakkımızda"}
        breadcrumbs={[
          ["/", "Anasayfa"],
          ["/hakkimizda", "Hakkımızda"],
        ]}
      />

      <div className="page-container">
        <p className="page-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          ratione recusandae hic ullam, fugit delectus iste corporis facere
          accusamus exercitationem necessitatibus voluptates. Voluptate maxime
          necessitatibus esse, saepe et nostrum nisi minus aut dolore molestias
          aspernatur harum, officia porro dignissimos asperiores quod ab non
          voluptatem! Tempore, tenetur porro ipsam similique aliquid libero
          laudantium at, veniam accusantium blanditiis minima et vel repellendus
          incidunt quibusdam aspernatur quasi. Excepturi, impedit culpa
          provident odit id officia praesentium nesciunt nostrum non ipsa error
          accusamus ullam rem, veniam quasi minus facilis laboriosam illo
          reprehenderit. Assumenda optio explicabo quos quasi cum laborum
          mollitia quaerat repellat! Vel eos, repellendus, sequi saepe quo odio
          accusamus ullam dicta amet exercitationem assumenda illum laboriosam
          sit labore consectetur facere rerum molestiae nesciunt unde hic
          temporibus? Quas et voluptas alias vero eveniet culpa repellendus
          perferendis veniam dolorum, sequi optio adipisci suscipit, iusto nihil
          quidem corrupti consectetur esse? Consequuntur, aliquam laboriosam.
          Architecto non illo laborum deserunt, possimus explicabo debitis
          provident, enim similique, mollitia quaerat minima magnam. Quo
          laudantium perspiciatis consequatur debitis modi ad laboriosam non ex
          cumque soluta. Hic neque vero commodi! Minima corrupti neque
          necessitatibus dolorum. Laborum minus consectetur quo nihil deserunt
          ipsam placeat necessitatibus expedita sint! Doloremque a mollitia
          voluptatem, sed quos praesentium!
        </p>

        <h2 className="page-title" data-aos="fade-up">
          Galeriye göz at
        </h2>

        <Gallery
          images={[
            {
              id: 0,
              imgSm: require("../../assets/images/gallery-1-sm.jpg"),
              imgLg: require("../../assets/images/gallery-1-lg.jpg"),
            },
            {
              id: 1,
              imgSm: require("../../assets/images/gallery-2-sm.jpg"),
              imgLg: require("../../assets/images/gallery-2-lg.jpg"),
            },
            {
              id: 2,
              imgSm: require("../../assets/images/gallery-3-sm.jpg"),
              imgLg: require("../../assets/images/gallery-3-lg.jpg"),
            },
            {
              id: 3,
              imgSm: require("../../assets/images/gallery-4-sm.jpg"),
              imgLg: require("../../assets/images/gallery-4-lg.jpg"),
            },
            {
              id: 4,
              imgSm: require("../../assets/images/gallery-5-sm.jpg"),
              imgLg: require("../../assets/images/gallery-5-lg.jpg"),
            },
            {
              id: 5,
              imgSm: require("../../assets/images/gallery-6-sm.jpg"),
              imgLg: require("../../assets/images/gallery-6-lg.jpg"),
            },
            {
              id: 6,
              imgSm: require("../../assets/images/gallery-7-sm.jpg"),
              imgLg: require("../../assets/images/gallery-7-lg.jpg"),
            },
            {
              id: 7,
              imgSm: require("../../assets/images/gallery-8-sm.jpg"),
              imgLg: require("../../assets/images/gallery-8-lg.jpg"),
            },
            {
              id: 8,
              imgSm: require("../../assets/images/gallery-9-sm.jpg"),
              imgLg: require("../../assets/images/gallery-9-lg.jpg"),
            },
          ]}
        />
      </div>
    </section>
  );
};

export default About;
