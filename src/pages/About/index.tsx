import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import "./style.css";
import iletisimImage from "../../assets/projects/iletisim.png";

const About: React.FC = () => {
  return (
    <main className="about-page">
      {/* Hero Görsel */}
      <div className="about-hero">
        <img src={iletisimImage} alt="Biz Kimiz" className="about-hero-image" />
      </div>

      <Header />

      {/* Sayfa Başlığı */}
      <section className="about-heading-wrapper">
        <h1 className="about-main-title">BİZ KİMİZ ?</h1>
      </section>

      {/* 1. Blok: Sol Açıklama, Sağ Koyu */}
      <section className="about-section first">
        <div className="about-left">
          <h2 className="about-subtitle">ALİNDA CONSTRUCTION</h2>
          <h3 className="about-subsubtitle">
            TARİHÇE VE HAKKIMIZDA<div className="subtitle-divider"></div>
          </h3>
          <p className="about-paragraph">
            25 yılı aşkın iş tecrübemizle, bugün de inşaat sektöründe güven ve
            kaliteyi bir araya getiriyoruz. “Sağlam temeller, güçlü yapılar”
            anlayışıyla hayata geçirdiğimiz apartman ve villa projelerinde,
            yap-sat modelini başarıyla uygulamaya devam ediyoruz.
          </p>
        </div>
        <div className="about-right dark" />
      </section>

      {/* 2. Blok: Sağ Açıklama, Sol Koyu */}
      <section className="about-section second">
        <div className="about-left dark" />
        <div className="about-right">
          <h2 className="about-subtitle">ALİNDA CONSTRUCTION</h2>
          <h3 className="about-subsubtitle">
            ÇALIŞMA POLİTİKAMIZ<div className="subtitle-divider"></div>
          </h3>
          <p className="about-paragraph">
            Müşteri memnuniyetini öncelik olarak benimseyen ekibimiz, her detayı
            titizlikle planlayarak sizlere yalnızca bugünün değil, yarının
            ihtiyaçlarına da uygun yaşam alanları sunmayı hedeflemektedir.
            Tecrübemizden aldığımız güçle, geleceğin güvenli ve modern
            yapılarının inşasına kararlılıkla devam ediyoruz.
          </p>
        </div>
      </section>

      {/* Footer ile birleşen alt beyaz alan */}
      <div className="about-footer-connector">
        <div className="a-divider"></div>
      </div>

      <Footer />
    </main>
  );
};

export default About;
