import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./style.css";
import SlideContent from "../heroSliderItems";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    image: require("../../assets/projects/proje1.jpg"),
    title: "PROJE 1",
    description:
      "Proje 1, şehir merkezine yürüme mesafesinde, sakin bir yerleşim bölgesinde konumlanmış modern bir konut projesidir. 5 katlı tek bloktan oluşan yapı, toplam 10 daireden oluşmaktadır.",
  },
];

const AUTOPLAY_MS = 4000;

const HeroSlider: React.FC = () => {
  // [last, ...slides, first]
  const extended = useMemo(
    () => [slides[slides.length - 1], ...slides, slides[0]],
    []
  );

  // preload – beyaz ekranı önlemek için
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.onload = () => setReady(true);
    img.src = slides[0].image;
  }, []);

  const [index, setIndex] = useState(1);      // gerçek ilk slayt
  const [noTransition, setNoTransition] = useState(false);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const jumpingRef = useRef(false);
  const touchStartX = useRef<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // ------- autoplay -------
  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const next = useCallback(() => {
    if (jumpingRef.current || noTransition) return;
    setIndex((i) => i + 1);
  }, [noTransition]);

  const startTimer = useCallback(() => {
    clearTimer();
    timerRef.current = setInterval(next, AUTOPLAY_MS);
  }, [clearTimer, next]);

  // sadece mount’ta
  useEffect(() => {
    startTimer();
    return clearTimer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // sekmeden geri dönünce state’i toparla
  useEffect(() => {
    const onVis = () => {
      if (document.hidden) {
        clearTimer();
      } else {
        jumpingRef.current = false;
        setNoTransition(false);
        setIndex((i) => {
          const max = extended.length - 1;
          if (i <= 0 || i >= max) return 1;
          return i;
        });
        startTimer();
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [extended.length, clearTimer, startTimer]);

  // dots
  const realActive = (index - 1 + slides.length) % slides.length;
  const goToDot = (targetReal: number) => {
    const n = slides.length;
    const stepsForward = (targetReal - realActive + n) % n;
    if (stepsForward === 0) return;
    setIndex((idx) => idx + stepsForward);
  };

  // touch → hep sağa
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) next();
    touchStartX.current = null;
  };

  // sessiz atlama
  const jumpSilently = (to: number) => {
    if (jumpingRef.current) return;
    jumpingRef.current = true;
    clearTimer();

    setNoTransition(true);
    requestAnimationFrame(() => {
      setIndex(to);
      requestAnimationFrame(() => {
        setNoTransition(false);
        setTimeout(() => {
          jumpingRef.current = false;
          startTimer();
        }, 40);
      });
    });
  };

  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.target !== trackRef.current) return;
    if (e.propertyName && e.propertyName !== "transform") return;
    if (jumpingRef.current || noTransition) return;

    if (index === extended.length - 1) {
      jumpSilently(1);
      return;
    }
    if (index === 0) {
      jumpSilently(extended.length - 2);
      return;
    }
  };

  // preload tamamlanana kadar iskelet göster (yükseklik korunur)
  if (!ready) {
    return <div className="hero-slider" />;
  }

  return (
    <div
      className="hero-slider"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        ref={trackRef}
        className={`hero-slider-track ${noTransition ? "no-transition" : ""}`}
        style={{ transform: `translateX(-${index * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extended.map((slide, i) => (
          <div className="hero-slide" key={i}>
            <img src={slide.image} alt={slide.title} className="hero-image" />
            <div className="hero-gradient" />
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
