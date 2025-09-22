// src/components/heroSlider/index.tsx
/* eslint-disable no-console */
import React, { useEffect, useRef, useState, useCallback } from "react";
import "./style.css";
import SlideContent from "../heroSliderItems";

// ===== Debug helpers =====
const DEBUG = true;
const HS = "[HeroSlider]";

function log(tag: string, ...args: any[]) {
  if (!DEBUG) return;
  // collapsed group daha okunaklı
  // @ts-ignore
  console.groupCollapsed?.(`${HS} ${tag}`);
  console.log(...args);
  // @ts-ignore
  console.groupEnd?.();
}

function logError(tag: string, error: unknown) {
  console.error(`${HS} ${tag}:`, error);
  // stack’i mutlaka göster
  try {
    console.error(`${HS} ${tag} stack:`, (error as any)?.stack);
  } catch {}
  console.trace?.();
}

// herhangi bir handler’ı güvenle sarmalamak için
function safe<T extends (...a: any[]) => any>(fn: T, label: string): T {
  // @ts-ignore
  return ((...args: any[]) => {
    try {
      return fn(...args);
    } catch (e) {
      logError(label, e);
    }
  }) as T;
}

// ===== Slides (örnek) =====
const slides = [
  {
    image: require("../../assets/projects/proje1.jpg"),
    title: "PROJE 1",
    description:
      "Proje 1, şehir merkezine yürüme mesafesinde modern bir konut projesidir. 5 katlı tek blokta 10 daireden oluşmaktadır.",
  },
];

const HeroSlider: React.FC = () => {
  const isSingle = slides.length <= 1;

  // Hook'lar (koşulsuz)
  const extended = [slides[slides.length - 1], ...slides, slides[0]];
  const [index, setIndex] = useState(1);
  const [noTransition, setNoTransition] = useState(false);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef<number | null>(null);
  const jumpingRef = useRef(false);
  const mountedRef = useRef(true);

  // Mount/unmount
  useEffect(() => {
    mountedRef.current = true;
    log("MOUNT", { isSingle, slides: slides.length, extended: extended.length });

    // global error yakalayıcılar (sadece komponent yaşarken)
    const onWinError = (ev: ErrorEvent) => {
      logError("window.onerror", ev.error || ev.message);
    };
    const onUnhandled = (ev: PromiseRejectionEvent) => {
      logError("window.unhandledrejection", ev.reason);
    };
    window.addEventListener("error", onWinError);
    window.addEventListener("unhandledrejection", onUnhandled);

    return () => {
      mountedRef.current = false;
      if (timerRef.current) clearInterval(timerRef.current);
      window.removeEventListener("error", onWinError);
      window.removeEventListener("unhandledrejection", onUnhandled);
      log("UNMOUNT");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sonraki slayt
  const next = safe(
    useCallback(() => {
      if (isSingle || noTransition || jumpingRef.current) {
        log("next: skipped", { isSingle, noTransition, jumping: jumpingRef.current });
        return;
      }
      setIndex((i) => {
        const ni = i + 1;
        log("next: setIndex", { from: i, to: ni });
        return ni;
      });
    }, [isSingle, noTransition]),
    "next()"
  );

  // Autoplay
  const startTimer = safe(
    useCallback(() => {
      if (isSingle) {
        log("startTimer: skipped (single slide)");
        return;
      }
      if (timerRef.current) {
        log("startTimer: clear existing");
        clearInterval(timerRef.current);
      }
      timerRef.current = setInterval(next, 4000);
      log("startTimer: started");
    }, [isSingle, next]),
    "startTimer()"
  );

  useEffect(
    safe(() => {
      if (isSingle) {
        log("autoplay effect: single slide, no timer");
        return () => {};
      }
      startTimer();
      return () => {
        if (timerRef.current) {
          log("autoplay effect cleanup: clear timer");
          clearInterval(timerRef.current);
        }
      };
    }, "autoplay useEffect"),
    [isSingle, startTimer]
  );

  const realActive = (index - 1 + slides.length) % slides.length;

  const goToDot = safe((targetReal: number) => {
    if (isSingle) return;
    const n = slides.length;
    const stepsForward = (targetReal - realActive + n) % n;
    log("goToDot", { targetReal, realActive, stepsForward });
    if (stepsForward === 0) return;
    setIndex((idx) => {
      const ni = idx + stepsForward;
      log("goToDot: setIndex", { from: idx, to: ni });
      return ni;
    });
  }, "goToDot()");

  const handleTouchStart = safe((e: React.TouchEvent<HTMLDivElement>) => {
    if (isSingle) return;
    touchStartX.current = e.touches[0].clientX;
    log("touchStart", { x: touchStartX.current });
  }, "handleTouchStart()");

  const handleTouchEnd = safe((e: React.TouchEvent<HTMLDivElement>) => {
    if (isSingle) return;
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    log("touchEnd", { start: touchStartX.current, end: e.changedTouches[0].clientX, diff });
    if (Math.abs(diff) > 50) next();
    touchStartX.current = null;
  }, "handleTouchEnd()");

  const jumpSilently = safe((to: number) => {
    if (isSingle) return;
    log("jumpSilently:start", { to });
    jumpingRef.current = true;
    if (timerRef.current) clearInterval(timerRef.current);

    setNoTransition(true);
    requestAnimationFrame(() => {
      if (!mountedRef.current) return;
      setIndex(to);
      log("jumpSilently:setIndex", { to });

      requestAnimationFrame(() => {
        if (!mountedRef.current) return;
        setNoTransition(false);
        setTimeout(() => {
          if (!mountedRef.current) return;
          jumpingRef.current = false;
          log("jumpSilently:end → restart timer");
          startTimer();
        }, 120);
      });
    });
  }, "jumpSilently()");

  const handleTransitionEnd = safe(() => {
    if (isSingle) return;
    if (jumpingRef.current) {
      log("transitionEnd: ignored (jumping)");
      return;
    }
    log("transitionEnd", { index, extLen: extended.length });

    if (index === extended.length - 1) {
      jumpSilently(1);
    } else if (index === 0) {
      jumpSilently(extended.length - 2);
    }
  }, "handleTransitionEnd()");

  // Tek slayt: statik render
  if (isSingle) {
    const s = slides[0];
    log("render: single slide", { index });
    return (
      <div className="hero-slider">
        <div className="hero-slide">
          <img src={s.image} alt={s.title} className="hero-image" />
          <div className="hero-gradient" />
          <SlideContent title={s.title} description={s.description} />
        </div>
      </div>
    );
  }

  log("render", { index, noTransition, realActive });

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
