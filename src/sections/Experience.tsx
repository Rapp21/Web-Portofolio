import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionBackgroundElements from '../components/SectionBackgroundElements';
import { useScrollSectionAnimation } from '../hooks/use-scroll-section-animation';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: 'Intern – Verifikasi Data & Staff Office',
    company: 'PT Permodalan Nasional Madani (PNM) – Cabang Padang',
    date: 'Mei – Juli 2025',
    badge: 'Internship',
    points: [
      'Memverifikasi dan mencocokkan data nasabah dengan dokumen administrasi untuk memastikan keakuratan data.',
      'Mengelola dan menginput data guna mendukung kelancaran operasional kantor.',
      'Membantu proses administrasi dan koordinasi antar divisi.',
      'Mendukung pelayanan pembiayaan kepada pelaku UMKM.',
    ],
  },
  {
    title: 'Peserta Studi Independen – Web Development',
    company: 'Infinite Learning – MSIB Batch 7 (Kampus Merdeka), Batam (Remote)',
    date: 'Sep – Des 2024',
    badge: 'Independent Study',
    points: [
      'Mengembangkan aplikasi berbasis web dalam proyek tim.',
      'Berpartisipasi dalam perancangan tampilan dan alur penggunaan aplikasi.',
      'Bekerja sama dalam tim menggunakan metode Agile/Scrum.',
      'Mencapai hasil evaluasi yang baik pada program pelatihan.',
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useScrollSectionAnimation(sectionRef);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(lineRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        scaleY: 0,
        transformOrigin: 'top',
        duration: 1.2,
        ease: 'power2.out',
      });

      const cards = cardsRef.current?.querySelectorAll('.experience-card-wrap');
      cards?.forEach((card, index) => {
        const fromRight = index % 2 === 0;
        gsap.fromTo(
          card,
          {
            opacity: 0,
            x: fromRight ? 60 : -60,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.65,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'bottom 30%',
              toggleActions: 'play reverse play reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative overflow-hidden py-[clamp(56px,7vh,88px)] bg-section-3"
    >
      <SectionBackgroundElements variant="right" />
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-10">
          <span className="inline-block text-xs font-mono font-medium uppercase tracking-[0.05em] text-[var(--color-accents)] mb-3">
            Experience
          </span>
          <h2 className="text-[clamp(28px,4vw,48px)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
            Work History
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line - desktop centered, mobile left */}
          <div
            ref={lineRef}
            className="absolute left-[7px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-slate-500/70"
          />

          <div ref={cardsRef} className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="experience-item relative flex flex-col md:flex-row md:items-start gap-6 md:gap-0">
                {/* Dot */}
                <div className="absolute left-[7px] md:left-1/2 md:-translate-x-1/2 top-0 w-3 h-3 rounded-full bg-[var(--color-accent)] border-2 border-slate-800 shadow-sm z-10" />

                {/* Spacer for alternating layout on desktop */}
                <div className="hidden md:block md:w-1/2 md:pr-12">
                  {idx % 2 === 1 ? (
                    <div className="experience-card-wrap md:text-right">
                      <ExperienceCard exp={exp} alignRight />
                    </div>
                  ) : (
                    <div />
                  )}
                </div>

                {/* Card - always on right for mobile */}
                <div className="experience-card-wrap md:hidden pl-10">
                  <ExperienceCard exp={exp} />
                </div>

                <div className="experience-card-wrap hidden md:block md:w-1/2 md:pl-12">
                  {idx % 2 === 0 ? <ExperienceCard exp={exp} /> : <div />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp, alignRight = false }: { exp: typeof experiences[0]; alignRight?: boolean }) {
  return (
    <div className="group bg-slate-900/60 border border-slate-700 rounded-[var(--radius-card)] p-7 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 hover:border-slate-500 transition-all duration-300">
      <div className={`flex items-center gap-2 mb-2 ${alignRight ? 'md:justify-end' : ''}`}>
        <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-[var(--color-accents)] bg-[var(--color-accents)]/10 rounded-full">
          {exp.badge}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-white mb-1">
        {exp.title}
      </h3>
      <p className="text-sm text-slate-300 mb-1">{exp.company}</p>
      <p className="text-xs text-slate-400 font-medium mb-4">{exp.date}</p>
      <ul className="space-y-2">
        {exp.points.map((point, i) => (
          <li
            key={i}
            className={`flex items-start gap-2 text-sm text-slate-300 leading-relaxed ${
              alignRight ? 'md:flex-row-reverse md:text-right' : ''
            }`}
          >
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] flex-shrink-0" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
