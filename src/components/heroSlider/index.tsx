import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import SlideContent from "../heroSliderItems";

const slides = [
  {
    image: require("../../assets/projects/proje1.jpg"),
    title: "PROJE 1",
    description:
      "Proje 1, şehir merkezine yürüme mesafesinde, sakin bir yerleşim bölgesinde konumlanmış modern bir konut projesidir. 5 katlı tek bloktan oluşan yapı, toplam 10 daireden oluşmaktadır. Projede hem 2+1 hem de 3+1 daire seçenekleri sunulmakta olup, her daireye özel balkon ve depo alanı yer almaktadır.",
  },
  {
    image: require("../../assets/projects/proje2.jpg"),
    title: "PROJE 2",
    description:
      "Proje 2, şehir merkezine yürüme mesafesinde, sakin bir yerleşim bölgesinde konumlanmış modern bir konut projesidir. 5 katlı tek bloktan oluşan yapı, toplam 10 daireden oluşmaktadır. Projede hem 2+1 hem de 3+1 daire seçenekleri sunulmakta olup, her daireye özel balkon ve depo alanı yer almaktadır.",
  },
];

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    timeoutRef.current = setInterval(nextSlide, 4000);
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, []);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();

    touchStartX.current = null;
  };

  return (
    <div
      className="hero-slider"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="hero-slider-track"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div className="hero-slide" key={index}>
            <img src={slide.image} alt={slide.title} className="hero-image" />
            <SlideContent title={slide.title} description={slide.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
