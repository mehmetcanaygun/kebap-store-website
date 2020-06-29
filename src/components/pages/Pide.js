import React, { useEffect } from "react";

import Header from "../layout/Header";
import MenuList from "../layout/MenuList";

const Pide = () => {
  useEffect(() => {
    document.title = "Can Kebap - Pide";

    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="menu-pide-page">
      <Header
        bgSrc={require("../../assets/images/pide-header-bg.jpg")}
        title={"Pide"}
        breadcrumbs={[
          ["/", "Anasayfa"],
          ["/menu", "Menü"],
          ["/pide", "Pide"],
        ]}
      />

      <div className="page-container">
        <h2 className="page-title">
          Ağzınıza layık <span className="text-yellow">pide</span> çeşitlerimiz
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
              name: "Patatesli Pide",
              price: "₺ 21",
              ingredients: "Patates, soğan, maydonoz, kaşar",
            },
            {
              id: 1,
              name: "Mantarlı Pide",
              price: "₺ 22.50",
              ingredients: "Mantar, domates, kaşar",
            },
            {
              id: 2,
              name: "Kaşarlı Pide",
              price: "₺ 21.50",
              ingredients: "Taze kaşar",
            },
            {
              id: 3,
              name: "Kuşbaşılı Pide",
              price: "₺ 27.50",
              ingredients: "Dana kuşbaşı, domates, çarliston biber",
            },
          ]}
        />
      </div>
    </section>
  );
};

export default Pide;
