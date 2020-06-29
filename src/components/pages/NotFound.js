import React, { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "Can Kebap - Sayfa Bulunamadı";

    window.scrollTo(0, 0);
  }, []);

  return <div>Not Found page</div>;
};

export default NotFound;
