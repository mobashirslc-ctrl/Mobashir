import { MessageCircle, Send, Facebook, Linkedin } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import gorunLogoImg from "@/imports/gorun.png";
import gtechLogoImg from "@/imports/gtech.png";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import founderPhotoFormal from "@/imports/WhatsApp_Image_2026-02-16_at_11.27.06__1_.jpeg";
import founderPhotoCasual from "@/imports/inbound7986166907321476416.jpg";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Code2,
  Layers,
  Cpu,
  Zap,
  Globe,
  GitBranch,
  ChevronRight,
  Star,
  Activity,
  Box,
} from "lucide-react";

// Animated counter hook
function useCounter(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
}

// Intersection observer hook
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// Platform Logo components (text-based, premium styled)
function GorunLogo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: "h-6", md: "h-8", lg: "h-10" };
  return (
    <img src={gorunLogoImg} alt="Gorun" className={`${sizes[size]} w-auto object-contain`} />
  );
}

function GTechLogo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: "h-6", md: "h-8", lg: "h-10" };
  return (
    <img src={gtechLogoImg} alt="GTech" className={`${sizes[size]} w-auto object-contain`} />
  );
}

// Hero Photo (right side)
function HeroPhoto() {
  return (
    <div className="relative w-full max-w-md ml-auto">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-orange-400/20 blur-3xl rounded-3xl" />
      {/* Main photo frame */}
      <div className="relative">
        <div
          className="rounded-3xl p-[2px]"
          style={{ background: "linear-gradient(135deg, #F97316, #FBBF24, #0891B2)" }}
        >
          <div className="rounded-3xl overflow-hidden bg-gray-100" style={{ aspectRatio: "3/4" }}>
            <ImageWithFallback
              src={founderPhotoCasual}
              alt="Mobashir Ahmed Nasrullah — Founder & Tech Builder"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Floating badge — top left */}
        <div className="absolute -top-4 -left-4 rounded-2xl border border-gray-200 bg-white/90 backdrop-blur-xl px-4 py-3 shadow-xl shadow-gray-200/60">
          <div className="text-[10px] text-gray-400 mb-0.5">Founder at</div>
          <GTechLogo size="sm" />
        </div>

        {/* Floating badge — bottom right */}
        <div className="absolute -bottom-4 -right-4 rounded-2xl border border-gray-200 bg-white/90 backdrop-blur-xl px-4 py-3 shadow-xl shadow-gray-200/60">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] text-gray-400">Building</span>
          </div>
          <GorunLogo size="sm" />
        </div>

        {/* Floating stat card */}
        <div className="absolute top-1/2 -right-6 -translate-y-1/2 rounded-xl border border-gray-200 bg-white/90 backdrop-blur-xl px-3 py-2 shadow-xl shadow-gray-200/60">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "#FFF7ED" }}>
              <Activity size={13} style={{ color: "#F97316" }} />
            </div>
            <div>
              <div className="text-xs font-bold text-gray-900">8+ Products</div>
              <div className="text-[9px] text-gray-400">Live & Shipped</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Project card
