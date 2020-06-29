import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";

const SlideShow = ({ source }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalTime = 5000;
  let slideInterval;

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(source.length - 1);
    } else if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const nextSlide = () => {
    if (currentSlide === source.length - 1) {
      setCurrentSlide(0);
    } else if (currentSlide < source.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const autoSlide = () => {
    slideInterval = setInterval(() => {
      nextSlide();
    }, intervalTime);
  };

  const stopSlide = () => {
    clearInterval(slideInterval);
  };

  useEffect(() => {
    autoSlide();

    return () => {
      stopSlide();
    };
    // eslint-disable-next-line
  }, [currentSlide]);

  return (
    <div className="slide-show" data-aos="fade-down">
      <div className="slide-show__bubbles-container">
        {source.map((s) => (
          <button
            key={s.id}
            className={
              s.id === currentSlide
                ? "slide-show__bubbles-container__bubble current"
                : "slide-show__bubbles-container__bubble"
            }
            onClick={() => {
              setCurrentSlide(s.id);
            }}
          ></button>
        ))}
      </div>

      <div className="slide-show__arrows-container">
        <button
          className="slide-show__arrows-container__prev-btn"
          data-aos="fade-down"
          data-aos-delay="500"
          onClick={() => {
            prevSlide();
          }}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          className="slide-show__arrows-container__next-btn"
          data-aos="fade-down"
          data-aos-delay="500"
          onClick={() => {
            nextSlide();
          }}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      {source.map((s) => (
        <div
          key={s.id}
          className={
            s.id === currentSlide
              ? "slide-show__slide current"
              : "slide-show__slide"
          }
          style={{
            background: `url(${s.imgSrc}) no-repeat center center/cover`,
          }}
        >
          {s.content && (
            <div
              className="slide-show__slide__content"
              onMouseEnter={() => {
                stopSlide();
              }}
              onMouseLeave={() => {
                autoSlide();
              }}
            >
              <h1>{s.content.title}</h1>
              <p>{s.content.body}</p>
              {s.content.link && <Link to={s.content.link}>Devamı</Link>}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SlideShow;
