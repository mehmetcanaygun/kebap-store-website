import React, { useContext } from "react";
import SiteContext from "../../context/siteContext";

import HashLoader from "react-spinners/HashLoader";

const Loading = () => {
  const siteContext = useContext(SiteContext);

  const loadingStyle = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100vh",
    display: siteContext.loading ? "flex" : "none",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    zIndex: "1000",
    overflow: "hidden",
  };

  return (
    <div style={loadingStyle}>
      <HashLoader size={100} color={"#fa9f42"} loading={true} />
    </div>
  );
};

export default Loading;
