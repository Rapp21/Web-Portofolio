import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Menu, X, Sparkles } from 'lucide-react';

const navItems = [
  { label: 'Profile', href: '#profile' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#profile');
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const tickingRef = useRef(false);

  useEffect(() => {
    const updateNavState = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);

      const viewportProbe = scrollTop + window.innerHeight * 0.35;
      let current = navItems[0].href;

      for (const item of navItems) {
        const el = document.querySelector(item.href) as HTMLElement | null;
        if (!el) continue;
        if (viewportProbe >= el.offsetTop) current = item.href;
      }

      setActiveSection((prev) => (prev === current ? prev : current));
    };

    const handleScrollOrResize = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(() => {
        updateNavState();
        tickingRef.current = false;
      });
    };

    updateNavState();
    window.addEventListener('scroll', handleScrollOrResize, { passive: true });
    window.addEventListener('resize', handleScrollOrResize);
    return () => {
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.to(menuRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.45,
        ease: 'power3.out',
        display: 'block'
      });
      gsap.fromTo('.mobile-item', 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: 'power2.out', delay: 0.1 }
      );
      document.body.style.overflow = 'hidden';
    } else {
      gsap.to(menuRef.current, {
        x: '100%',
        opacity: 0,
        duration: 0.35,
        ease: 'power3.in',
        onComplete: () => {
          if (menuRef.current) menuRef.current.style.display = 'none';
        }
      });
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (href === 'body') {
      setActiveSection('#profile');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const target = document.querySelector(href) as HTMLElement | null;
    if (!target) return;

    // Update active state immediately so nav feels responsive.
    setActiveSection(href);

    const navHeight = navRef.current?.offsetHeight ?? 80;
    const top = Math.max(target.offsetTop - navHeight - 12, 0);
    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-3 bg-slate-900/75 backdrop-blur-xl border-b border-slate-700' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => scrollToSection(e, 'body')}
            className="inline-flex items-center gap-2 text-xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity"
          >
            <Sparkles size={30} className="text-[var(--color-accent)]" />
            Portofolio Saya<span className="text-[var(--color-accent)]"></span>
          </a>

          {/* Desktop Nav */}
          <div
            className={`hidden md:flex items-center gap-1 p-1 rounded-full border transition-all duration-300 ${
              isScrolled
                ? 'bg-slate-900/80 border-slate-700 shadow-[var(--shadow-nav)]'
                : 'bg-slate-900/50 border-slate-600'
            }`}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 relative ${
                  activeSection === item.href
                    ? 'text-white bg-[var(--color-accent)] shadow-[0_8px_20px_-12px_rgba(37,99,235,0.8)]'
                    : 'text-slate-300 hover:text-[var(--color-accent)] hover:bg-slate-800/80'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-slate-900/70 border border-slate-700 text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white transition-colors"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        ref={menuRef}
        className="fixed inset-0 z-[60] bg-gradient-to-br from-slate-900 to-slate-800 hidden translate-x-full"
      >
        <div className="absolute top-6 right-6">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 border border-slate-700 text-white hover:bg-slate-700 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center h-full gap-6 px-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={`mobile-item min-w-[220px] text-center text-xl font-semibold rounded-2xl px-6 py-3 transition-all duration-300 ${
                activeSection === item.href
                  ? 'bg-[var(--color-accent)] text-white shadow-[0_8px_22px_-12px_rgba(37,99,235,0.8)]'
                  : 'bg-slate-800 text-white hover:text-[var(--color-accent)]'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