function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="group relative rounded-2xl border overflow-hidden cursor-pointer transition-all duration-500 bg-white"
      style={{
        borderColor: hovered ? project.color + "44" : "#E5E7EB",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? `0 20px 60px ${project.color}20` : "0 1px 3px rgba(0,0,0,0.06)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Gradient top border */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
          opacity: hovered ? 1 : 0,
        }}
      />
      {/* Preview area */}
      <div className="relative h-40 overflow-hidden" style={{ background: project.color + "08" }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl transition-transform duration-500"
            style={{
              background: project.color + "18",
              border: `1px solid ${project.color}30`,
              transform: hovered ? "scale(1.1) rotate(-3deg)" : "scale(1)",
            }}
          >
            {project.icon}
          </div>
        </div>
        <div className="absolute top-3 left-3">
          <span
            className="text-[10px] font-medium px-2 py-1 rounded-full"
            style={{ background: project.color + "18", color: project.color, border: `1px solid ${project.color}25` }}
          >
            {project.category}
          </span>
        </div>
        {project.website && (
          <a
            href={`https://${project.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 w-7 h-7 rounded-lg bg-white border border-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50 shadow-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={11} className="text-gray-500" />
          </a>
        )}
      </div>
      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-gray-900 mb-1 group-hover:transition-colors" style={{ color: hovered ? project.color : undefined }}>{project.name}</h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-500 border border-gray-200">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    name: "EduLink Consultancy BD",
    category: "Study Abroad Platform",
    description: "A complete digital platform for international education consulting firms to manage student journeys, applications, and service workflows.",
    tech: ["Next.js", "Firebase"],
    icon: "🎓",
    color: "#F97316",
    website: "",
  },
  {
    name: "EduStream",
    category: "Operations Portal",
    description: "Internal platform for student application management, document tracking, workflow automation, and consultant operations.",
    tech: ["Next.js", "Firebase"],
    icon: "📊",
    color: "#0891B2",
    website: "",
  },
  {
    name: "G-Mate",
    category: "Student Growth Platform",
    description: "A digital platform helping students access opportunities, resources, services, and community engagement tools.",
    tech: ["Next.js", "Node.js"],
    icon: "🚀",
    color: "#10b981",
    website: "",
  },
  {
    name: "GNext Ecosystem",
    category: "Digital Ecosystem",
    description: "A scalable ecosystem architecture connecting multiple digital services through a unified platform.",
    tech: ["Next.js", "Node.js"],
    icon: "🌐",
    color: "#8B5CF6",
    website: "gnext-ecosystem.vercel.app",
  },
  {
    name: "Gorun B2B Ecosystem",
    category: "B2B Commerce Platform",
    description: "A business ecosystem for supplier, distributor, operational management, and business collaboration.",
    tech: ["Next.js", "Node.js", "Firebase"],
    icon: "⚡",
    color: "#F97316",
    website: "gorun-b2b-ecosystem.vercel.app",
  },
];

const techStack = {
  Frontend: [
    { name: "Next.js", icon: "▲" },
    { name: "React", icon: "⚛" },
    { name: "Tailwind CSS", icon: "🌊" },
  ],
  Backend: [
    { name: "Node.js", icon: "🟢" },
    { name: "Firebase", icon: "🔥" },
  ],
  Tools: [
    { name: "GitHub", icon: "⬡" },
    { name: "Figma", icon: "◈" },
    { name: "Vercel", icon: "▲" },
  ],
};

const generateHeatmap = () =>
  Array.from({ length: 52 }, (_, w) =>
    Array.from({ length: 7 }, (_, d) => ({
      count: Math.random() > 0.4 ? Math.floor(Math.random() * 8) : 0,
      week: w, day: d,
    }))
  );

const heatmapData = generateHeatmap();

const getHeatColor = (count: number) => {
  if (count === 0) return "#F3F4F6";
  if (count <= 2) return "#FED7AA";
  if (count <= 4) return "#FB923C";
  if (count <= 6) return "#F97316";
  return "#EA580C";
};


  export default function App() {
  // 1. নতুন স্টেট ও ফাংশন
  const [formData, setFormData] = useState({ 
    name: "", email: "", phone: "", service: "Software Development", message: "" 
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Request received! I will get back to you soon.");
  };

  // 2. পুরনো স্টেট ও হুকস (একবারই লিখবেন)
  const [activeNav, setActiveNav] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const statsRef = useInView();
  const stat1 = useCounter(5, 1800, statsRef.inView);
  const stat2 = useCounter(8, 2000, statsRef.inView);
  const stat3 = useCounter(2, 1500, statsRef.inView);
  const stat4 = useCounter(100, 2200, statsRef.inView);

  // এরপর আপনার বাকি সব কোড (যেমন: const navItems = [...] ইত্যাদি)

  const navItems = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "stack", label: "Stack" },
    { id: "contact", label: "Contact" },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveNav(id);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-gray-900 font-['Inter',sans-serif] overflow-x-hidden">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-400/8 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-400/6 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-orange-300/6 rounded-full blur-3xl" />
      </div>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 border-b border-black/[0.06] bg-white/80 backdrop-blur-xl">
        <div className="text-base font-black tracking-tight text-gray-900">
          MOBASHIR
          <span style={{ color: "#F97316" }}>.</span>
        </div>
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="px-4 py-1.5 text-sm rounded-lg transition-all duration-200"
              style={{
                color: activeNav === item.id ? "#F97316" : "#6B7280",
                background: activeNav === item.id ? "#FFF7ED" : "transparent",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
        <button
          onClick={() => scrollTo("contact")}
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
          style={{ background: "linear-gradient(135deg, #F97316, #EA580C)" }}
        >
          Let&apos;s Connect <ArrowRight size={13} />
        </button>
        <button className="md:hidden text-gray-500" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="w-5 space-y-1">
            <div className={`h-px bg-current transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <div className={`h-px bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <div className={`h-px bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </div>
        </button>
      </nav>
      {menuOpen && (
        <div className="fixed top-14 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-200 p-4 md:hidden shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="block w-full text-left px-4 py-3 text-sm text-gray-500 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-all"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      {/* SECTION 1 – HERO */}
      <section id="home" className="relative min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {/* Mobile avatar */}
              <div className="flex lg:hidden justify-center mb-2">
                <div className="relative w-24 h-24">
                  <div className="rounded-full p-[2px] w-full h-full" style={{ background: "linear-gradient(135deg, #F97316, #FBBF24)" }}>
                    <div className="rounded-full overflow-hidden w-full h-full bg-gray-100">
                      <ImageWithFallback
                        src={founderPhotoCasual}
                        alt="Mobashir Ahmed Nasrullah"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-400 border-2 border-white" />
                </div>
              </div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-orange-200 bg-orange-50 text-sm">
                
                <span className="text-orange-700 text-xs font-medium">Empowering Bangladesh Through Next-Gen Tech Innovation</span>
              </div>
              {/* Headline */}
              <div className="space-y-2">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-gray-900">
                  Mobashir<br />
                  <span style={{ background: "linear-gradient(135deg, #F97316, #FBBF24)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Ahmed
                  </span>
                  <br />Nasrullah
                </h1>
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  {["Founder", "Product Builder", "Full Stack Developer"].map((role, i) => (
                    <span key={role} className="flex items-center gap-2">
                      <span className="text-sm md:text-base text-gray-400 font-medium">{role}</span>
                      {i < 2 && <span className="text-gray-300">•</span>}
                    </span>
                  ))}
                </div>
              </div>
              {/* Platform logos strip */}
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-xs text-gray-400 font-medium">My Platforms:</span>
                <GorunLogo size="sm" />
                <GTechLogo size="sm" />
              </div>
              {/* Subheadline */}
              <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-xl">
                Building scalable digital ecosystems for education, commerce, and business automation.
              </p>
              {/* CTAs */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => scrollTo("projects")}
                  className="group flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.02] shadow-lg shadow-orange-200"
                  style={{ background: "linear-gradient(135deg, #F97316, #EA580C)" }}
                >
                  View Projects
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
                <button
                  onClick={() => scrollTo("contact")}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border border-gray-300 text-gray-600 hover:text-gray-900 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                >
                  Let&apos;s Connect
                </button>
              </div>
              {/* Socials */}
              <div className="flex items-center gap-3 pt-1">
                {[
                  { icon: <Github size={16} />, href: "https://github.com/mobashirslc-ctrl", label: "GitHub" },
                  { icon: <Linkedin size={16} />, href: "https://linkedin.com/in/mobashir-ahmed-nasrullah", label: "LinkedIn" },
                  { icon: <Mail size={16} />, href: "mailto:nasrullahmobo@gmail.com", label: "Email" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg border border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:text-gray-900 hover:border-gray-300 hover:shadow-sm transition-all"
                    aria-label={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
            {/* Hero photo */}
            <div className="hidden lg:block">
              <HeroPhoto />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 – STATS */}
      <section className="py-20 border-y border-gray-200/60">
        <div ref={statsRef.ref} className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: stat1, suffix: "+", label: "Production Platforms" },
              { value: stat2, suffix: "+", label: "Projects Built" },
              { value: stat3, suffix: "+", label: "Years Leadership" },
              { value: stat4, suffix: "%", label: "Self-Built Products" },
            ].map((s) => (
              <div key={s.label} className="text-center space-y-1">
                <div className="text-4xl md:text-5xl font-black" style={{ background: "linear-gradient(135deg, #F97316, #EA580C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {s.value}{s.suffix}
                </div>
                <div className="text-sm text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 – ABOUT */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest" style={{ color: "#F97316" }}>
                <span className="w-4 h-px bg-current" />
                About
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900">
                From Engineer<br />
                <span className="text-gray-300">to Founder</span>
              </h2>
              <p className="text-gray-500 leading-relaxed text-base md:text-lg">
                Electronics &amp; Telecommunication Engineering graduate turned entrepreneur and product builder.
                Experienced in building SaaS products, education technology platforms, ERP systems, and business
                automation solutions. Focused on solving real-world operational challenges through technology.
              </p>
              <div className="space-y-3 pt-2">
                {["SaaS Product Architecture", "Education Technology", "Business Automation & ERP", "Digital Ecosystem Design"].map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#F97316" }} />
                    <span className="text-sm text-gray-600">{skill}</span>
                  </div>
                ))}
              </div>
              {/* Platform badges */}
              <div className="flex items-center gap-3 pt-2">
                <span className="text-xs text-gray-400">My Companies:</span>
                <GorunLogo />
                <GTechLogo />
              </div>
            </div>
            {/* Founder photo */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute inset-0 bg-orange-400/10 blur-3xl rounded-3xl" />
              <div className="relative w-72 md:w-80">
                <div className="rounded-3xl p-[2px]" style={{ background: "linear-gradient(135deg, #F97316, #FBBF24, #0891B2)" }}>
                  <div className="rounded-3xl overflow-hidden bg-gray-100">
                    <ImageWithFallback
                      src={founderPhotoFormal}
                      alt="Mobashir Ahmed Nasrullah — Founder & Full Stack Developer"
                      className="w-full h-auto object-cover object-top"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 rounded-2xl border border-gray-200 bg-white/90 backdrop-blur-xl px-4 py-3 shadow-xl shadow-gray-200/80">
                  <div className="text-[10px] text-gray-400 mb-1">Currently at</div>
                  <GTechLogo size="sm" />
                </div>
                <div className="absolute -top-4 -right-4 rounded-xl border border-gray-200 bg-white/90 backdrop-blur-xl px-3 py-2 shadow-xl shadow-gray-200/80 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-medium text-gray-600">Open to Collab</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 – PROJECTS */}
      <section id="projects" className="py-24 border-t border-gray-200/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-end justify-between mb-14">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest" style={{ color: "#F97316" }}>
                <span className="w-4 h-px bg-current" />
                Featured Projects
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900">Products I&apos;ve Built</h2>
            </div>
            <a
              href="https://github.com/mobashirslc-ctrl"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-900 transition-colors"
            >
              All on GitHub <ChevronRight size={14} />
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p) => <ProjectCard key={p.name} project={p} />)}
          </div>
        </div>
      </section>

      {/* SECTION 5 – WHAT I BUILD */}
      <section className="py-24 border-t border-gray-200/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest" style={{ color: "#F97316" }}>
              <span className="w-4 h-px bg-current" />
              Expertise
              <span className="w-4 h-px bg-current" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900">What I Build</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "🎓", title: "Education Technology", desc: "Building platforms for students, institutions, and education businesses.", color: "#F97316" },
              { icon: "⚡", title: "Business Automation", desc: "Automating workflows and operational processes for modern organizations.", color: "#0891B2" },
              { icon: "📦", title: "SaaS Platforms", desc: "Building scalable software products with modern architecture and design.", color: "#10b981" },
              { icon: "🌐", title: "Digital Ecosystems", desc: "Creating connected platforms that integrate multiple services and users.", color: "#8B5CF6" },
            ].map((item) => (
              <div key={item.title} className="group relative rounded-2xl border border-gray-200 bg-white p-6 overflow-hidden hover:border-gray-300 hover:shadow-lg hover:shadow-gray-100 transition-all duration-300">
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2"
                  style={{ background: item.color + "30" }}
                />
                <div className="text-3xl mb-4 transition-transform duration-300 group-hover:scale-110 inline-block">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 – TECH STACK */}
      <section id="stack" className="py-24 border-t border-gray-200/60 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest" style={{ color: "#F97316" }}>
              <span className="w-4 h-px bg-current" />
              Tech Stack
              <span className="w-4 h-px bg-current" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900">Tools of the Trade</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(techStack).map(([category, items]) => (
              <div key={category} className="rounded-2xl border border-gray-200 bg-[#FAFAF8] p-6 space-y-4">
                <div className="text-xs font-mono text-gray-400 uppercase tracking-widest">{category}</div>
                <div className="space-y-3">
                  {items.map((tech) => (
                    <div key={tech.name} className="flex items-center gap-3 group">
                      <div className="w-8 h-8 rounded-lg border border-gray-200 bg-white flex items-center justify-center text-base shadow-sm group-hover:shadow-md transition-all">
                        {tech.icon}
                      </div>
                      <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 – EXPERIENCE */}
      <section className="py-24 border-t border-gray-200/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest" style={{ color: "#F97316" }}>
                <span className="w-4 h-px bg-current" />
                Experience
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900">
                Career<br /><span className="text-gray-300">Timeline</span>
              </h2>
              <p className="text-gray-500 leading-relaxed">A focused path from engineering to founding — building real products that solve real problems.</p>
            </div>
            <div className="space-y-0">
              {[
                {
                  period: "2023 – 2025",
                  company: "Gorun Ltd.",
                  role: "Founder and Managing director",
                  desc: "Led operational strategy, process optimization, and technology initiatives across the organization.",
                  color: "#F97316",
                  logo: <GorunLogo size="sm" />,
                  current: false,
                },
                {
                  period: "Present",
                  company: "GTECH",
                  role: "Head of Operation & Full Stack Developer",
                  desc: "Building SaaS products, ERP systems, business automation software, and digital ecosystems.",
                  color: "#0F172A",
                  logo: <GTechLogo size="sm" />,
                  current: true,
                },
              ].map((exp, i) => (
                <div key={exp.company} className="relative flex gap-6 pb-8 last:pb-0">
                  {i < 1 && <div className="absolute left-4 top-10 bottom-0 w-px bg-gray-200" />}
                  <div className="relative flex-shrink-0">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center border-2 mt-1"
                      style={{ borderColor: exp.color, background: exp.color + "15" }}
                    >
                      <div className="w-2 h-2 rounded-full" style={{ background: exp.color }} />
                    </div>
                    {exp.current && (
                      <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ background: exp.color }} />
                    )}
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-white p-6 flex-1 hover:border-gray-300 hover:shadow-md hover:shadow-gray-100/80 transition-all">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="text-xs font-mono text-gray-400 mb-1">{exp.period}</div>
                        <div className="mb-1">{exp.logo}</div>
                        <div className="text-sm font-medium text-gray-500 mt-1">{exp.role}</div>
                      </div>
                      {exp.current && (
                        <span className="text-[10px] font-medium px-2 py-1 rounded-full bg-orange-50 text-orange-600 border border-orange-200">Now</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed mt-3">{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 – CURRENT VISION */}
      <section className="py-24 border-t border-gray-200/60 relative overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-400/6 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest" style={{ color: "#F97316" }}>
              <span className="w-4 h-px bg-current" />Current Vision<span className="w-4 h-px bg-current" />
            </div>
            <h2 className="text-3xl md:text-6xl font-black tracking-tight text-gray-900">
              Building the Future of<br />
              <span style={{ background: "linear-gradient(135deg, #F97316, #FBBF24)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Business Automation
              </span>
            </h2>
            <p className="text-base md:text-xl text-gray-500 leading-relaxed">
              Currently developing intelligent business operating systems that automate operations,
              streamline workflows, and help organizations scale through technology.
            </p>
            <div className="relative rounded-3xl border border-gray-200 bg-[#FAFAF8] p-10 mt-8 overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #F97316 1px, transparent 0)", backgroundSize: "30px 30px" }}
              />
              <div className="relative flex items-center justify-center gap-6 flex-wrap">
                {["Automation OS", "ERP Engine", "B2B Commerce", "EdTech Suite", "Data Layer"].map((node, i) => (
                  <div key={node} className="flex flex-col items-center gap-2">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl border border-gray-200 hover:scale-110 transition-transform cursor-default shadow-sm"
                      style={{ background: i === 0 ? "#FFF7ED" : "#F9FAFB" }}
                    >
                      {["⚙️", "🗄️", "🤝", "🎓", "📊"][i]}
                    </div>
                    <span className="text-[10px] text-gray-500">{node}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { label: "Workflows Automated", value: "500+" },
                  { label: "Businesses Served", value: "50+" },
                  { label: "Uptime SLA", value: "99.9%" },
                ].map((m) => (
                  <div key={m.label} className="text-center">
                    <div className="text-2xl font-black" style={{ color: "#F97316" }}>{m.value}</div>
                    <div className="text-[11px] text-gray-400 mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 – GITHUB */}
      <section className="py-24 border-t border-gray-200/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="space-y-8">
            <div className="flex items-end justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest" style={{ color: "#F97316" }}>
                  <span className="w-4 h-px bg-current" />Open Source
                </div>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900">GitHub Activity</h2>
              </div>
              <a
                href="https://github.com/mobashirslc-ctrl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 bg-white text-sm text-gray-500 hover:text-gray-900 hover:border-gray-300 hover:shadow-sm transition-all"
              >
                <Github size={15} /> mobashirslc-ctrl
              </a>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 overflow-hidden shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <span className="text-sm font-medium text-gray-600">Contributions in the last year</span>
                <span className="text-xs font-mono text-gray-400">2024 – 2025</span>
              </div>
              <div className="overflow-x-auto">
                <div className="flex gap-1 min-w-max">
                  {heatmapData.map((week, wi) => (
                    <div key={wi} className="flex flex-col gap-1">
                      {week.map((day, di) => (
                        <div
                          key={di}
                          className="w-3 h-3 rounded-sm transition-transform hover:scale-125 cursor-default"
                          style={{ background: getHeatColor(day.count) }}
                          title={`${day.count} contributions`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4 justify-end">
                <span className="text-[10px] text-gray-400">Less</span>
                {[0, 2, 4, 6, 8].map((c) => (
                  <div key={c} className="w-3 h-3 rounded-sm" style={{ background: getHeatColor(c) }} />
                ))}
                <span className="text-[10px] text-gray-400">More</span>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { name: "gorun-b2b-ecosystem", stars: 12, lang: "TypeScript", desc: "B2B commerce platform and business collaboration ecosystem" },
                { name: "gnext-ecosystem", stars: 8, lang: "TypeScript", desc: "Scalable digital ecosystem architecture with unified platform" },
                { name: "edulink-platform", stars: 6, lang: "JavaScript", desc: "International education consulting management platform" },
              ].map((repo) => (
                <a
                  key={repo.name}
                  href="https://github.com/mobashirslc-ctrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border border-gray-200 bg-white p-5 hover:border-orange-300 hover:shadow-md hover:shadow-orange-100/60 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <GitBranch size={14} style={{ color: "#F97316" }} />
                      <span className="text-sm font-mono font-medium text-gray-900 group-hover:text-orange-600 transition-colors">{repo.name}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <Star size={11} /> {repo.stars}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">{repo.desc}</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                    <span className="text-xs text-gray-400">{repo.lang}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 – CONTACT */}
      <section id="contact" className="py-24 border-t border-gray-200/60 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* বাম পাশ: ফর্ম */}
            <div className="bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-200 shadow-sm">
              <h2 className="text-3xl font-black mb-6 text-gray-900">Start Your Project</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <select 
                  className="w-full p-4 border border-gray-200 rounded-xl bg-white focus:ring-2 focus:ring-orange-500 outline-none"
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option>Software Development</option>
                  <option>Sales and Marketing</option>
                  <option>Startup Consultation</option>
                </select>
                <input type="text" placeholder="Your Name" required className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" onChange={(e) => setFormData({...formData, name: e.target.value})} />
                <input type="email" placeholder="Email" required className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                <input type="tel" placeholder="WhatsApp Number" required className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                <textarea placeholder="Project Details" className="w-full p-4 border border-gray-200 rounded-xl h-32 focus:ring-2 focus:ring-orange-500 outline-none" onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
                <button type="submit" className="w-full bg-[#F97316] text-white py-4 rounded-xl font-bold hover:opacity-90 transition-all shadow-lg shadow-orange-200 flex items-center justify-center gap-2">
                  <Send size={18} /> Submit Request
                </button>
              </form>
            </div>

            {/* ডান পাশ: ইনফো ও ঠিকানা */}
            <div className="space-y-10">
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">Let's Connect</h2>
                <p className="text-gray-500 text-lg">I am open to collaborations and meaningful conversations. Feel free to reach out directly.</p>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Direct Contact</h4>
                  <a href="mailto:nasrullahmobo@gmail.com" className="text-[#F97316] hover:underline block mb-1">nasrullahmobo@gmail.com</a>
                  <a href="tel:+880184372036" className="text-gray-600 block">+880184372036</a>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Social & Office</h4>
                  <div className="flex gap-4 mb-6">
                    <a href="https://www.facebook.com/profile.php?id=100075573266820" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#1877F2]/10 text-[#1877F2] rounded-xl hover:scale-110 transition-transform"><Facebook size={20} /></a>
                    <a href="https://linkedin.com/in/mobashir-ahmed-nasrullah" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#0891B2]/10 text-[#0891B2] rounded-xl hover:scale-110 transition-transform"><Linkedin size={20} /></a>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>Office Chamber:</strong><br />
                    Level-5, Uttara Tower, Plot-1, Jashimuddin Avenue, Sector 3, Uttara, Dhaka, Bangladesh, 1230
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER - একদম নিচে */}
      <footer className="py-8 border-t border-gray-200/60 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          <div className="text-sm text-gray-400">© 2026 Mobashir Ahmed Nasrullah</div>
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <span>Built with ♥ in Bangladesh</span>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/880184372036" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl z-50 hover:scale-110 transition-transform"
      >
        <MessageCircle size={30} />
      </a>
    </div>
  );
}