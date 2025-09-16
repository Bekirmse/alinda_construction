import React, { useState, useEffect, useRef, useCallback } from "react";
import "./style.css";
import SlideContent from "../heroSliderItems";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Görseller
const slides = [
  {
    image: require("../../assets/projects/proje1.jpg"),
    title: "PROJE 1",
    description:
      "Proje 1, şehir merkezine yürüme mesafesinde modern bir konut projesidir. 5 katlı tek blokta 10 daireden oluşmaktadır.",
  },
];

const HeroSlider: React.FC = () => {
  const extended = [slides[slides.length - 1], ...slides, slides[0]];

  const [index, setIndex] = useState(1);
  const [noTransition, setNoTransition] = useState(false);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef<number | null>(null);
  const jumpingRef = useRef(false);

  // Daima sağa adım
  const next = useCallback(() => {
    if (noTransition || jumpingRef.current) return;
    setIndex((i) => i + 1);
  }, [noTransition]);

  // Autoplay başlat
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 4000);
  }, [next]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  // Aktif slide hesaplama
  const realActive = (index - 1 + slides.length) % slides.length;

  // Dot click → ileriye kaydır
  const goToDot = (targetReal: number) => {
    const n = slides.length;
    const stepsForward = (targetReal - realActive + n) % n;
    if (stepsForward === 0) return;
    setIndex((idx) => idx + stepsForward);
  };

  // Swipe hareketi
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) next();
    touchStartX.current = null;
  };

  // Sessiz atlama

const jumpSilently = (to: number) => {
  // kilidi aç
  jumpingRef.current = true;

  if (timerRef.current) clearInterval(timerRef.current);

  setNoTransition(true);

  requestAnimationFrame(() => {
    setIndex(to);

    requestAnimationFrame(() => {
      setNoTransition(false);

      // burada kilidi hemen kapatma!
      setTimeout(() => {
        jumpingRef.current = false; // ✅ sadece gecikmeyle kapat
        startTimer();
      }, 100); // 100ms → transition event bitmiş olur
    });
  });
};

  // Transition bittiğinde kontrol
const handleTransitionEnd = () => {
  // Eğer zıplama sürecindeysek hiçbir şey yapma
  if (jumpingRef.current) return;

  if (index === extended.length - 1) {
    // sondaki clone → gerçek 1. slayt
    jumpSilently(1);
  } else if (index === 0) {
    // baştaki clone → gerçek son slayt
    jumpSilently(extended.length - 2);
  }
};

  return (
    <div
      className="hero-slider"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={`hero-slider-track ${noTransition ? "no-transition" : ""}`}
        style={{ transform: `translateX(-${index * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extended.map((slide, i) => (
          <div className="hero-slide" key={i}>
            <img src={slide.image} alt={slide.title} className="hero-image" />
            <div className="hero-gradient"></div>
            <SlideContent title={slide.title} description={slide.description} />
          </div>
        ))}
      </div>

      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${realActive === i ? "active" : ""}`}
            onClick={() => goToDot(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
