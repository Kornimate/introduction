import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import Avatar from "./components/Logo";
import SkillsGalaxy from "./components/SkillsGalaxy";
import ExperienceTimeline from "./components/ExperienceTimeline";
import logo from "./assets/avatar.png";

const skills = [
  { name: "Python", level: 5 },
  { name: "C# / .NET", level: 5 },
  { name: "TypeScript", level: 5 },
  { name: "JavaScript", level: 5 },
  { name: "React", level: 5 },
  { name: "Git", level: 5 },
  { name: "Windows", level: 5 },
  { name: "Software Architecture & System Design", level: 4 },
  { name: "ML / DL / NLP", level: 4 },
  { name: "SQL", level: 4 },
  { name: "C / C++", level: 4 },
  { name: "Java", level: 3 },
  { name: "Golang", level: 3 },
  { name: "PowerShell Script", level: 3 },
];

const skillTags = [
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "NLP",
  "PyTorch",
  "TensorFlow",
  "Keras",
  "OpenCV",
  "Scikit-learn",
  "Seaborn",
  "Pandas",
  "NumPy",
  "Jupyter",
  "HTML5",
  "CSS3",
  "Redis",
  "SQLite",
  "Bootstrap",
  "MySQL",
  "MongoDB",
  "Firebase",
  "Node.js",
  "Express",
  "Redux",
  "Material UI",
  "jQuery",
  "D3.js",
  "Vite",
  "GraphQL",
  "Azure",
  "Docker",
  "Kubernetes",
  "Git",
  "GitHub",
  "GitLab",
  "Windows",
  "Linux",
  "Visual Studio",
  "VS Code",
  "npm",
  "PowerShell",
  "Figma",
  "Postman",
];

const languages = [
  { name: "Hungarian", level: "Native" },
  { name: "English", level: "C1" },
  { name: "German", level: "B2" },
  { name: "Danish", level: "A1 (learning)" },
];

const experience = [
  {
    role: "Research Assistant",
    company: "Aarhus University",
    period: "Sep 2025 - Present",
    bullets: [
      "Contributing to a JavaScript analysis tool using TypeScript.",
      "Developing new features and writing automated tests.",
      "Benchmarking and profiling performance of the analysis pipeline.",
    ],
  },
  {
    role: "Junior Software Developer",
    company: "RushFiles A/S",
    period: "Nov 2024 - Jul 2025",
    bullets: [
      "Developed a .NET (WinUI 3) desktop application integrating Windows APIs.",
      "Debugged and maintained ASP.NET web applications.",
      "Created PowerShell scripts to automate internal workflows.",
      "Participated in a SCRUM team with regular sprints and reviews.",
    ],
  },
  {
    role: "Web Developer",
    company: "LEAR Corporation",
    period: "Jul 2023 - Aug 2024",
    bullets: [
      "Built full-stack web applications with ASP.NET and Blazor.",
      "Designed and managed MSSQL databases.",
      "Handled IIS deployments and environment configuration.",
      "Collaborated in AGILE teams with cross-functional stakeholders.",
    ],
  },
  {
    role: "University Course Instructor",
    company: "Eötvös Loránd University",
    period: "Feb 2023 - Jun 2023",
    bullets: [
      "Taught Object-Oriented Programming to undergraduate students.",
      "Designed assignments, tests, and grading rubrics.",
      "Provided feedback and mentoring to students.",
    ],
  },
];

const education = [
  {
    school: "Aarhus University",
    degree: "Master's Degree in Computer Science",
    period: "2024 - Present",
    location: "Aarhus, Denmark",
  },
  {
    school: "Eötvös Loránd University",
    degree: "Bachelor's Degree in Computer Science",
    period: "2021 - 2024",
    location: "Budapest, Hungary",
  },
];

const highlights = [
  "Cisco Networking Academy® Big Data & Analytics certificate (2022)",
  "Published project in ELTE “Hall of Fame” (2023)",
  "Participated in R&D startup project (2022)",
  "Published Medium articles on Human-Centered AI via AU account (2025)",
];

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: [0.22, 0.61, 0.36, 1],
    },
  }),
};

function Section({ id, title, eyebrow, children }) {
  return (
    <section id={id} className="relative scroll-mt-24 py-16 md:py-24">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-slate-950/10 to-slate-950" />
      <div className="relative max-w-6xl mx-auto px-4">
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
          custom={0}
          className="mb-10"
        >
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 mb-2">
              {eyebrow}
            </p>
          )}
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-50">
            {title}
          </h2>
        </motion.header>
        {children}
      </div>
    </section>
  );
}

