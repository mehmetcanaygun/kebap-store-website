import React, { useEffect, useContext } from "react";
import SiteContext from "../../context/siteContext";

import Header from "../layout/Header";
import MenuList from "../layout/MenuList";

const Kebap = () => {
  const siteContext = useContext(SiteContext);

  useEffect(() => {
    document.title = "Can Kebap - Kebap";

    window.scrollTo(0, 0);

    siteContext.setLoading(false);
  }, []);

  return (
    <section className="menu-kebap-page">
      <Header
        bgSrc={require("../../assets/images/kebap-header-bg.jpg")}
        title={"Kebap"}
        breadcrumbs={[
          ["/", "Anasayfa"],
          ["/menu", "Menü"],
          ["/kebap", "Kebap"],
        ]}
      />

      <div className="page-container">
        <h2 className="page-title">
          Ağzınıza layık <span className="text-yellow">kebap</span> çeşitlerimiz
        </h2>
        <div className="page-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, illo
          blanditiis aspernatur laborum ut adipisci odit rem dignissimos tenetur
          modi?
        </div>

        <MenuList
          items={[
            {
              id: 0,
              name: "Adana Kebap",
              price: "₺ 25",
              ingredients: "Et et et et et et",
            },
            {
              id: 1,
              name: "Urfa Kebap",
              price: "₺ 25",
              ingredients: "Et et et et et et",
            },
            {
              id: 2,
              name: "Karışık Kebap",
              price: "₺ 35",
              ingredients: "Et et et et et et",
            },
            {
              id: 3,
              name: "Haşhaş Kebabı",
              price: "₺ 35",
              ingredients: "Et et et et et et",
            },
            {
              id: 4,
              name: "Patlıcan Kebabı",
              price: "₺ 25",
              ingredients: "Et et et et et et",
            },
          ]}
        />
      </div>
    </section>
  );
};

export default Kebap;
