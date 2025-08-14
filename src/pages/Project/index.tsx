import React from "react";
import "./style.css";

// Bileşenler
import Header from "../../components/header";
import Footer from "../../components/footer";
import ProjectCard from "../../components/projectCards";

// Görsel
import iletisimImage from "../../assets/projects/iletisim.png";

// StatBox tipini tanımlayın
type StatBox = { label: string; value: string };

// Proje verisi
const projectData: {
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
}[] = [
  {
    image: iletisimImage,
    title: "PROJELERİMİZ",
    subtitle: "PROJE 1",
    stats: [
      { label: "DAİRE", value: "105" },
      { label: "ALAN", value: "36657 M2" },
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
      "Ticari Alanlar"
    ],
    roomTypes: ["Stüdyo", "1+1", "2+1", "3+1"],
  },
  {
    image: iletisimImage,
    title: "PROJELERİMİZ",
    subtitle: "PROJE 2",
    stats: [
      { label: "DAİRE", value: "90" },
      { label: "ALAN", value: "29850 M2" },
    ],
    buttonText: "PROJE 2 KATALOG →",
    location: "Girne, KKTC",
    completionDate: "Haziran 2025",
    price: "Başlangıç 2.500.000 TL",
    features: [
      "Doğaya Yakın",
      "Manzaralı Teras",
      "Fitness Salonu",
      "Çocuk Parkı",
      "Site Güvenliği",
    ],
    roomTypes: ["1+1", "2+1", "Dublex"],
  }
];


const ProjectPage: React.FC = () => {
  return (
    <>
      <Header />

      <main className="project-page">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </main>

      <Footer />
    </>
  );
};

export default ProjectPage;
