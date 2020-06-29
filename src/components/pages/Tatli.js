import React, { useEffect } from "react";

import Header from "../layout/Header";
import MenuList from "../layout/MenuList";

const Tatli = () => {
  useEffect(() => {
    document.title = "Can Kebap - Tatlı";

    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="menu-tatli-page">
      <Header
        bgSrc={require("../../assets/images/tatli-header-bg.jpg")}
        title={"Tatlı"}
        breadcrumbs={[
          ["/", "Anasayfa"],
          ["/menu", "Menü"],
          ["/tatli", "Tatlı"],
        ]}
      />

      <div className="page-container">
        <h2 className="page-title">
          Ağzınıza layık <span className="text-yellow">tatlı</span> çeşitlerimiz
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
              name: "Baklava",
              price: "₺ 15",
              ingredients: "",
            },
            {
              id: 1,
              name: "Şöbiyet",
              price: "₺ 18",
              ingredients: "",
            },
            {
              id: 2,
              name: "Künefe",
              price: "₺ 15",
              ingredients: "",
            },
            {
              id: 3,
              name: "Katmer",
              price: "₺ 25",
              ingredients: "",
            },
          ]}
        />
      </div>
    </section>
  );
};

export default Tatli;
