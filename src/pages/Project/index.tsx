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
  // completionDate: string;
  // price: string;
  features: string[];
  roomTypes: string[];
};

const projectData: Project[] = [
  {
    slug: "proje-1",
    image: iletisimImage,
    title: "Alinda 08",
    subtitle: "PROJE 1",
    stats: [
      { label: "DAİRE", value: "9" },
      { label: "ALAN", value: "680 M²" },
    ],
    buttonText: "PROJE 1 KATALOG →",
    location: "Lefkoşa, KKTC",
    // completionDate: "Aralık 2026",
    // price: "100.000 STG",
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