function SkillLevel({ level }) {
  const max = 5;
  return (
    <div className="flex gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          className={`h-1.5 flex-1 rounded-full ${
            i < level ? "bg-indigo-400" : "bg-slate-700"
          }`}
        />
      ))}
    </div>
  );
}

// -----------------------
// Main sections
// -----------------------

function Navbar() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Highlights" },
    { href: "#github", label: "GitHub" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/70 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2 group">
          <span className="text-sm font-semibold tracking-tight text-slate-50">
            Kornidesz Máté
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 group-hover:text-indigo-400 transition">
            Software Engineer
          </span>
        </a>
        <nav className="hidden md:flex gap-6 text-xs text-slate-300">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-indigo-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="mailto:kornideszofficial@gmail.com"
          className="text-xs px-3 py-1.5 rounded-full border border-indigo-400/50 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-200 transition"
        >
          Let&apos;s talk
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[80vh] flex items-center overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.23),_transparent_55%)]" />
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-12 items-center py-20">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/70 px-3 py-1 text-[11px] text-slate-300 mb-5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for collaborations & projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.8 }}
            className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-50 mb-4"
          >
            Software Engineer & AI Engineer & Computer Science Master&apos;s
            Student
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.8 }}
            className="text-sm md:text-base text-slate-300 max-w-xl mb-6"
          >
            I&apos;m Kornidesz Máté, a Hungarian software engineer based in
            Aarhus, Denmark. I build reliable, performant systems with the stack
            — .NET from desktop applications to web. I'&apos;m also an AI
            engineer focused on utilizing LLMs, and up-to-date with newest
            methods and technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.7 }}
            className="flex flex-wrap gap-3 items-center mb-8"
          >
            <a
              href="mailto:kornideszofficial@gmail.com"
              className="px-4 py-2.5 rounded-full text-xs font-medium bg-indigo-500 text-white hover:bg-indigo-400 transition shadow-lg shadow-indigo-500/30"
            >
              Get in touch
            </a>
            <a
              href="https://github.com/Kornimate"
              target="_blank"
              rel="noreferrer"
              className="text-xs flex items-center gap-2 px-3 py-2 rounded-full border border-slate-700/70 hover:border-indigo-400/60 hover:text-indigo-300 transition"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
              GitHub
            </a>
            <a
              href="https://drive.google.com/drive/folders/1nBwkES78BvhyiSAu2RAFyk9DeSk1HwHU?usp=sharing"
              target="_blank"
              className="text-xs flex items-center gap-2 px-3 py-2 rounded-full border border-slate-700/70 hover:border-indigo-400/60 hover:text-indigo-300 transition"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
              CV
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.7 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-[11px] text-slate-300 text-sm"
          >
            <div>
              <dt className="text-slate-400 mb-0.5">Based in</dt>
              <dd>Aarhus, Denmark</dd>
            </div>
            <div>
              <dt className="text-slate-400 mb-0.5">Email</dt>
              <dd>kornideszofficial@gmail.com</dd>
            </div>
            <div>
              <dt className="text-slate-400 mb-0.5">Languages</dt>
              <dd>HU / EN / DE / DA</dd>
            </div>
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="relative h-[280px] md:h-[360px] rounded-3xl bg-slate-900/40 border border-slate-700/60 overflow-hidden shadow-[0_0_80px_rgba(79,70,229,0.45)]"
        >
          <div className="relative h-[260px] md:h-[360px] rounded-3xl bg-slate-900/40 border border-slate-700/60 overflow-hidden shadow-[0_0_80px_rgba(79,70,229,0.45)]">
            <Avatar imageSrc={logo} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" title="About" eyebrow="Profile">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariant}
        custom={0.05}
        className="grid gap-8 md:grid-cols-[1.2fr_minmax(0,0.9fr)] items-start"
      >
        <p className="text-sm md:text-[15px] text-slate-300 leading-relaxed">
          I'm a software engineer and Computer Science student with both
          academic and industry experience. I've worked on desktop apps,
          full-stack web systems, and research tooling — often in strongly typed
          environments like C#/.NET and TypeScript, but always with an eye on
          developer experience and reliability. I’m especially motivated by
          projects where thoughtful design and clear abstractions make complex
          systems easier to build and maintain.
          <br />
          <br />I enjoy taking complex problems, breaking them down into
          approachable pieces, and shipping usable solutions. Recently, I've
          been contributing to a JavaScript analysis tool in TypeScript. Through
          this work, I've gained a deeper appreciation for how static analysis
          can reveal subtle issues before they reach production. It&apos;s been
          especially rewarding to see how incremental improvements can
          meaningfully boost developer productivity.
          <div className="mt-5">
            <a
              href="https://drive.google.com/drive/folders/1nBwkES78BvhyiSAu2RAFyk9DeSk1HwHU?usp=sharing"
              target="_blank"
              className="px-4 py-2.5 rounded-full text-xs font-medium bg-indigo-500 text-white hover:bg-indigo-400 transition shadow-lg shadow-indigo-500/30"
            >
              Download My CV
            </a>
          </div>
        </p>
        <div className="space-y-4 text-sm text-slate-300">
          <div className="rounded-2xl border border-slate-700/80 bg-slate-900/60 p-4">
            <h3 className="text-xs font-semibold text-slate-200 mb-2">
              Snapshot
            </h3>
            <ul className="space-y-1.5 text-[13px]">
              <li>• MSc Computer Science @ Aarhus University</li>
              <li>
                • Professional experience in .NET, ASP.NET, Blazor, WinUI 3
              </li>
              <li>
                • Comfortable with React, TypeScript, and modern web tooling
              </li>
              <li>• Interested in Human-Centered AI and developer tooling</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-700/80 bg-slate-900/60 p-4">
            <h3 className="text-xs font-semibold text-slate-200 mb-2">
              Languages
            </h3>
            <ul className="space-y-1 text-[13px]">
              {languages.map((lang) => (
                <li key={lang.name} className="flex justify-between">
                  <span>{lang.name}</span>
                  <span className="text-slate-400">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" title="Skills" eyebrow="Core stack">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariant}
        custom={0.05}
        className="grid md:grid-cols-2 gap-6"
      >
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
          <h3 className="text-xs font-semibold text-slate-200 mb-4">
            Technical Skills
          </h3>
          <ul className="space-y-3 text-sm">
            {skills.map((skill) => (
              <li key={skill.name}>
                <div className="flex items-center justify-between mb-1">
                  <span>{skill.name}</span>
                  <span className="text-[11px] text-slate-400">
                    {skill.level}/5
                  </span>
                </div>
                <SkillLevel level={skill.level} />
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 flex flex-col gap-4">
          <h3 className="text-xs font-semibold text-slate-200">
            What I like working with
          </h3>
          <div className="flex flex-wrap gap-2 text-[11px]">
            {skillTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1"
              >
                {tag}
              </span>
            ))}
            <div className="h-[260px] md:h-[320px] w-full mt-2 rounded-2xl overflow-hidden bg-slate-950/80">
              <SkillsGalaxy />
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" title="Experience" eyebrow="Industry & academia">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
        custom={0.05}
        className="space-y-6"
      >
        {experience.map((job) => (
          <div
            key={job.company + job.role}
            className="relative rounded-2xl border border-slate-800 bg-slate-900/60 p-5 md:p-6"
          >
            <div className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-indigo-500/60 via-slate-700/80 to-transparent" />
            <div className="pl-4">
              <div className="flex flex-wrap gap-2 items-baseline justify-between mb-2">
                <h3 className="text-sm font-semibold text-slate-100">
                  {job.role}
                </h3>
                <span className="text-[11px] text-slate-400">{job.period}</span>
              </div>
              <p className="text-xs text-slate-400 mb-3">{job.company}</p>
              <ul className="space-y-1.5 text-[13px] text-slate-300">
                {job.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
        custom={0.05}
      >
        <h3 className="mt-5 text-xs md:text-xl font-semibold uppercase tracking-[0.3em] text-slate-400 mb-2">
          Timeline
        </h3>
        <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-900/60 h-[260px] md:h-[320px] overflow-hidden">
          <ExperienceTimeline />
        </div>
      </motion.div>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" title="Education" eyebrow="Academic background">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
        custom={0.05}
        className="grid gap-5 md:grid-cols-2"
      >
        {education.map((edu) => (
          <div
            key={edu.school}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
          >
            <p className="text-[11px] text-slate-400 mb-1">{edu.period}</p>
            <h3 className="text-sm font-semibold text-slate-100 mb-1">
              {edu.degree}
            </h3>
            <p className="text-xs text-slate-300 mb-1">{edu.school}</p>
            <p className="text-[11px] text-slate-400">{edu.location}</p>
          </div>
        ))}
      </motion.div>
    </Section>
  );
}

function Projects() {
  return (
    <Section
      id="projects"
      title="Recognition & Projects"
      eyebrow="Selected work"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
        custom={0.05}
        className="grid md:grid-cols-1 gap-6"
      >
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 flex flex-col gap-3">
          <h3 className="text-xs font-semibold text-slate-200">
            Recognitions & Certificates
          </h3>
          <ul className="space-y-1.5 text-sm text-slate-300">
            {highlights.map((h) => (
              <li key={h}>• {h}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </Section>
  );
}

function GithubStats() {
  return (
    <Section id="github" title="GitHub & Activity" eyebrow="Coding">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
        custom={0.05}
        className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 md:p-6"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div>
            <h3 className="text-xs font-semibold text-slate-200">
              Contribution overview
            </h3>
            <p className="text-[11px] text-slate-400">
              GitHub activity for <span className="font-mono">Kornimate</span>
            </p>
          </div>
          <a
            href="https://github.com/Kornimate"
            target="_blank"
            rel="noreferrer"
            className="text-[11px] px-3 py-1.5 rounded-full border border-slate-700/80 hover:border-indigo-400/80 hover:text-indigo-300 transition"
          >
            View profile
          </a>
        </div>
        <div className="overflow-x-auto pb-2">
          <GitHubCalendar
            username="Kornimate"
            colorScheme="dark"
            blockSize={12}
            blockMargin={4}
            fontSize={10}
          />
        </div>

        {/* Example of using GitHub stats via an external image badge if you want more: */}
        <div className="mt-6 grid md:grid-cols-2 gap-4 text-center text-[11px] text-slate-300">
          <img
            className="w-full rounded-xl border border-slate-800 bg-slate-900/80 p-2 h-full"
            src="https://github-readme-stats.vercel.app/api?username=Kornimate&show_icons=true&theme=tokyonight&hide_border=true"
            alt="GitHub stats"
          />
          <img
            className="w-full rounded-xl border border-slate-800 bg-slate-900/80 p-2"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Kornimate&layout=compact&theme=tokyonight&hide_border=true"
            alt="Top languages"
          />
        </div>
      </motion.div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" title="Contact" eyebrow="Let’s collaborate">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
        custom={0.05}
        className="grid md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] gap-8 items-start"
      >
        <div className="space-y-4 text-sm text-slate-300">
          <p>
            If you&apos;re working on any project, or systems where reliability
            matters, I&apos;d love to hear from you.
          </p>
          <p>
            I&apos;m especially excited about opportunities that combine
            TypeScript, .NET, or ML-driven components with thoughtful UX.
          </p>
          <p>
            I&apos;m also drawn to teams that value clean architecture and take a
            disciplined approach to building maintainable, long-lasting
            software.
          </p>
          <p>
            I enjoy collaborating closely with designers and domain experts to make complex workflows feel natural and intuitive.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-10 text-sm text-slate-300 h-full">
          <div className="flex items-center justify-between">
            <span className="text-slate-400 text-[11px] uppercase tracking-[0.22em]">
              Email
            </span>
            <a
              href="mailto:kornideszofficial@gmail.com"
              className="text-xs text-indigo-300 hover:text-indigo-200"
            >
              kornideszofficial@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-400 text-[11px] uppercase tracking-[0.22em]">
              GitHub
            </span>
            <a
              href="https://github.com/Kornimate"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-indigo-300 hover:text-indigo-200"
            >
              @Kornimate
            </a>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-400 text-[11px] uppercase tracking-[0.22em]">
              LinkedIn
            </span>
            <a
              href="https://www.linkedin.com/in/kornidesz-máté-833633289"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-indigo-300 hover:text-indigo-200"
            >
              Kornidesz Máté
            </a>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

// -----------------------
// App root
// -----------------------

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <main className="pb-20">
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <GithubStats />
        <Contact />
      </main>
      <footer className="border-t border-slate-800/80 py-6 text-[11px] text-slate-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-center gap-3">
          <span>© {new Date().getFullYear()} Kornidesz Máté</span>
        </div>
      </footer>
    </div>
  );
}
