import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  useEffect(() => {
    document.title = "Can Kebap - Sayfa Bulunamadı";

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="not-found-page">
      <div>
        <h1>404</h1>
        <p>Maalesef her yere baktık ama aradığınız sayfayı bulamadık.</p>
        <Link to="/">Anasayfaya Dön</Link>
      </div>
    </div>
  );
};

export default NotFound;
