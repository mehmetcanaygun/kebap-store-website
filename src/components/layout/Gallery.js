import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Gallery = ({ images }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="gallery">
      {images.map((i) => (
        <a
          key={i.id}
          href={i.imgLg}
          className="img-container"
          data-aos="fade-up"
        >
          <div
            className="img"
            style={{
              background: `url(${i.imgSm})`,
            }}
          >
            <span>
              <i className="fas fa-search"></i>
            </span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Gallery;
