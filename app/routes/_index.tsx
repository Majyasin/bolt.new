import { json, type MetaFunction } from '@remix-run/cloudflare';
import { useEffect, useMemo, useRef, useState, type SVGProps } from 'react';
import { Link, useNavigate } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'Layerbase — Doodle your next website' },
    {
      name: 'description',
      content:
        'Layerbase helps you design production-ready websites through playful, AI-guided conversations and a curated library of whimsical components.',
    },
  ];
};

export const loader = () => json({});

const examples = [
  'a SaaS landing page with pricing tiers and testimonials',
  'a playful portfolio with project spotlights and doodle dividers',
  'an onboarding flow with illustrated steps and progress tracker',
  'an e-commerce site with bento product grid and glowing CTA',
];

const chips = ['Dashboard', 'Portfolio', 'SaaS Landing', 'E-commerce'];

const heroStats = [
  { label: 'Component variants', value: '26' },
  { label: 'Average export time', value: '37s' },
  { label: 'Design satisfaction', value: '98%' },
];

const features = [
  {
    title: 'Design-first AI conversations',
    description:
      'Explain your idea in your own words and Layerbase replies with styled layouts, color palettes, and motion suggestions like a friendly art director.',
    accent: '#ffe4f3',
    icon: PaletteIcon,
  },
  {
    title: 'Curated doodle system',
    description:
      'Pick from whimsical heroes, features, pricing, and testimonials that all share a playful handmade aesthetic and accessible structure.',
    accent: '#dff8ff',
    icon: LayersIcon,
  },
  {
    title: 'Production-ready exports',
    description:
      'Export to React, HTML, or copy Tailwind snippets. Every component is responsive, accessible, and obsessively aligned.',
    accent: '#fff5d8',
    icon: CodeIcon,
  },
];

const process = [
  {
    title: 'Describe the vibe',
    description:
      '“Give me a bubbly SaaS hero with a rainbow CTA” — the chat understands tone, audience, and structure instantly.',
    spark: 'analyzing',
  },
  {
    title: 'Watch the AI sketch',
    description:
      'Layerbase maps your idea to the doodle component library, choosing layouts, borders, illustrations, and microcopy.',
    spark: 'designing',
  },
  {
    title: 'Refine like a designer',
    description:
      'Swap variants, tweak text inline, and sprinkle extra charm. Layerbase keeps spacing, color, and rhythm consistent.',
    spark: 'polishing',
  },
];

const libraryShowcase = [
  {
    title: 'Heroes',
    description: 'Split-screen, gradient, fullscreen, and doodled minimal styles.',
    swatch: ['#ffb5e5', '#ffc9b9', '#fff176'],
  },
  {
    title: 'Feature Grids',
    description: 'Bento grids, illustrated cards, timelines, and icon stories.',
    swatch: ['#d5f5ff', '#a8e6ff', '#ffd7ef'],
  },
  {
    title: 'Pricing',
    description: 'Toggleable plans, pill cards, and doodle-backed tier badges.',
    swatch: ['#ffe36e', '#ffbdf2', '#e0f2fe'],
  },
  {
    title: 'Testimonials',
    description: 'Character portraits, conversation bubbles, and happy scribbles.',
    swatch: ['#cbd9ff', '#ffcfe1', '#fdf2b0'],
  },
];

type IconProps = SVGProps<SVGSVGElement>;

const ArrowRightIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

const ChevronDownIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const GlobeIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <circle cx={12} cy={12} r={9} />
    <path d="M3 12h18" />
    <path d="M12 3a14 14 0 0 1 0 18" />
    <path d="M12 3a14 14 0 0 0 0 18" />
  </svg>
);

const LockIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <rect x={5} y={11} width={14} height={10} rx={2} />
    <path d="M7 11V8a5 5 0 0 1 10 0v3" />
  </svg>
);

const SparklesIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M12 3v4" />
    <path d="M12 17v4" />
    <path d="M4.9 7.5 8 9" />
    <path d="M16 15l3.1 1.5" />
    <path d="M4.9 16.5 8 15" />
    <path d="m16 9 3.1-1.5" />
    <path d="M12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z" />
  </svg>
);

const PaletteIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M12 3a9 9 0 0 0-9 9 7 7 0 0 0 7 7h1.1a1.9 1.9 0 0 1 0 3.8A9 9 0 0 0 21 15a9 9 0 0 0-9-12Z" />
    <circle cx={7.5} cy={10.5} r={1} fill="currentColor" stroke="none" />
    <circle cx={12} cy={7.5} r={1} fill="currentColor" stroke="none" />
    <circle cx={16.5} cy={10.5} r={1} fill="currentColor" stroke="none" />
    <circle cx={12} cy={14.5} r={1} fill="currentColor" stroke="none" />
  </svg>
);

const LayersIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="m12 2 9 4.5-9 4.5-9-4.5Z" />
    <path d="m3 12 9 4.5 9-4.5" />
    <path d="m3 17 9 4.5 9-4.5" />
  </svg>
);

const CodeIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="m8 7-4 5 4 5" />
    <path d="m16 7 4 5-4 5" />
    <path d="m12 5-2 14" />
  </svg>
);

const MessageIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M20 15a2 2 0 0 1-2 2H8l-4 4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2Z" />
  </svg>
);

const CursorIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="m4.5 3 14 7.3-6.5 2.7-2.7 6.5Z" />
  </svg>
);

const HeartIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 21s-5-3.5-8-7.2S1 4.5 5.6 3c2.7-.9 4.9 1 6.4 2.8C13.5 4 15.8 2 18.4 3 23 4.5 22 10.8 20 13.8s-8 7.2-8 7.2" />
  </svg>
);

const ScribbleUnderline = (props: IconProps) => (
  <svg viewBox="0 0 220 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M8 19c44-10 79-15 120-14 20 0 50 4 66 8 6 1 6 9-1 10-27 4-69 4-100 4-38 0-62 0-92-2-7 0-8-6-2-6 26-2 46-4 72-7"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
    />
  </svg>
);

const SparkleBurst = (props: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m32 8 3.6 8.8L44 20l-8.4 3.2L32 32l-3.6-8.8L20 20l8.4-3.2L32 8Z"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <path d="m13 36 4 2-4 2-2 4-2-4-4-2 4-2 2-4 2 4Z" fill="currentColor" />
    <path d="m52 40 2.5 5.5L60 48l-5.5 2.5L52 56l-2.5-5.5L44 48l5.5-2.5L52 40Z" fill="currentColor" />
  </svg>
);

const StageBadge = ({ stage }: { stage: string }) => (
  <span className="inline-flex items-center gap-2 rounded-full border-[3px] border-[#1a144b] bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-[#1a144b]">
    <span className="inline-block h-2 w-2 rounded-full bg-[#ff6ec7]" />
    {stage}
  </span>
);

const floatingShapes = [
  {
    className: 'left-[6%] top-[16%] bg-[#ffe4f3] shadow-[0_12px_0_#1a144b]',
    size: 120,
    animation: 'floaty-a',
    delay: 0,
  },
  {
    className: 'right-[8%] top-[10%] bg-[#dff8ff] shadow-[0_12px_0_#1a144b]',
    size: 160,
    animation: 'floaty-b',
    delay: 1.5,
  },
  {
    className: 'left-[12%] bottom-[18%] bg-[#fff5d8] shadow-[0_12px_0_#1a144b]',
    size: 140,
    animation: 'floaty-c',
    delay: 2.4,
  },
  {
    className: 'right-[16%] bottom-[22%] bg-[#e3e3ff] shadow-[0_12px_0_#1a144b]',
    size: 110,
    animation: 'floaty-d',
    delay: 0.8,
  },
] as const;

