import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";
import SectionBackgroundElements from "../components/SectionBackgroundElements";
import { useScrollSectionAnimation } from "../hooks/use-scroll-section-animation";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Website Perpustakaan",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    year: "2022",
    description:
      "Library management system for book data and borrowing operations.",
    image: "/project-thumb-1.jpg",
    featured: false,
  },
  {
    title: "Website E-Commerce",
    tech: ["HTML", "CSS", "JavaScript"],
    year: "2022",
    description:
      "Online sales website with product catalog and basic transaction flow.",
    image: "/project-thumb-2.jpg",
    featured: false,
  },
  {
    title: "Program Kasir (Java)",
    tech: ["Java"],
    year: "2022",
    description:
      "Point-of-sale application for sales transactions and receipt generation.",
    image: "/project-thumb-3.jpg",
    featured: false,
  },
  {
    title: "Animasi Interaktif (Adobe Flash)",
    tech: ["Adobe Flash"],
    year: "2022",
    description:
      "Simple interactive visual animation project for educational content.",
    image: "/animasi flash.png",
    featured: false,
  },
  {
    title: "Landing Page Aplikasi (Flutter)",
    tech: ["Flutter"],
    year: "2023",
    description:
      "Responsive and visually appealing landing page design for mobile app.",
    image: "/4428861.jpg",
    featured: false,
  },
  {
    title: "Aplikasi AR/VR Sederhana (Unity)",
    tech: ["Unity"],
    year: "2023",
    description:
      "Basic augmented/virtual reality application with simple interactions.",
    image: "/arvr.png",
    featured: false,
  },
  {
    title: "Pengolahan Data (Python)",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    year: "2024",
    description:
      "Data processing and analysis pipeline using Python data science libraries.",
    image: "/project-thumb-4.jpg",
    featured: false,
  },
  {
    title: "Sistem Analisis Risiko Kredit (Skripsi)",
    tech: ["Python", "Data Analysis", "Dashboard"],
    year: "2025–2026",
    description:
      "Thesis project — credit risk analysis system for PT FIFGROUP Cabang Padang.",
    image: "/project-thumb-5.jpg",
    featured: false,
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useScrollSectionAnimation(sectionRef);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.children;
      if (cards) {
        Array.from(cards).forEach((card, index) => {
          // Animasi dari kiri untuk kolom 1 (index genap), dari kanan untuk kolom 2 (index ganjil)
          const startX = index % 2 === 0 ? -60 : 60;

          gsap.fromTo(
            card,
            {
              opacity: 0,
              x: startX,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "bottom 30%",
                toggleActions: "play reverse play reverse",
              },
            },
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative overflow-hidden py-[clamp(56px,7vh,88px)] bg-section-5"
    >
      <SectionBackgroundElements variant="left" />
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-10">
          <span className="inline-block text-xs font-mono font-medium uppercase tracking-[0.05em] text-[var(--color-accents)] mb-3">
            Projects
          </span>
          <h2 className="text-[clamp(28px,4vw,48px)] font-bold leading-[1.1] tracking-[-0.02em] text-white mb-4">
            Featured Work
          </h2>
          <p className="text-[15px] text-slate-300 max-w-[560px]">
            A collection of academic and personal projects throughout my
            studies.
          </p>
        </div>

        <div ref={cardsRef} className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`group bg-slate-900/70 rounded-[var(--radius-card)] overflow-hidden border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1.5 hover:scale-[1.02] transition-all duration-300 ${
                project.featured
                  ? "border-2 border-[var(--color-accent)]"
                  : "border-slate-700"
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-3 right-3 flex items-center gap-2">
                  {project.featured && (
                    <span className="px-2.5 py-1 text-xs font-semibold text-white bg-[var(--color-accent)] rounded-full">
                      Thesis
                    </span>
                  )}
                  <span className="px-2.5 py-1 text-xs font-medium text-white bg-black/40 backdrop-blur-sm rounded-full">
                    {project.year}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-medium text-[var(--color-accent)] bg-[var(--color-accent)]/10 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2.5 py-1 text-xs font-medium text-slate-300 bg-slate-800 rounded-md">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                  {project.title}
                  <ExternalLink
                    size={16}
                    className="opacity-0 group-hover:opacity-50 transition-opacity"
                  />
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
