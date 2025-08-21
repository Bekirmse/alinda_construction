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
            Firmamız, inşaat sektöründeki tecrübemizi ve mühendislik
            birikimimizi kurumsal bir yapıya taşıma hedefiyle 2010 yılında
            kurulmuştur. Kuruluşumuzdan bu yana, konut projelerinden ticari
            yapılara, kentsel dönüşümden altyapı işlerine kadar birçok farklı
            alanda başarılı projelere imza attık. Her geçen yıl büyüyerek
            gelişen yapımız, hem teknik kapasite hem de insan kaynağı açısından
            güç kazanmış; kaliteyi ve güveni ön planda tutarak sektörde kendine
            sağlam bir yer edinmiştir. Bugün, farklı ölçeklerde birçok projeyi
            eş zamanlı yürütebilecek deneyime ve donanıma sahip bir ekip ile
            hizmet vermeye devam ediyoruz. Firmamız, güvenli, estetik ve
            sürdürülebilir yapılar inşa etme vizyonuyla hareket eden, müşteri
            memnuniyetini esas alan bir inşaat şirketidir. Mühendislik
            disiplinine olan bağlılığımız, modern mimari anlayışımız ve
            yenilikçi çözümlerimizle, her projede yüksek kalite standartlarını
            hedefliyoruz., Projelerimizi yalnızca betonarme yapılar olarak
            değil; yaşam alanı, değer ve sorumluluk olarak görüyor; şehir
            dokusuna katkı sağlayan, uzun ömürlü yapılar üretmeyi amaçlıyoruz.
            Planlama aşamasından anahtar teslimine kadar tüm süreçleri
            titizlikle yöneten firmamız, teknolojiyi ve çağın gerekliliklerini
            yakından takip ederek sektörde fark yaratmaktadır.
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
            Başlıca çalışma ilkelerimiz şunlardır: Kalite Odaklılık: Tüm yapı
            malzemelerinde ve uygulamalarda kalite standartlarına tam uyum
            sağlar, uzun ömürlü ve dayanıklı yapılar inşa ederiz. Zamanında
            Teslimat: Proje planlamasında gerçekçi ve etkin süreç yönetimi ile
            işleri söz verilen sürede tamamlarız. Güvenlik ve Yasal Uyum: İş
            sağlığı ve güvenliği kurallarına titizlikle uyar, yürürlükteki tüm
            yasal düzenlemelere ve teknik şartnamelere uygun çalışırız. Müşteri
            Memnuniyeti: Müşteri taleplerini dikkatle dinler, ihtiyaçlara özel
            çözümler üretir, her aşamada açık ve sürekli iletişim kurarız.
            Sürdürülebilirlik: Çevre dostu malzeme ve uygulamalara öncelik
            verir, gelecek nesillere saygılı yapılar üretmeyi hedefleriz. Ekip
            Ruhu ve Uzmanlık: Deneyimli kadromuz ile işbirliği içinde,
            disiplinli ve koordineli bir şekilde çalışarak her projeye en uygun
            çözümleri üretiriz. Bu ilkeler doğrultusunda, her projeyi sadece bir
            inşaat değil, bir sorumluluk bilinciyle ele alıyor; kalıcı değerler
            üretmeyi amaçlıyoruz.
          </p>
        </div>
      </section>

      {/* Footer ile birleşen alt beyaz alan */}
      <div className="about-footer-connector">
        <div className="about-divider"></div>
      </div>

      <Footer />
    </main>
  );
};

export default About;
