import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap } from "lucide-react";
import SectionBackgroundElements from "../components/SectionBackgroundElements";
import { useScrollSectionAnimation } from "../hooks/use-scroll-section-animation";

gsap.registerPlugin(ScrollTrigger);

type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  highlight?: string;
};

const education: EducationItem[] = [
  {
    degree: "Universitas Putra Indonesia YPTK Padang",
    institution: "S1 Teknik Informatika",
    period: "2022 - 2026",
  },
  {
    degree: "Sekolah Menengah Atas",
    institution: "SMA N 1 Ranah Pesisir",
    highlight:"Jurusan IPA",
    period: "2017 - 2020",
  },
  {
    degree: "Sekolah Menengah Pertama",
    institution: "MTsN 12 Pesisir Selatan",
    period: "2013 - 2016",
  },
  {
    degree: "Sekolah Dasar",
    institution: "SD Negeri 10 Sumedang",
    period: "2006 - 2012",
  },
  {
    degree: "Taman Kanak-Kanak",
    institution: "TK Barunawati",
    period: "2006",
  },
];

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useScrollSectionAnimation(sectionRef);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".timeline-item");

      items.forEach((item, index) => {
        const isLeft = index % 2 === 0;

        gsap.fromTo(
          item,
          {
            opacity: 0,
            x: isLeft ? -60 : 60,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.65,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              end: "bottom 30%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });

      // Animate the central line
      gsap.from(".timeline-line", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.5,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-[clamp(56px,7vh,88px)] relative overflow-hidden bg-section-4"
    >
      <SectionBackgroundElements variant="center" showPanels />
      <div className="max-w-[1000px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-12 text-center">
          <span className="inline-block text-xs font-mono font-medium uppercase tracking-[0.05em] text-[var(--color-accents)] mb-3">
            Education
          </span>
          <h2 className="text-[clamp(28px,4vw,48px)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
            Academic Background
          </h2>
        </div>

        <div ref={containerRef} className="relative">
          {/* Central Line */}
          <div className="timeline-line absolute left-[40px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2"></div>

          <div className="space-y-12">
            {education.map((edu, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`timeline-item relative flex flex-col md:flex-row items-start md:items-center ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  } pl-[80px] md:pl-0`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-[40px] md:left-1/2 w-10 h-10 rounded-full bg-[var(--color-surface)] border-2 border-[var(--color-accent)] flex items-center justify-center -translate-x-1/2 shadow-[0_0_15px_rgba(59,130,246,0.3)] z-10">
                    <GraduationCap
                      className="text-[var(--color-accent)]"
                      size={18}
                    />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-[calc(50%-40px)] ${isLeft ? "md:pr-10" : "md:pl-10"}`}
                  >
                    <div className="bg-white/5 backdrop-blur-md border border-black/10 rounded-[var(--radius-card)] p-8 shadow-[var(--shadow-card)] hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
                      <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-[var(--color-accents)] bg-[var(--color-accents)]/10 rounded-full border border-[var(--color-accents)]/20">
                        {edu.period}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-[16px] text-white/70 mb-3">
                        {edu.institution}
                      </p>
                      {edu.highlight && (
                        <p className="text-sm font-medium text-[var(--color-success)] mt-2">
                          {edu.highlight}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
