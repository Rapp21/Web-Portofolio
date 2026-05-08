import { useRef } from 'react';
import { User, Code, Database, Globe } from 'lucide-react';
import SectionBackgroundElements from '../components/SectionBackgroundElements';
import { useScrollSectionAnimation } from '../hooks/use-scroll-section-animation';

export default function Profile() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollSectionAnimation(sectionRef);

  const stats = [
    { label: 'Tahun Pengalaman', value: '1+', icon: Code },
    { label: 'Proyek Selesai', value: '5+', icon: Globe },
    { label: 'Teknologi Dikuasai', value: '10+', icon: Database },
  ];

  return (
    <section
      id="profile"
      ref={sectionRef}
      className="relative py-[clamp(56px,7vh,88px)] bg-section-2 overflow-hidden"
    >
      <SectionBackgroundElements variant="left" />
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-square rounded-[2.5rem] bg-gradient-gray p-8 flex flex-col justify-center border border-slate-600/60 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl -mr-20 -mt-20 opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
              <div className="w-16 h-16 rounded-2xl bg-[var(--color-accent)] flex items-center justify-center mb-6 shadow-[0_8px_16px_-6px_rgba(37,99,235,0.5)] relative z-10">
                <User className="text-white" size={32} />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold leading-[1.2] text-white mb-4 relative z-10">
                Building digital experiences with modern tools.
              </h2>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-10">
            <span className="inline-block text-xs font-mono font-medium uppercase tracking-[0.05em] text-[var(--color-accents)] mb-4">
              Tentang Saya
            </span>
            <div className="prose prose-lg text-slate-200 mb-10">
              <p className="leading-relaxed mb-6 text-lg text-slate-200">
  Saya adalah lulusan Sarjana Komputer yang tertarik pada dunia teknologi dan pengembangan solusi digital. Saya senang belajar hal baru, mengembangkan kemampuan, dan siap beradaptasi dengan berbagai peluang di dunia kerja.
</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-slate-900/60 border border-slate-700 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-4">
                    <stat.icon className="text-[var(--color-accent)]" size={20} />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-slate-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
