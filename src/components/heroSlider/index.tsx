import React, { useState, useEffect, useRef, useCallback } from "react";
import "./style.css";
import SlideContent from "../heroSliderItems";
// (slick CSS importları sende zaten durabilir, bu custom slider onları kullanmıyor ama bırakmanda sakınca yok)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Görseller (mevcut yapını bozmuyorum)
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
  {
    image: require("../../assets/projects/proje2.jpg"),
    title: "PROJE 3",
    description:
      "Proje 2, şehir merkezine yürüme mesafesinde, sakin bir yerleşim bölgesinde konumlanmış modern bir konut projesidir. 5 katlı tek bloktan oluşan yapı, toplam 10 daireden oluşmaktadır. Projede hem 2+1 hem de 3+1 daire seçenekleri sunulmakta olup, her daireye özel balkon ve depo alanı yer almaktadır.",
  },
];


const HeroSlider: React.FC = () => {
  // Sonsuz kaydırma için klonlu dizi: [last, ...slides, first]
  const extended = [slides[slides.length - 1], ...slides, slides[0]];

  // Başlangıç index'i: 1 (gerçek ilk slayt)
  const [index, setIndex] = useState(1);
  const [noTransition, setNoTransition] = useState(false);

  // Timer & touch
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef<number | null>(null);

  // Daima sağa adım
  const next = useCallback(() => {
    if (noTransition) return; // zıplama anında animasyon tetikleme
    setIndex((i) => i + 1);
  }, [noTransition]);

  // Autoplay başlat/yenile
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

  // Dot tıklayınca daima sağa olacak şekilde adım sayısı kadar ileri
  const realActive = (index - 1 + slides.length) % slides.length; // 0..n-1
  const goToDot = (targetReal: number) => {
    const n = slides.length;
    const stepsForward = (targetReal - realActive + n) % n; // 0..n-1
    if (stepsForward === 0) return; // zaten aktifsin
    setIndex((idx) => idx + stepsForward); // hep sağa
  };

  // Dokunma (swipe): yön fark etmeksizin sağa ilerle
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) next(); // hep sağa
    touchStartX.current = null;
  };
const jumpingRef = useRef(false);
  // Klonlardan gerçek slayta "görünmez atlama" (no-transition ile)
const jumpSilently = (to: number) => {
  // Transition sırasındaki transitionend’i yok saymak için kilidi aç
  jumpingRef.current = true;

  // Autoplay’i durdur
  if (timerRef.current) clearInterval(timerRef.current);

  // Transition'ı kapatıp sessiz atla
  setNoTransition(true);
  // 1. RAF: transition'ı kapalıyken index'i değiştir
  requestAnimationFrame(() => {
    setIndex(to);

    // 2. RAF: sonraki frame’de transition'ı tekrar aç, autoplay'i başlat, kilidi bırak
    requestAnimationFrame(() => {
      setNoTransition(false);
      // küçük bir gecikme autoplay'in hemen iteklemesini engeller
      setTimeout(() => {
        jumpingRef.current = false;
        startTimer();
      }, 30);
    });
  });
};


const handleTransitionEnd = () => {
  // Sessiz atlama sürecindeysek bu olayı tamamen yok say
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

    {/* Gradient overlay */}
    <div className="hero-gradient"></div>

    <SlideContent title={slide.title} description={slide.description} />
  </div>
))}


      </div>

      {/* Altta ortalanmış pill dot’lar */}
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
