import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import SectionBackgroundElements from '../components/SectionBackgroundElements';
import { useScrollSectionAnimation } from '../hooks/use-scroll-section-animation';

gsap.registerPlugin(ScrollTrigger);

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'rianpratama2103@gmail.com',
    href: 'mailto:rianpratama2103@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Padang, Sumatera Barat',
    href: null,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+62 878 6522 5229',
    href: 'tel:+6287865225229',
  },
];

const socials = [
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Github, label: 'GitHub', href: '#' },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);

  useScrollSectionAnimation(sectionRef);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(itemsRef.current?.children || [], {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
      });

      gsap.from(socialsRef.current?.children || [], {
        scrollTrigger: {
          trigger: socialsRef.current,
          start: 'top 95%',
        },
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden py-[clamp()] bg-section-8"
    >
      <SectionBackgroundElements variant="center" />
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-mono font-medium uppercase tracking-[0.05em] text-[var(--color-accents)] mb-3">
            Get In Touch
          </span>
          <h2 className="text-[clamp(28px,4vw,48px)] font-bold leading-[1.1] tracking-[-0.02em] text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-[15px] text-[var(--color-dark-muted)] max-w-[560px] mx-auto">
           <p>
  I am open to new opportunities and eager to learn, grow, and contribute in a dynamic and professional environment. Feel free to reach out.
</p>
          </p>
        </div>

        <div ref={itemsRef} className="grid sm:grid-cols-3 gap-6 max-w-[860px] mx-auto mb-10">
          {contacts.map((contact) => {
            const Icon = contact.icon;
            const content = (
              <div className="relative flex min-h-[190px] flex-col items-center justify-center overflow-hidden rounded-2xl p-6 text-center">
                <span className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[var(--color-accent)]/[0.07] blur-2xl transition-opacity duration-500 group-hover:opacity-80" />
                <span className="absolute -bottom-10 -left-8 h-24 w-24 rounded-full border border-dashed border-white/[0.12]" />
                <span className="absolute left-5 top-5 h-8 w-8 rounded-full border-2 border-white/[0.12]" />
                <svg
                  viewBox="0 0 92 18"
                  className="absolute bottom-5 right-5 h-5 w-24 text-white/[0.12]"
                >
                  <path
                    d="M2 9 C8 2 14 16 20 9 S32 2 38 9 50 16 56 9 68 2 74 9 86 16 90 9"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="3"
                  />
                </svg>
                <div className="relative w-14 h-14 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center mb-4 ring-1 ring-white/10 group-hover:bg-[var(--color-accent)]/20 transition-colors">
                  <Icon className="text-[var(--color-accent)]" size={28} />
                </div>
                <span className="relative text-sm text-[var(--color-dark-muted)] mb-1">{contact.label}</span>
                <span className="relative text-sm font-medium text-white group-hover:text-[var(--color-accent)] transition-colors">
                  {contact.value}
                </span>
              </div>
            );
            return contact.href ? (
              <a
                key={contact.label}
                href={contact.href}
                className="group rounded-2xl border border-white/10 bg-white/[0.035] shadow-[0_20px_60px_-40px_rgba(37,99,235,0.7)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]/30 hover:bg-white/[0.07]"
              >
                {content}
              </a>
            ) : (
              <div
                key={contact.label}
                className="group rounded-2xl border border-white/10 bg-white/[0.035] shadow-[0_20px_60px_-40px_rgba(37,99,235,0.7)] backdrop-blur-sm sm:-translate-y-3"
              >
                {content}
              </div>
            );
          })}
        </div>

        {/* Social Links */}
        <div ref={socialsRef} className="flex justify-center gap-4 mb-12">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/20 hover:text-white transition-all duration-300"
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center border-t border-white/10 pt-8">
          <p className="text-xs text-[var(--color-dark-muted)]">
            © 2026 Riandri Arrofi Putra Pratama
          </p>
        </div>
      </div>
    </section>
  );
}
