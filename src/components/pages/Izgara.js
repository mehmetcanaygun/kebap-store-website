import React, { useEffect, useContext } from "react";
import SiteContext from "../../context/siteContext";

import Header from "../layout/Header";
import MenuList from "../layout/MenuList";

const Izgara = () => {
  const siteContext = useContext(SiteContext);

  useEffect(() => {
    document.title = "Can Kebap - Izgara";

    window.scrollTo(0, 0);

    siteContext.setLoading(false);
  }, []);

  return (
    <section className="menu-izgara-page">
      <Header
        bgSrc={require("../../assets/images/izgara-header-bg.jpg")}
        title={"Izgara"}
        breadcrumbs={[
          ["/", "Anasayfa"],
          ["/menu", "Menü"],
          ["/izgara", "Izgara"],
        ]}
      />

      <div className="page-container">
        <h2 className="page-title">
          Ağzınıza layık <span className="text-yellow">ızgara</span>{" "}
          çeşitlerimiz
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
              name: "Bonfile",
              price: "₺ 60",
              ingredients: "",
            },
            {
              id: 1,
              name: "Tavuk Pirzola",
              price: "₺ 27",
              ingredients: "",
            },
            {
              id: 2,
              name: "Kuzu Pirzola",
              price: "₺ 60",
              ingredients: "",
            },
            {
              id: 3,
              name: "Izgara Köfte",
              price: "₺ 27",
              ingredients: "",
            },
            {
              id: 4,
              name: "Karışık Izgara",
              price: "₺ 45",
              ingredients: "",
            },
            {
              id: 5,
              name: "Tavuk Şiş",
              price: "₺ 27",
              ingredients: "",
            },
            {
              id: 6,
              name: "Tavuk Kanat",
              price: "₺ 30",
              ingredients: "",
            },
          ]}
        />
      </div>
    </section>
  );
};

export default Izgara;
