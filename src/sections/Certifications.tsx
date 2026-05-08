import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, CheckCircle, Download, ExternalLink, Image as ImageIcon } from 'lucide-react';
import SectionBackgroundElements from '../components/SectionBackgroundElements';
import { useScrollSectionAnimation } from '../hooks/use-scroll-section-animation';
import certificateImage from '../image/fotoser.png';

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  {
    title: 'MSIB Certificate – Independent Study Web Development (Batch 7)',
    issuer: 'Infinite Learning / Kampus Merdeka',
    number: 'No: 4649/IL-SIB/XII/2024',
    date: 'Sep – Des 2024',
    status: 'Completed',
  },
  {
    title: 'Surat Keterangan Magang – PT PNM Cabang Padang',
    issuer: 'PT Permodalan Nasional Madani',
    number: 'No: S-516/PNM-PDG/SDM/VII/2025',
    date: 'Mei – Juli 2025',
    status: 'Completed',
  },
];

export default function Certifications() {
  const sectionRef = useRef<HTMLElement>(null);
  const certificateRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useScrollSectionAnimation(sectionRef);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current?.children || [], {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
        opacity: 0,
        x: -40,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power2.out',
      });

      gsap.from(certificateRef.current, {
        scrollTrigger: {
          trigger: certificateRef.current,
          start: 'top 88%',
        },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="py-[clamp(56px,7vh,88px)] relative overflow-hidden bg-section-7"
    >
      <SectionBackgroundElements variant="bottom" />
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-10">
          <span className="inline-block text-xs font-mono font-medium uppercase tracking-[0.05em] text-[var(--color-accents)] mb-3">
            Certifications
          </span>
          <h2 className="text-[clamp(28px,4vw,48px)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
            Credentials & Awards
          </h2>
        </div>

        <div
          ref={certificateRef}
          className="mb-10 overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 rounded-[var(--radius-card)] shadow-[var(--shadow-card)]"
        >
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-7 lg:p-10 flex flex-col justify-between gap-6">
              <div>
                <div className="w-14 h-14 rounded-xl bg-[var(--color-accent)]/20 flex items-center justify-center mb-6 border border-[var(--color-accent)]/30">
                  <ImageIcon className="text-[var(--color-accent)]" size={28} />
                </div>
                <span className="inline-block text-xs font-mono font-medium uppercase tracking-[0.05em] text-[var(--color-accent)] mb-3">
                  Featured Certificate
                </span>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Sertifikat Keahlian
                </h3>
                <p className="text-[15px] leading-relaxed text-white/70">
                  Berikut adalah sertifikat penghargaan dan pencapaian profesional yang membuktikan kompetensi di bidang terkait. 
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href={certificateImage}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white text-sm font-semibold rounded-[var(--radius-button)] hover:bg-[var(--color-accent-hover)] transition-colors shadow-lg shadow-[var(--color-accent)]/20"
                >
                  <ExternalLink size={17} />
                  Lihat Penuh
                </a>
                <a
                  href={certificateImage}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white text-sm font-semibold rounded-[var(--radius-button)] hover:border-white/40 hover:bg-white/5 transition-colors"
                >
                  <Download size={17} />
                  Unduh Gambar
                </a>
              </div>
            </div>

            <a
              href={certificateImage}
              target="_blank"
              rel="noreferrer"
              className="relative block min-h-[320px] bg-black/20 overflow-hidden group border-l border-white/5"
              aria-label="Open certificate image"
            >
              <div className="w-full h-full flex items-center justify-center p-6">
                <img 
                  src={certificateImage} 
                  alt="Sertifikat" 
                  className="w-full h-auto max-h-[450px] object-contain rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
            </a>
          </div>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[var(--radius-card)] p-7 shadow-[var(--shadow-card)] hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center border border-[var(--color-accent)]/20">
                  <Award className="text-[var(--color-accent)]" size={24} />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[var(--color-success)] bg-[var(--color-success)]/10 rounded-full border border-[var(--color-success)]/20">
                  <CheckCircle size={14} />
                  {cert.status}
                </span>
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-[15px] text-white/70 mb-1">
                  {cert.issuer}
                </p>
                <p className="text-xs font-mono text-white/50 mb-4">
                  {cert.number}
                </p>
                <div className="inline-flex items-center px-3 py-1 text-xs font-medium text-[var(--color-accent)] bg-[var(--color-accent)]/10 rounded-full border border-[var(--color-accent)]/20">
                  {cert.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
