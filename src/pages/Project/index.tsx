import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./style.css";

import Header from "../../components/header";
import Footer from "../../components/footer";
import ProjectCard from "../../components/projectCards";
import iletisimImage from "../../assets/projects/iletisim.png";

type StatBox = { label: string; value: string };

type Project = {
  slug: string;
  image: string;
  title: string;
  subtitle: string;
  stats: [StatBox, StatBox];
  buttonText: string;
  location: string;
  completionDate: string;
  price: string;
  features: string[];
  roomTypes: string[];
};

const projectData: Project[] = [
  {
    slug: "proje-1",
    image: iletisimImage,
    title: "PROJE ISMI!",
    subtitle: "PROJE 1",
    stats: [
      { label: "DAİRE", value: "105" },
      { label: "ALAN", value: "36657 M²" },
    ],
    buttonText: "PROJE 1 KATALOG →",
    location: "İskele, KKTC",
    completionDate: "Aralık 2026",
    price: "100.000 STG",
    features: [
      "Merkezi Konum",
      "Modern Tasarım",
      "Akıllı Ev Sistemleri",
      "24/7 Güvenlik",
      "Sosyal Alanlar",
      "Spor Merkezi",
      "Yüzme Havuzu",
      "Kapalı Otopark",
      "Ticari Alanlar",
    ],
    roomTypes: ["Stüdyo", "1+1", "2+1", "3+1"],
  },
  // {
  //   slug: "proje-2",
  //   image: iletisimImage,
  //   title: "PROJELERİMİZ",
  //   subtitle: "PROJE 2",
  //   stats: [
  //     { label: "DAİRE", value: "90" },
  //     { label: "ALAN", value: "29850 M2" },
  //   ],
  //   buttonText: "PROJE 2 KATALOG →",
  //   location: "Girne, KKTC",
  //   completionDate: "Haziran 2025",
  //   price: "Başlangıç 2.500.000 TL",
  //   features: [
  //     "Doğaya Yakın",
  //     "Manzaralı Teras",
  //     "Fitness Salonu",
  //     "Çocuk Parkı",
  //     "Site Güvenliği",
  //   ],
  //   roomTypes: ["1+1", "2+1", "Dublex"],
  // },
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

    // Render sonrası kaydır
    requestAnimationFrame(() => {
      if (!scrollTo()) {
        setTimeout(scrollTo, 150); // Yavaş render için tekrar dene
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
