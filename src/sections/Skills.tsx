import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Code2,
  Database,
  FileSpreadsheet,
  Palette,
  Video,
  Users,
  MessageCircle,
  Lightbulb,
  Clock,
  SearchCheck,
  Monitor,
  Layout
} from 'lucide-react';
import SectionBackgroundElements from '../components/SectionBackgroundElements';
import { useScrollSectionAnimation } from '../hooks/use-scroll-section-animation';

gsap.registerPlugin(ScrollTrigger);

const hardSkills = [
  {
    category: 'Web Development',
    skills: 'HTML, CSS, JavaScript, PHP',
    icon: Code2,
    gradient: 'from-blue-600 to-cyan-500',
    shadow: 'shadow-cyan-500/20',
  },
  {
    category: 'Database Management',
    skills: 'SQL, MySQL',
    icon: Database,
    gradient: 'from-indigo-600 to-blue-600',
    shadow: 'shadow-blue-500/20',
  },
  {
    category: 'Data & Office Tools',
    skills: 'Microsoft Excel, Word, PowerPoint',
    icon: FileSpreadsheet,
    gradient: 'from-emerald-600 to-teal-500',
    shadow: 'shadow-emerald-500/20',
  },
  {
    category: 'Design Tools',
    skills: 'Canva, Photoshop',
    icon: Palette,
    gradient: 'from-orange-500 to-amber-500',
    shadow: 'shadow-orange-500/20',
  },
  {
    category: 'Video Editing Tools',
    skills: 'CapCut',
    icon: Video,
    gradient: 'from-rose-500 to-pink-500',
    shadow: 'shadow-pink-500/20',
  }
];

const softSkillsTop = [
  { name: 'Teamwork', icon: Users, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20', hover: 'hover:border-blue-500/50 hover:bg-blue-500/20' },
  { name: 'Communication', icon: MessageCircle, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', hover: 'hover:border-emerald-500/50 hover:bg-emerald-500/20' },
];

const softSkillsBottom = [
  { name: 'Problem Solving dan Analisis Manajemen', icon: Lightbulb, color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20', hover: 'hover:border-amber-500/50 hover:bg-amber-500/20' },
  { name: 'Waktu Adaptif terhadap Lingkungan Baru', icon: Clock, color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20', hover: 'hover:border-purple-500/50 hover:bg-purple-500/20' },
  { name: 'Teliti dan Detail', icon: SearchCheck, color: 'text-rose-400', bg: 'bg-rose-500/10', border: 'border-rose-500/20', hover: 'hover:border-rose-500/50 hover:bg-rose-500/20' },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const hardRef = useRef<HTMLDivElement>(null);
  const softRef = useRef<HTMLDivElement>(null);

  useScrollSectionAnimation(sectionRef);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const hardCards = hardRef.current?.querySelectorAll('.group');
      if (hardCards) {
        hardCards.forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, x: -60 },
            {
              opacity: 1,
              x: 0,
              duration: 0,
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
      }

      const softCards = softRef.current?.querySelectorAll('.group');
      if (softCards) {
        softCards.forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, x: 60 },
            {
              opacity: 1,
              x: 0,
              duration: 0,
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
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-[clamp(56px,7vh,88px)] bg-section-6 relative overflow-hidden"
    >
      <SectionBackgroundElements variant="right" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
         
          <h2 className="text-[clamp(32px,5vw,56px)] font-bold leading-[1.1] tracking-[-0.02em] text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Skills</span>
          </h2>
          <p className="text-[16px] text-[var(--color-dark-muted)] max-w-[600px] mx-auto">
            A comprehensive overview of my technical proficiencies and interpersonal skills developed through experience and continuous learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-12 lg:gap-16 relative items-start">
          {/* Divider */}
          <div className="hidden lg:block w-px h-full bg-gradient-to-b from-white/0 via-white/10 to-white/0"></div>

          {/* Left Column: Hard Skills */}
          <div className="lg:col-start-1" ref={hardRef}>
            <div className="flex flex-col gap-1 mb-10">
              <h3 className="text-2xl font-bold text-white tracking-wide flex items-center gap-3">
                HARD SKILLS
              </h3>
              <div className="flex items-center gap-2 text-sm text-[var(--color-dark-muted)]">
                <span>with Technology</span>
                <Monitor size={16} className="text-blue-400" />
                <Layout size={16} className="text-emerald-400" />
              </div>
            </div>

            <div className="space-y-4">
              {hardSkills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div 
                    key={skill.category}
                    className="group relative flex items-center gap-5 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
                  >
                    <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${skill.gradient} shadow-lg ${skill.shadow} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
                        {skill.category}
                      </h4>
                      <p className="text-sm text-[var(--color-dark-muted)] leading-snug">
                        {skill.skills}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Soft Skills */}
          <div className="lg:col-start-3" ref={softRef}>
            <div className="flex flex-col gap-1 mb-10 text-left lg:text-center xl:text-left">
              <h3 className="text-2xl font-bold text-white tracking-wide">
                SOFT SKILLS
              </h3>
              <div className="h-[22px]"></div> {/* Spacer to align with hard skills subtitle */}
            </div>

            <div className="space-y-4">
              {/* Top Row: Two Cards */}
              <div className="grid grid-cols-2 gap-4">
                {softSkillsTop.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div 
                      key={skill.name}
                      className={`flex flex-col items-center justify-center text-center gap-4 p-6 rounded-2xl ${skill.bg} border ${skill.border} ${skill.hover} transition-all duration-300 group cursor-default`}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-white/5 ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={24} />
                      </div>
                      <span className="text-sm font-semibold text-white">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Rows: Full Width Cards */}
              {softSkillsBottom.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div 
                    key={skill.name}
                    className={`flex items-center gap-5 p-5 rounded-2xl ${skill.bg} border ${skill.border} ${skill.hover} transition-all duration-300 group cursor-default`}
                  >
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-white/5 ${skill.color} group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                      <Icon size={24} />
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-white leading-tight">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
