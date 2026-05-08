type SectionBackgroundElementsProps = {
  variant?: 'hero' | 'left' | 'right' | 'center' | 'bottom';
  showPanels?: boolean;
};

const variants = {
  hero: {
    glowA: 'top-[14%] right-[8%] h-[420px] w-[420px] bg-cyan-300/[0.08]',
    glowB: 'bottom-[8%] left-[6%] h-[320px] w-[320px] bg-blue-400/[0.06]',
    ring: 'right-[10%] top-[22%] h-72 w-72',
    circle: 'left-[5%] top-[28%]',
    wave: 'right-[3%] bottom-[12%]',
    panel: 'left-[34%] top-[-18%] h-[135%] w-[190px] rotate-[-42deg]',
  },
  left: {
    glowA: 'top-[18%] left-[7%] h-[360px] w-[360px] bg-sky-300/[0.07]',
    glowB: 'bottom-[8%] right-[10%] h-[280px] w-[280px] bg-indigo-300/[0.055]',
    ring: 'left-[6%] top-[18%] h-52 w-52',
    circle: 'right-[8%] bottom-[22%]',
    wave: 'left-[4%] bottom-[10%]',
    panel: 'right-[22%] top-[-22%] h-[130%] w-[170px] rotate-[-42deg]',
  },
  right: {
    glowA: 'top-[16%] right-[7%] h-[380px] w-[380px] bg-blue-300/[0.075]',
    glowB: 'bottom-[10%] left-[8%] h-[300px] w-[300px] bg-violet-300/[0.05]',
    ring: 'right-[7%] top-[18%] h-56 w-56',
    circle: 'left-[7%] bottom-[22%]',
    wave: 'right-[4%] bottom-[12%]',
    panel: 'left-[28%] top-[-20%] h-[130%] w-[175px] rotate-[-42deg]',
  },
  center: {
    glowA: 'top-[18%] left-1/2 h-[420px] w-[420px] -translate-x-1/2 bg-cyan-300/[0.06]',
    glowB: 'bottom-[5%] right-[8%] h-[280px] w-[280px] bg-blue-300/[0.055]',
    ring: 'left-1/2 top-[20%] h-60 w-60 -translate-x-1/2',
    circle: 'left-[9%] bottom-[18%]',
    wave: 'right-[6%] bottom-[11%]',
    panel: 'left-[48%] top-[-24%] h-[138%] w-[180px] rotate-[-42deg]',
  },
  bottom: {
    glowA: 'bottom-[10%] left-[12%] h-[380px] w-[380px] bg-sky-300/[0.065]',
    glowB: 'top-[12%] right-[12%] h-[320px] w-[320px] bg-indigo-300/[0.055]',
    ring: 'right-[9%] bottom-[16%] h-56 w-56',
    circle: 'left-[8%] top-[22%]',
    wave: 'left-[6%] bottom-[10%]',
    panel: 'right-[30%] top-[-22%] h-[132%] w-[175px] rotate-[-42deg]',
  },
};

export default function SectionBackgroundElements({
  variant = 'right',
  showPanels = false,
}: SectionBackgroundElementsProps) {
  const style = variants[variant];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className={`absolute rounded-full blur-[110px] ${style.glowA}`} />
      <div className={`absolute rounded-full blur-[95px] ${style.glowB}`} />

      {showPanels && (
        <>
          <div className={`absolute ${style.panel}`}>
            <div className="h-full w-full bg-white/[0.045]" />
          </div>
          <div className={`absolute ${style.panel} translate-x-28`}>
            <div className="h-full w-full border-x border-white/[0.035]" />
          </div>
        </>
      )}

      <div
        className={`absolute ${style.ring} rounded-full border-[10px] border-dashed border-white/[0.16]`}
      />
      <div
        className={`absolute ${style.ring} scale-[0.74] rounded-full border border-white/[0.13]`}
      />
      <div
        className={`absolute ${style.circle} h-10 w-10 rounded-full border-4 border-white/[0.22]`}
      />
      <div className={`absolute ${style.wave} h-8 w-36`}>
        <svg viewBox="0 0 144 24" className="h-full w-full">
          <path
            d="M2 12 C10 2 18 22 26 12 S42 2 50 12 66 22 74 12 90 2 98 12 114 22 122 12 138 2 142 12"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="4"
            className="text-white/[0.2]"
          />
        </svg>
      </div>
    </div>
  );
}
