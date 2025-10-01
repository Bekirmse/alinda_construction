import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./style.css";

import Header from "../../components/header";
import Footer from "../../components/footer";
import ProjectCard from "../../components/projectCards";
import iletisimImage from "../../assets/images/Alinda8_projeBanner/Alinda8_projeBanner.png";

// 📌 Proje 1 görselleri (Alinda8_gallery)
import Alinda8_1 from "../../assets/images/Alinda8_gallery/Alinda8_1.jpg";
import Alinda8_2 from "../../assets/images/Alinda8_gallery/Alinda8_2.jpg";
import Alinda8_3 from "../../assets/images/Alinda8_gallery/Alinda8_3.jpg";
import Alinda8_4 from "../../assets/images/Alinda8_gallery/Alinda8_4.jpg";
import Alinda8_5 from "../../assets/images/Alinda8_gallery/Alinda8_5.jpg";
import Alinda8_6 from "../../assets/images/Alinda8_gallery/Alinda8_6.jpg";
import Alinda8_7 from "../../assets/images/Alinda8_gallery/Alinda8_7.jpg";
import Alinda8_8 from "../../assets/images/Alinda8_gallery/Alinda8_8.jpg";
import Alinda8_9 from "../../assets/images/Alinda8_gallery/Alinda8_9.jpg";
import Alinda8_10 from "../../assets/images/Alinda8_gallery/Alinda8_10.jpg";
import Alinda8_11 from "../../assets/images/Alinda8_gallery/Alinda8_11.jpg";
import Alinda8_12 from "../../assets/images/Alinda8_gallery/Alinda8_12.jpg";
import Alinda8_13 from "../../assets/images/Alinda8_gallery/Alinda8_13.jpg";
import Alinda8_14 from "../../assets/images/Alinda8_gallery/Alinda8_14.jpg";
import Alinda8_15 from "../../assets/images/Alinda8_gallery/Alinda8_15.jpg";
import Alinda8_16 from "../../assets/images/Alinda8_gallery/Alinda8_16.jpg";
import Alinda8_17 from "../../assets/images/Alinda8_gallery/Alinda8_17.jpg";
import Alinda8_18 from "../../assets/images/Alinda8_gallery/Alinda8_18.jpg";
import Alinda8_19 from "../../assets/images/Alinda8_gallery/Alinda8_19.jpg";
import DaireIcon from "../../assets/icons/ProjeIcon/daireler.png";
import AlanIcon from "../../assets/icons/ProjeIcon/m2.png";

type StatBox = { label: string; value: string; icon?: string };

type Project = {
  slug: string;
  image: string;         // üstteki tek görsel
  gallery: string[];     // slider için çoklu görsel
  title: string;
  subtitle: string;
  stats: [StatBox, StatBox];
  buttonText: string;
  location: string;
  features: string[];
  roomTypes: string[];
};

const projectData: Project[] = [
  {
    slug: "proje-1",
    image: iletisimImage, // üstteki büyük görsel
    gallery: [
      Alinda8_1,
      Alinda8_2,
      Alinda8_3,
      Alinda8_4,
      Alinda8_5,
      Alinda8_6,
      Alinda8_7,
      Alinda8_8,
      Alinda8_9,
      Alinda8_10,
      Alinda8_11,
      Alinda8_12,
      Alinda8_13,
      Alinda8_14,
      Alinda8_15,
      Alinda8_16,
      Alinda8_17,
      Alinda8_18,
      Alinda8_19,
    ],
    title: "Alinda 8",
    subtitle: "PROJE 1",
     stats: [
      { label: "DAİRE", value: "9", icon: DaireIcon },
      { label: "ALAN", value: "680 M²", icon: AlanIcon },
    ],
    buttonText: "PROJE 1 KATALOG →",
    location: "Lefkoşa, KKTC",
    features: [
      "Türk Koçanlı Daireler",
      "Modern Tasarım",
      "Kapalı Otopark",
      "Önü Kapanmaz Yeşil Alan",
      "Ana Yola 2 Dakika Mesafe",
      "Tüm Daireler Yol Cepheli",
      "Yatırıma ve Oturmaya Uygun",
      "Deprem Standartlarına Uygun",
    ],
    roomTypes: ["2+1"],
  },

  // 📌 İleride buraya yeni proje ekleyebilirsin:
  // {
  //   slug: "proje-2",
  //   image: başkaBirKapak,
  //   gallery: [Alinda9_1, Alinda9_2, ...],
  //   ...
  // }
];

const ProjectPage: React.FC = () => {
  const location = useLocation();
  const { hash, state } = location as { hash: string; state?: any };

  useEffect(() => {
    if (!hash && !state?.target) return;

    const targetId = hash?.replace("#", "") || state?.target;
    if (!targetId) return;

    const scrollTo = () => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return true;
      }
      return false;
    };

    requestAnimationFrame(() => {
      if (!scrollTo()) {
        setTimeout(scrollTo, 150);
      }
    });
  }, [hash, state]);

  return (
    <>
      <Header />
      <main className="project-page">
        {projectData.map((project) => (
          <section
            id={project.slug}
            key={project.slug}
            className="project-anchor"
          >
            <ProjectCard {...project} />
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
};

export default ProjectPage;
