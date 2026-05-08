import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, MapPin, Phone, Download, ArrowDown } from "lucide-react";
import SectionBackgroundElements from "../components/SectionBackgroundElements";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(textRef.current?.children || [], {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
      })
        .to(
          photoRef.current,
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
          },
          "-=0.4",
        )
        .to(
          ctaRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
          },
          "-=0.2",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[70vh] bg-section-1 flex items-center overflow-hidden"
    >
      <SectionBackgroundElements variant="hero" />
      <div className="max-w-[1200px] w-full mx-auto px-6 lg:px-8 relative z-10 pt-20">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left Column - Text */}
          <div
            ref={textRef}
            className="flex-1 max-w-[640px] text-center lg:text-left"
          >
            <div className="opacity-0 translate-y-5">
              <span className="inline-block px-4 py-2 rounded-full bg-[var(--color-accents)]/10 text-[var(--color-accents)] font-semibold text-sm mb-6 border border-[var(--color-accent)]/20">
                Halo, saya
              </span>
            </div>

            <h1 className="opacity-0 translate-y-5 text-[clamp(40px,5vw,72px)] font-extrabold leading-[1.05] tracking-tight text-white mb-6">
              Riandri Arrofi Putra Pratama
            </h1>

            <p className="opacity-0 translate-y-5 text-[clamp(18px,2vw,22px)] leading-relaxed text-slate-200 mb-8 font-medium"></p>

            <div className="opacity-0 translate-y-5 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 mb-10">
              <a
                href="mailto:rianpratama2103@gmail.com"
                className="flex items-center gap-2 text-sm text-slate-300 hover:text-[var(--color-accent)] transition-colors"
              >
                <Mail size={16} />
                rianpratama2103@gmail.com
              </a>
              <a
                href="tel:+6287865225229"
                className="flex items-center gap-2 text-sm text-slate-300 hover:text-[var(--color-accent)] transition-colors"
              >
                <Phone size={16} />
                +62 878 6522 5229
              </a>
              <span className="flex items-center gap-2 text-sm text-slate-300">
                <MapPin size={16} />
                Padang, Sumatera Barat
              </span>
            </div>

            <div
              ref={ctaRef}
              className="opacity-0 translate-y-5 flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <a
                href="/CV_Riandri_ATSbary.pdf"
                download
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-accent)] text-white text-sm font-semibold rounded-full hover:bg-[var(--color-accent-hover)] hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(37,99,235,0.5)]"
              >
                <Download size={18} />
                Download CV
              </a>
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-slate-500 text-white text-sm font-semibold rounded-full hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:-translate-y-1 transition-all duration-300"
              >
                View Projects
                <ArrowDown size={18} />
              </button>
            </div>
          </div>

          {/* Right Column - Photo */}
          <div ref={photoRef} className="opacity-0 scale-95 flex-shrink-0">
            <div className="relative w-[200px] md:w-[300px] lg:w-[300px] aspect-[459/685]">
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-accent)] to-[] rounded-full blur-3xl opacity-20 animate-pulse" />
              <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-8 border-slate-800 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 bg-slate-900">
                <img
                  src={
                    new URL(
                      "../image/Foto Ijazah_Riandri Arrofi Putra Pratama.jpg",
                      import.meta.url,
                    ).href
                  }
                  alt="Riandri Arrofi Putra Pratama"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
