import {
  BrainCircuit,
  Sparkles,
  ArrowRight,
  Zap,
  Workflow,
  ShieldCheck,
  Target,
  Menu,
  ChevronRight,
  Lightbulb,
  Layers,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "AI-Powered Intelligence",
    description:
      "Experience intelligent assistance that transforms your ideas into meaningful results.",
  },
  {
    icon: Workflow,
    title: "Smart Workflows",
    description:
      "Bring your tasks and activities together with simpler and smarter workflows.",
  },
  {
    icon: Zap,
    title: "Enhanced Productivity",
    description:
      "Reduce repetitive work and spend more time focusing on what matters.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Workspace",
    description:
      "Keep your digital workspace organized with security-conscious design.",
  },
];

const steps = [
  {
    number: "01",
    title: "Bring Your Ideas",
    description: "Start with your thoughts, goals and everyday tasks.",
  },
  {
    number: "02",
    title: "Explore AI Assistance",
    description: "Discover smarter ways to organize and approach your work.",
  },
  {
    number: "03",
    title: "Achieve More",
    description: "Turn your plans into meaningful progress.",
  },
];

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#211027] via-[#38203e] to-[#704b70] text-white">
      {/* BACKGROUND DECORATION */}

      <div className="pointer-events-none absolute -right-20 top-28 h-80 w-80 rounded-full bg-gradient-to-br from-[#ffc0a8] via-[#ed9bb7] to-[#c77d9d] opacity-90" />

      <div className="pointer-events-none absolute -bottom-24 -left-20 h-96 w-96 rounded-full bg-gradient-to-br from-[#d9b2ff] via-[#9865dc] to-[#59278d] opacity-90" />

      <div className="pointer-events-none absolute left-[40%] top-[35%] h-64 w-64 rounded-full bg-[#d99bdb]/15 blur-[70px]" />

      {/* NAVBAR */}

      <nav className="relative z-20 border-b border-white/15 bg-[#29172f]/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#home" className="flex items-center gap-3">
            <div className="rounded-xl border border-white/25 bg-white/15 p-2.5">
              <BrainCircuit size={26} />
            </div>

            <span className="text-xl font-bold tracking-wide">
              Pulsework <span className="text-[#efb9e8]">AI</span>
            </span>
          </a>

          <div className="hidden items-center gap-9 text-sm font-medium text-white/90 md:flex">
            <a href="#home" className="transition hover:text-[#ffc4d9]">
              Home
            </a>
            <a href="#features" className="transition hover:text-[#ffc4d9]">
              Features
            </a>
            <a href="#about" className="transition hover:text-[#ffc4d9]">
              About
            </a>
            <a href="#how-it-works" className="transition hover:text-[#ffc4d9]">
              How It Works
            </a>
          </div>

          <a
            href="#get-started"
            className="hidden items-center gap-2 rounded-full border border-white/30 bg-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/30 md:flex"
          >
            Get Started <ArrowRight size={17} />
          </a>

          <a
            href="#features"
            className="text-white md:hidden"
            aria-label="Go to features"
          >
            <Menu size={26} />
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}

      <section id="home" className="relative z-10 px-6 py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          {/* HERO TEXT */}

          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-medium text-[#f7c9ed]">
              <Sparkles size={17} />A smarter way to work
            </div>

            <h1 className="text-5xl font-bold leading-[1.15] tracking-tight sm:text-6xl lg:text-7xl">
              Imagine More.
              <br />
              <span className="bg-gradient-to-r from-[#ffc3b5] via-[#e7b5f3] to-[#c5a2ff] bg-clip-text text-transparent">
                Achieve More.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/85">
              Welcome to Pulsework AI – where intelligent technology meets
              everyday productivity. Simplify your workflow, explore new
              possibilities and make every idea count.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#get-started"
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#efc0df] to-[#d6b0ee] px-8 py-4 font-bold text-[#321b37] shadow-lg transition hover:scale-105 hover:brightness-110"
              >
                Explore Pulsework <ArrowRight size={19} />
              </a>

              <a
                href="#features"
                className="flex items-center rounded-xl border border-white/35 bg-white/10 px-8 py-4 font-semibold text-white transition hover:bg-white/20"
              >
                Discover Features
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-6 text-sm text-white/85">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#f6c2e9]" />
                Intelligent assistance
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#f6c2e9]" />
                Smarter productivity
              </span>
            </div>
          </div>

          {/* HERO DASHBOARD CARD */}

          <div className="relative mx-auto w-full max-w-lg">
            <div className="relative rounded-[30px] border border-white/35 bg-[#604b63]/95 p-7 shadow-2xl shadow-black/30 sm:p-9">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl border border-white/20 bg-white/15 p-4 text-[#f6c5ed]">
                    <BrainCircuit size={27} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold">Pulsework AI</h3>
                    <p className="text-sm text-white/80">
                      Your intelligent workspace
                    </p>
                  </div>
                </div>

                <Sparkles className="text-[#ffc0ae]" size={29} />
              </div>

              <div className="mt-10">
                <p className="text-sm text-white/80">A new way to think</p>

                <h2 className="mt-2 text-3xl font-bold">Ideas into action.</h2>

                <p className="mt-4 leading-7 text-white/85">
                  Let intelligent tools help you organize your thoughts and move
                  towards your goals.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 rounded-2xl border border-white/25 bg-white/[0.14] p-4 transition hover:bg-white/20">
                  <div className="rounded-xl bg-[#edb7d9]/25 p-4 text-[#ffd2ed]">
                    <Lightbulb size={25} />
                  </div>

                  <div>
                    <h4 className="font-bold">Think creatively</h4>
                    <p className="mt-1 text-sm text-white/80">
                      Turn ideas into possibilities
                    </p>
                  </div>

                  <ChevronRight className="ml-auto text-white/75" />
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-white/25 bg-white/[0.14] p-4 transition hover:bg-white/20">
                  <div className="rounded-xl bg-[#bba0f3]/30 p-4 text-[#e0ceff]">
                    <Target size={25} />
                  </div>

                  <div>
                    <h4 className="font-bold">Stay focused</h4>
                    <p className="mt-1 text-sm text-white/80">
                      Keep your goals in sight
                    </p>
                  </div>

                  <ChevronRight className="ml-auto text-white/75" />
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-white/25 bg-white/[0.14] p-4 transition hover:bg-white/20">
                  <div className="rounded-xl bg-[#ffc1ae]/25 p-4 text-[#ffddce]">
                    <Zap size={25} />
                  </div>

                  <div>
                    <h4 className="font-bold">Work smarter</h4>
                    <p className="mt-1 text-sm text-white/80">
                      Make every moment count
                    </p>
                  </div>

                  <ChevronRight className="ml-auto text-white/75" />
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-white/25 bg-[#4d3855] p-5">
                <p className="text-sm text-white/80">
                  Your next step starts here.
                </p>
                <p className="mt-2 text-lg font-bold text-[#f8d5f1]">
                  Think. Create. Achieve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}

      <section id="features" className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#f4c0e9]">
              What We Offer
            </p>

            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
              Designed to make work
              <span className="text-[#efbce9]"> effortless.</span>
            </h2>

            <p className="mt-5 leading-8 text-white/85">
              Explore a smarter workspace with intelligent features built to
              simplify your everyday experience.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="group rounded-3xl border border-white/25 bg-[#604b63]/90 p-7 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-[#f0c0ec] hover:bg-[#70576f]"
                >
                  <div className="mb-7 inline-flex rounded-2xl border border-white/20 bg-white/15 p-4 text-[#f6c6ed] transition group-hover:bg-white/25">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-bold">{feature.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-white/85">
                    {feature.description}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-[#ffd0ed]">
                    Explore <ArrowRight size={16} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}

      <section
        id="how-it-works"
        className="relative z-10 border-y border-white/15 bg-[#38243f]/75 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#f4c0e9]">
              Simple Journey
            </p>

            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
              How It Works
            </h2>

            <p className="mt-5 text-white/85">
              A simple journey towards smarter productivity.
            </p>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-white/30 bg-[#765a7c] text-3xl font-bold text-[#f8d0f0] shadow-xl">
                  {step.number}
                </div>

                <h3 className="mt-7 text-xl font-bold">{step.title}</h3>

                <p className="mx-auto mt-4 max-w-xs leading-7 text-white/85">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}

      <section id="about" className="relative z-10 px-6 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#f4c0e9]">
              About Pulsework
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
              Technology that
              <span className="text-[#efbce9]"> works with you.</span>
            </h2>

            <p className="mt-7 leading-8 text-white/85">
              Pulsework AI brings the power of intelligent technology into a
              modern workspace. We aim to make everyday work more organized,
              productive and accessible through smarter digital experiences.
            </p>

            <a
              href="#features"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#efc0df] to-[#d6b0ee] px-7 py-4 font-bold text-[#321b37] transition hover:brightness-110"
            >
              Discover More <ArrowRight size={18} />
            </a>
          </div>

          <div className="rounded-[30px] border border-white/30 bg-[#604b63]/95 p-9 shadow-2xl sm:p-12">
            <div className="mb-8 inline-flex rounded-2xl border border-white/20 bg-white/15 p-5 text-[#f6c6ed]">
              <Layers size={45} />
            </div>

            <h3 className="text-3xl font-bold">Think without limits.</h3>

            <p className="mt-5 leading-8 text-white/85">
              Every great achievement starts with an idea. Give your ideas the
              space, tools and intelligence they need to grow.
            </p>

            <div className="mt-8 flex items-center gap-3 text-[#ffd0ed]">
              <Sparkles size={21} />
              <span className="font-semibold">The future of smarter work.</span>
            </div>
          </div>
        </div>
      </section>

      {/* GET STARTED */}

      <section id="get-started" className="relative z-10 px-6 pb-24">
        <div className="mx-auto max-w-6xl rounded-[35px] border border-white/30 bg-[#604b63]/95 px-7 py-16 text-center shadow-2xl sm:px-16">
          <Sparkles className="mx-auto mb-6 text-[#f6c6ed]" size={38} />

          <h2 className="text-4xl font-bold sm:text-5xl">
            Ready for a smarter way to work?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/85">
            Discover the possibilities of intelligent productivity and take the
            next step with Pulsework AI.
          </p>

          <a
            href="#home"
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#efc0df] to-[#d6b0ee] px-9 py-4 font-bold text-[#321b37] shadow-lg transition hover:scale-105 hover:brightness-110"
          >
            Explore Now <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="relative z-10 border-t border-white/20 bg-[#29172f]/90 px-6 py-9">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
          <a href="#home" className="flex items-center gap-2">
            <BrainCircuit className="text-[#efbce9]" size={25} />

            <span className="text-lg font-bold">
              Pulsework <span className="text-[#efbce9]">AI</span>
            </span>
          </a>

          <p className="text-center text-sm text-white/70">
            © 2026 Pulsework AI. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-white/80">
            <a href="#home" className="hover:text-[#ffc4dc]">
              Home
            </a>
            <a href="#features" className="hover:text-[#ffc4dc]">
              Features
            </a>
            <a href="#about" className="hover:text-[#ffc4dc]">
              About
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