export default function Index() {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const [prompt, setPrompt] = useState('');
  const [placeholder, setPlaceholder] = useState('');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [visibility, setVisibility] = useState<'Public' | 'Private'>('Public');
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const currentText = examples[placeholderIndex];
    let charIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const type = () => {
      if (charIndex <= currentText.length) {
        setPlaceholder(currentText.slice(0, charIndex));
        charIndex += 1;
        timeoutId = setTimeout(type, 36);
      } else {
        timeoutId = setTimeout(() => {
          setPlaceholderIndex((prev) => (prev + 1) % examples.length);
        }, 2300);
      }
    };

    timeoutId = setTimeout(type, 120);

    return () => clearTimeout(timeoutId);
  }, [placeholderIndex]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && prompt.trim()) {
      navigate(`/editor?prompt=${encodeURIComponent(prompt)}`);
    }
  };

  const fillPrompt = (text: string) => {
    setPrompt(`a ${text.toLowerCase()} website with `);
    inputRef.current?.focus();
  };

  const placeholderWithCaret = useMemo(() => (placeholder.length ? `${placeholder}|` : '|'), [placeholder]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f6f3ff] text-[#1b1740]">
      <style>{`
        @keyframes floaty-a {
          0% { transform: translateY(0) rotate(8deg); }
          50% { transform: translateY(-14px) rotate(12deg); }
          100% { transform: translateY(0) rotate(8deg); }
        }
        @keyframes floaty-b {
          0% { transform: translateY(0) rotate(-6deg); }
          50% { transform: translateY(-16px) rotate(-10deg); }
          100% { transform: translateY(0) rotate(-6deg); }
        }
        @keyframes floaty-c {
          0% { transform: translateY(0) rotate(-8deg); }
          50% { transform: translateY(-12px) rotate(-4deg); }
          100% { transform: translateY(0) rotate(-8deg); }
        }
        @keyframes floaty-d {
          0% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-18px) rotate(16deg); }
          100% { transform: translateY(0) rotate(12deg); }
        }
        @keyframes wiggle {
          0% { transform: rotate(-1.5deg); }
          50% { transform: rotate(2deg); }
          100% { transform: rotate(-1.5deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.08); opacity: 1; }
        }
        .doodle-pattern {
          background-image:
            radial-gradient(circle at 1px 1px, rgba(26, 20, 75, 0.18) 1px, transparent 0),
            radial-gradient(circle at 3px 3px, rgba(255, 110, 199, 0.16) 1.5px, transparent 0);
          background-size: 30px 30px;
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#ffd9f5_0%,_#f9f5ff_40%,_#f7f3ff_70%,_#f5fbff_100%)]" />
        <div className="absolute -left-32 top-1/2 h-[26rem] w-[26rem] -translate-y-1/2 rounded-full bg-[#ffecb3]/60 blur-3xl" />
        <div className="absolute -right-24 top-24 h-[30rem] w-[30rem] rounded-full bg-[#c5f5ff]/60 blur-[120px]" />
        <div className="absolute left-1/2 top-[12%] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[#d0d7ff]/50 blur-[110px]" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center pt-24">
        <div className="relative h-48 w-[36rem] sm:w-[42rem]">
          <div className="absolute inset-0 rounded-[3rem] border-[4px] border-[#1a144b] bg-[linear-gradient(120deg,_#ffb9de,_#ffe8c8,_#d5f5ff)]" />
          <div className="absolute inset-3 rounded-[2.5rem] border-[3px] border-[#1a144b] bg-[#f7f1ff]" />
        </div>
      </div>

      <div className="absolute left-1/2 top-[18%] -z-10 flex -translate-x-1/2 flex-col items-center">
        <div className="relative h-36 w-[42rem] max-w-[90vw]">
          <div
            className="absolute inset-0 rounded-[3rem] border-[4px] border-[#1a144b] bg-[#fffae6]"
            style={{ animation: 'wiggle 10s ease-in-out infinite' }}
          />
          <div className="absolute inset-[18px] rounded-[2rem] border-[3px] border-[#1a144b] bg-[conic-gradient(from_120deg,_#ffe4f3,_#d8f0ff,_#fff5d8,_#ffe4f3)] opacity-80" />
        </div>
      </div>

      {floatingShapes.map((shape) => (
        <div
          key={shape.className}
          className={`pointer-events-none absolute -z-10 rounded-[36px] border-[4px] border-[#1a144b] ${shape.className}`}
          style={{
            width: shape.size,
            height: shape.size,
            animation: `${shape.animation} 8s ease-in-out ${shape.delay}s infinite`,
          }}
        >
          <div className="absolute left-4 top-4 h-4 w-10 rounded-full border-[3px] border-[#1a144b] bg-white/70" />
          <div className="absolute bottom-6 right-6 h-6 w-6 rounded-full border-[3px] border-[#1a144b] bg-white/70" />
        </div>
      ))}

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 pb-6 pt-12">
        <Link
          to="/"
          className="flex items-center gap-3 rounded-[18px] border-[3px] border-[#1a144b] bg-white/70 px-4 py-2 shadow-[0_6px_0_#1a144b] transition-transform hover:-translate-y-1"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-[#1a144b] bg-[radial-gradient(circle_at_top,_#c5f5ff,_#b9b1ff)]">
            <SparklesIcon className="h-5 w-5 text-[#1a144b]" />
          </div>
          <span className="font-display text-xl font-semibold tracking-tight">Layerbase</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-[#3d2c8d] lg:flex">
          <Link
            to="/pricing"
            className="rounded-full border-[3px] border-transparent px-4 py-2 transition-all hover:border-[#1a144b] hover:bg-white/60"
          >
            Pricing
          </Link>
          <Link
            to="/docs"
            className="rounded-full border-[3px] border-transparent px-4 py-2 transition-all hover:border-[#1a144b] hover:bg-white/60"
          >
            Docs
          </Link>
          <Link
            to="/editor"
            className="rounded-full border-[3px] border-transparent px-4 py-2 transition-all hover:border-[#1a144b] hover:bg-white/60"
          >
            Editor
          </Link>
        </nav>

        <div className="flex items-center gap-3 text-sm font-medium">
          <Link
            to="/login"
            className="rounded-full border-[3px] border-[#1a144b] bg-white/60 px-4 py-2 transition-transform hover:-translate-y-0.5"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="rounded-full border-[3px] border-[#1a144b] bg-[#ffe36e] px-5 py-2 shadow-[0_6px_0_#1a144b] transition-transform hover:-translate-y-0.5"
          >
            Sign up
          </Link>
        </div>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24">
        <section className="relative rounded-[40px] border-[4px] border-[#1a144b] bg-white/80 p-10 pt-12 shadow-[0_20px_0_#1a144b]/40">
          <div
            className="absolute -top-16 right-10 hidden h-16 w-16 rounded-full border-[4px] border-[#1a144b] bg-[#ffd8f1] lg:block"
            style={{ animation: 'pulse 4s ease-in-out infinite' }}
          >
            <SparkleBurst className="h-full w-full text-[#1a144b] opacity-60" />
          </div>
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,_1fr)_420px]">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 rounded-full border-[3px] border-[#1a144b] bg-[#ffe4f3]/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#1a144b] shadow-[0_6px_0_#1a144b]">
                Playful design engine
              </div>
              <div className="relative mt-6">
                <h1 className="max-w-2xl text-balance font-display text-4xl font-black leading-tight tracking-tight text-[#1a144b] sm:text-5xl md:text-6xl">
                  Turn your ideas into{' '}
                  <span className="relative inline-block text-[#7b5bff]">
                    layered masterpieces
                    <ScribbleUnderline className="pointer-events-none absolute -bottom-6 left-1/2 h-7 w-[220px] -translate-x-1/2 text-[#ff6ec7]/80" />
                  </span>
                </h1>
              </div>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#3d2c8d] sm:text-xl">
                Layerbase blends conversation-driven AI with a curated doodle component library so every export feels
                joyful, polished, and ready to ship. No blank canvases—just magical collaboration.
              </p>

              <div className="mt-12 w-full max-w-3xl">
                <div className="relative">
                  <div className="absolute -inset-2 rounded-[28px] bg-[linear-gradient(135deg,_rgba(255,195,235,0.8),_rgba(188,223,255,0.8))] blur-xl" />
                  <div className="relative rounded-[28px] border-[4px] border-[#1a144b] bg-white/85 p-3 shadow-[0_12px_0_#1a144b]">
                    <div className="flex flex-col gap-3 md:flex-row md:items-center">
                      <div className="relative w-full md:w-auto">
                        <button
                          type="button"
                          onClick={() => setShowDropdown((value) => !value)}
                          className="flex w-full items-center justify-between gap-2 rounded-[20px] border-[3px] border-[#1a144b] bg-[#ffe4f3]/80 px-4 py-3 text-sm font-semibold text-[#1a144b] transition-transform hover:-translate-y-0.5 md:w-[8.5rem]"
                        >
                          <div className="flex items-center gap-2">
                            <GlobeIcon className="h-4 w-4" />
                            <span>{visibility}</span>
                          </div>
                          <ChevronDownIcon className="h-4 w-4" />
                        </button>
                        {showDropdown ? (
                          <div className="absolute left-0 top-[115%] w-full overflow-hidden rounded-[20px] border-[3px] border-[#1a144b] bg-white/95 text-left shadow-[0_12px_0_#1a144b]">
                            <button
                              type="button"
                              onClick={() => {
                                setVisibility('Public');
                                setShowDropdown(false);
                              }}
                              className="flex w-full items-center gap-3 px-4 py-3 text-sm font-semibold text-[#1a144b] transition-colors hover:bg-[#ffe4f3]/60"
                            >
                              <GlobeIcon className="h-4 w-4" /> Public
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                setVisibility('Private');
                                setShowDropdown(false);
                              }}
                              className="flex w-full items-center gap-3 px-4 py-3 text-sm font-semibold text-[#1a144b] transition-colors hover:bg-[#ffe4f3]/60"
                            >
                              <LockIcon className="h-4 w-4" /> Private
                            </button>
                          </div>
                        ) : null}
                      </div>

                      <div className="flex-1 rounded-[20px] border-[3px] border-[#1a144b] bg-white/70 px-4 py-3 text-left">
                        <input
                          ref={inputRef}
                          type="text"
                          value={prompt}
                          onChange={(event) => setPrompt(event.target.value)}
                          onKeyDown={handleKeyDown}
                          placeholder={placeholderWithCaret}
                          className="w-full bg-transparent text-base font-medium text-[#1a144b] outline-none placeholder:text-[#1a144b]/40"
                        />
                      </div>

                      <Link
                        to={`/editor?prompt=${encodeURIComponent(prompt)}`}
                        prefetch="intent"
                        className="group flex shrink-0 items-center gap-2 rounded-[20px] border-[3px] border-[#1a144b] bg-[#9bf0ff] px-6 py-3 text-base font-semibold text-[#1a144b] shadow-[0_8px_0_#1a144b] transition-transform hover:-translate-y-1"
                      >
                        Build it
                        <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {chips.map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => fillPrompt(chip)}
                    className="rounded-full border-[3px] border-[#1a144b] bg-white/70 px-5 py-2 text-sm font-semibold text-[#1a144b] transition-transform hover:-translate-y-0.5 hover:bg-[#ffe4f3]/60"
                  >
                    {chip}
                  </button>
                ))}
              </div>

              <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[24px] border-[3px] border-[#1a144b] bg-white/75 p-5 text-left shadow-[0_8px_0_#1a144b]/50"
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3d2c8d]">{stat.label}</div>
                    <div className="mt-2 text-2xl font-bold text-[#1a144b]">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex h-full flex-col gap-6 rounded-[32px] border-[4px] border-[#1a144b] bg-[linear-gradient(180deg,_rgba(255,228,243,0.9),_rgba(196,225,255,0.9))] p-6 shadow-[0_16px_0_#1a144b]">
              <div className="absolute -top-5 left-10 inline-flex items-center gap-2 rounded-full border-[3px] border-[#1a144b] bg-[#fff5d8]/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#1a144b]">
                Live concept sketch
              </div>

              <div className="relative rounded-[24px] border-[3px] border-[#1a144b] bg-white/90 p-5 shadow-[0_10px_0_#1a144b]/40">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-[#1a144b] bg-[#ffe4f3]">
                    <MessageIcon className="h-5 w-5 text-[#1a144b]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1a144b]">Layerbase</p>
                    <p className="text-xs text-[#3d2c8d]">AI art director</p>
                  </div>
                </div>
                <div className="mt-4 space-y-3 text-sm text-[#3d2c8d]">
                  <p>“I hear you! Let’s pair a split hero with a doodled gradient and cheerful character art.”</p>
                  <p className="rounded-[18px] border-[3px] border-[#1a144b] bg-[#fff5d8]/80 px-3 py-2 font-medium text-[#1a144b]">
                    • Feature grid with playful icons
                    <br />• Pricing cards with toggle badge
                    <br />• Wall of floating testimonials
                  </p>
                </div>
              </div>

              <div className="rounded-[24px] border-[3px] border-[#1a144b] bg-white/85 p-5 shadow-[0_10px_0_#1a144b]/40">
                <StageBadge stage="Thinking" />
                <div className="mt-4 grid gap-3">
                  {process.map((step) => (
                    <div
                      key={step.title}
                      className="flex items-start gap-3 rounded-[18px] border-[3px] border-[#1a144b] bg-white/70 p-3"
                    >
                      <div className="mt-1 h-10 w-10 rounded-[14px] border-[3px] border-[#1a144b] bg-[#ffe4f3]/80">
                        <CursorIcon className="h-full w-full text-[#1a144b]/70" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#1a144b]">{step.title}</p>
                        <p className="text-xs text-[#3d2c8d]">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[24px] border-[3px] border-[#1a144b] bg-white/90 p-5 shadow-[0_10px_0_#1a144b]/40">
                <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full border-[4px] border-[#1a144b] bg-[#ff91d8]/80" />
                <div className="absolute -bottom-8 left-10 h-20 w-20 rounded-full border-[4px] border-[#1a144b] bg-[#c5f5ff]/70" />
                <p className="relative text-sm font-semibold text-[#1a144b]">
                  “Layerbase feels like a creative partner that doodles with me but respects production timelines.”
                </p>
                <div className="relative mt-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border-[3px] border-[#1a144b] bg-[#ffe36e]">
                    <HeartIcon className="h-4 w-4 text-[#1a144b]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3d2c8d]">
                      Prototype feedback
                    </p>
                    <p className="text-sm text-[#1a144b]">Beta designer, Layerbase community</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative rounded-[36px] border-[4px] border-[#1a144b] bg-white/80 p-10 shadow-[0_16px_0_#1a144b]/40">
          <div className="absolute -top-10 left-8 inline-flex items-center gap-2 rounded-full border-[3px] border-[#1a144b] bg-[#dff8ff]/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#1a144b]">
            Why designers choose Layerbase
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="relative flex flex-col gap-4 rounded-[28px] border-[4px] border-[#1a144b] bg-white/85 p-6 text-left shadow-[0_12px_0_#1a144b]/40 transition-transform hover:-translate-y-1 hover:bg-[#ffe4f3]/40"
              >
                <div
                  className="absolute -right-6 top-4 h-16 w-16 rounded-[22px] border-[3px] border-[#1a144b]"
                  style={{
                    backgroundColor: feature.accent,
                    animation: 'pulse 6s ease-in-out infinite',
                    animationDelay: '0.5s',
                  }}
                />
                <div className="z-10 inline-flex h-12 w-12 items-center justify-center rounded-[16px] border-[3px] border-[#1a144b] bg-white/90">
                  <feature.icon className="h-6 w-6 text-[#1a144b]" />
                </div>
                <h3 className="z-10 text-lg font-semibold text-[#1a144b]">{feature.title}</h3>
                <p className="z-10 text-sm leading-relaxed text-[#3d2c8d]">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="relative grid gap-10 rounded-[36px] border-[4px] border-[#1a144b] bg-white/85 p-10 shadow-[0_16px_0_#1a144b]/40 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <StageBadge stage="Component library" />
            <h2 className="mt-6 text-3xl font-black text-[#1a144b]">A doodle toolkit curated for modern products</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#3d2c8d]">
              Swap component variants without breaking flow. Every hero, feature grid, pricing table, and testimonial is
              lovingly illustrated and accessibility checked so you can stay in the creative zone.
            </p>
            <div className="mt-8 grid gap-4 text-sm text-[#3d2c8d]">
              <div className="flex items-center gap-3">
                <SparklesIcon className="h-5 w-5 text-[#ff6ec7]" />
                <span>Responsive out of the box with mobile, tablet, and desktop breakpoints.</span>
              </div>
              <div className="flex items-center gap-3">
                <SparklesIcon className="h-5 w-5 text-[#7b5bff]" />
                <span>Framer Motion micro-interactions ready to toggle on when you export.</span>
              </div>
              <div className="flex items-center gap-3">
                <SparklesIcon className="h-5 w-5 text-[#1a144b]" />
                <span>Color tokens and typography scales harmonized across every variant.</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-[28px] border-[4px] border-[#1a144b] bg-white/90 p-6 shadow-[0_12px_0_#1a144b]/40">
            <div className="absolute -top-10 right-8 hidden h-16 w-16 rounded-full border-[4px] border-[#1a144b] bg-[#ffe36e]/90 lg:block" />
            <div className="grid gap-5 sm:grid-cols-2">
              {libraryShowcase.map((item) => (
                <div
                  key={item.title}
                  className="relative overflow-hidden rounded-[24px] border-[3px] border-[#1a144b] bg-white/80 p-5 text-left shadow-[0_10px_0_#1a144b]/40"
                >
                  <div
                    className="absolute -right-6 -top-6 h-16 w-16 rotate-6 rounded-[22px] border-[3px] border-[#1a144b]"
                    style={{ background: item.swatch[0] }}
                  />
                  <div
                    className="absolute -bottom-8 left-6 h-20 w-20 -rotate-12 rounded-[22px] border-[3px] border-[#1a144b]"
                    style={{ background: item.swatch[1] }}
                  />
                  <div
                    className="absolute right-6 bottom-6 h-12 w-12 rotate-12 rounded-[18px] border-[3px] border-[#1a144b]"
                    style={{ background: item.swatch[2] }}
                  />
                  <h3 className="relative text-lg font-semibold text-[#1a144b]">{item.title}</h3>
                  <p className="relative mt-3 text-sm text-[#3d2c8d]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative rounded-[36px] border-[4px] border-[#1a144b] bg-white/85 p-10 shadow-[0_16px_0_#1a144b]/40">
          <div className="absolute -top-10 left-6 inline-flex items-center gap-2 rounded-full border-[3px] border-[#1a144b] bg-[#ffe4f3]/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#1a144b]">
            How it feels
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {process.map((step, index) => (
              <div
                key={step.title}
                className="relative flex flex-col gap-3 rounded-[28px] border-[4px] border-[#1a144b] bg-white/85 p-6 text-left shadow-[0_12px_0_#1a144b]/40"
              >
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-[#3d2c8d]">
                  <span>Step {index + 1}</span>
                  <span>{step.spark}</span>
                </div>
                <h3 className="text-lg font-semibold text-[#1a144b]">{step.title}</h3>
                <p className="text-sm leading-relaxed text-[#3d2c8d]">{step.description}</p>
                <div className="mt-4 flex h-24 items-center justify-center rounded-[18px] border-[3px] border-dashed border-[#1a144b] bg-[#ffe4f3]/40 text-xs font-medium uppercase tracking-[0.3em] text-[#1a144b]">
                  Layer sketch
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[36px] border-[4px] border-[#1a144b] bg-white/85 p-10 text-center shadow-[0_16px_0_#1a144b]/40">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full border-[4px] border-[#1a144b] bg-[#ffb9de]/60" />
          <div className="pointer-events-none absolute -bottom-32 right-1/4 h-48 w-48 rotate-12 rounded-full border-[4px] border-[#1a144b] bg-[#dff8ff]/70" />
          <StageBadge stage="Ready to play" />
          <h2 className="mt-6 text-balance text-3xl font-black text-[#1a144b] sm:text-4xl">
            Start doodling your production-ready website today
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-[#3d2c8d]">
            Open the editor to explore whimsical layouts, chat with the AI art director, and export crisp code when you
            are ready. Layerbase is your friendly co-designer.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/editor"
              className="group inline-flex items-center gap-2 rounded-[24px] border-[3px] border-[#1a144b] bg-[#ffe36e] px-8 py-3 text-base font-semibold text-[#1a144b] shadow-[0_10px_0_#1a144b] transition-transform hover:-translate-y-1"
            >
              Launch editor
              <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/docs"
              className="inline-flex items-center gap-2 rounded-[24px] border-[3px] border-[#1a144b] bg-white/70 px-8 py-3 text-base font-semibold text-[#1a144b] transition-transform hover:-translate-y-1 hover:bg-[#ffe4f3]/60"
            >
              Browse docs
            </Link>
          </div>
        </section>
      </main>

      <footer className="relative z-10 mx-auto mt-12 w-full max-w-6xl px-6 pb-14">
        <div className="flex flex-col gap-6 rounded-[30px] border-[4px] border-[#1a144b] bg-white/70 px-8 py-6 text-sm font-medium text-[#1a144b] shadow-[0_10px_0_#1a144b] md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3 text-[#3d2c8d]">
            <span className="rounded-full border-[3px] border-[#1a144b] bg-[#ffe4f3]/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
              Made with joy
            </span>
            <span>Designed for playful builders</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://x.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-[#1a144b] bg-white/80 transition-transform hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                <path d="M21 6.5a6.9 6.9 0 0 1-2 .56 3.43 3.43 0 0 0 1.52-1.88 6.81 6.81 0 0 1-2.17.84 3.41 3.41 0 0 0-5.82 3.11A9.67 9.67 0 0 1 4.29 5.5a3.39 3.39 0 0 0 1.06 4.55 3.38 3.38 0 0 1-1.54-.43v.04a3.42 3.42 0 0 0 2.73 3.34 3.47 3.47 0 0 1-1.53.06 3.42 3.42 0 0 0 3.19 2.37A6.84 6.84 0 0 1 3 17.5 9.62 9.62 0 0 0 8.29 19c7.55 0 11.68-6.27 11.68-11.7 0-.18 0-.35-.01-.53A8.21 8.21 0 0 0 21 6.5Z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-[#1a144b] bg-white/80 transition-transform hover:-translate-y-0.5"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <rect x={4} y={4} width={16} height={16} rx={4} />
                <circle cx={12} cy={12} r={3.5} />
                <circle cx={17} cy={7} r={1} fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
