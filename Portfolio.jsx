import React, { useEffect, useMemo, useState } from "react";
import profilePhoto from "./assets/profile.png";
import {
  SiJavascript, SiOpenjdk, SiHtml5,
  SiCss, SiReact, SiNextdotjs, SiRedux, SiSass,
  SiAntdesign, SiMui, SiBootstrap,
  SiJest, SiCypress, SiTestinglibrary,
  SiSpringboot, SiMysql, SiRedis, SiApachesuperset,
  SiNx, SiVite, SiWebpack, SiGit, SiGitlab, SiPostman,
} from "react-icons/si";
import { MdApi, MdGroups } from "react-icons/md";

const TECH_ICON = {
  "JavaScript (ES6+)": { Icon: SiJavascript, color: "#F7DF1E" },
  "Java": { Icon: SiOpenjdk, color: "#E76F00" },
  "HTML5": { Icon: SiHtml5, color: "#E34F26" },
  "CSS3": { Icon: SiCss, color: "#1572B6" },
  "React.js": { Icon: SiReact, color: "#61DAFB" },
  "Next.js": { Icon: SiNextdotjs, color: "#EDEDED" },
  "React Native": { Icon: SiReact, color: "#61DAFB" },
  "Redux": { Icon: SiRedux, color: "#764ABC" },
  "Zustand": { Icon: SiReact, color: "#61DAFB" },
  "Context API": { Icon: SiReact, color: "#61DAFB" },
  "SCSS": { Icon: SiSass, color: "#CC6699" },
  "Ant Design": { Icon: SiAntdesign, color: "#0170FE" },
  "Material-UI": { Icon: SiMui, color: "#007FFF" },
  "Bootstrap": { Icon: SiBootstrap, color: "#7952B3" },
  "Jest": { Icon: SiJest, color: "#C21325" },
  "Cypress": { Icon: SiCypress, color: "#EDEDED" },
  "React Testing Library": { Icon: SiTestinglibrary, color: "#E33332" },
  "Spring Boot": { Icon: SiSpringboot, color: "#6DB33F" },
  "MySQL": { Icon: SiMysql, color: "#4479A1" },
  "Redis": { Icon: SiRedis, color: "#DC382D" },
  "REST API": { Icon: MdApi, color: "#EDEDED" },
  "Apache Superset": { Icon: SiApachesuperset, color: "#20A6C9" },
  "NX Monorepo": { Icon: SiNx, color: "#143055" },
  "Vite": { Icon: SiVite, color: "#646CFF" },
  "Webpack": { Icon: SiWebpack, color: "#8DD6F9" },
  "Git": { Icon: SiGit, color: "#F05032" },
  "GitLab": { Icon: SiGitlab, color: "#FC6D26" },
  "Postman": { Icon: SiPostman, color: "#FF6C37" },
  "Agile / Scrum": { Icon: MdGroups, color: "#EDEDED" },
};

/**
 * Madhusmita Palai — developer portfolio.
 * Self-contained: no CSS framework, no UI library. Inline styles only.
 * Fonts (add once to index.html <head>):
 * <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
 */

const SANS = "'Instrument Sans', system-ui, sans-serif";
const MONO = "'JetBrains Mono', ui-monospace, monospace";
const INK = "#0A0B0D";
const PANEL = "#101115";
const LINE = "rgba(255,255,255,.09)";
const TEXT = "#EDECE8";
const MUTED = "#8A8C93";
const DIM = "#5F626A";
const VIOLET = "#7B6BFF";

const SECTIONS = [
  ["top", "intro"],
  ["timeline", "trajectory"],
  ["work", "experience"],
  ["stack", "stack"],
  ["projects", "projects"],
  ["about", "background"],
  ["contact", "contact"],
];

const PROJECTS = [
  {
    id: "coffee-ui",
    name: "Coffee — Landing Page UI",
    date: "Feb 2023",
    description: "A clean, product-style landing page for a coffee brand — hero section, menu and booking flow.",
    link: "https://spectacular-puffpuff-6ee18b.netlify.app/",
    stack: ["React.js", "SCSS"],
  },
  {
    id: "million-careers",
    name: "Million Careers",
    date: "Aug 2022",
    description: "A landing page for a careers-and-guidance platform connecting unemployed youth with training, mentorship and job opportunities.",
    link: "https://newmillion.netlify.app/",
    stack: ["React.js", "SCSS"],
  },
];

const ROLES = [
  {
    id: "pinnacle",
    company: "Pinnacle Software and Services",
    title: "Software Developer",
    dates: "Oct 2023 — Present",
    place: "Trivandrum · Hybrid",
    blurb:
      "Highpoint Platfrorm ",
    bullets: [
      "Architected and delivered 12+ modules in React.js and Ant Design, migrating the frontend stack to Zustand and Vite.",
      "Built a design system on top of Ant Design to standardise CSS handling across workspaces.",
      "Embedded Apache Superset dashboards wired straight to the database for real-time analytics.",
      "Added Jest and Cypress coverage for unit, integration and end-to-end testing.",
      "Defined API contracts daily with backend engineers and cleared integration bottlenecks across time zones.",
      "Built Parent App, a React Native app giving parents live attendance, grades and schedules, with Redux state.",
      "Building Expense-module CRUD APIs in Java, Spring Boot and MySQL, with Redis integration.",
    ],
    stack: ["React.js", "Redux", "Zustand", "Vite", "SCSS", "Ant Design", "Apache Superset", "NX Monorepo", "Jest", "Cypress", "REST API", "Spring Boot", "Redis", "React Native", "GitLab", "Postman", "Java", "MySQL", "pnpm", "Microfrontends"],
  },
  {
    id: "eaglemount",
    company: "Eaglemount Software",
    title: "Associate Software Developer",
    dates: "Nov 2022 — Sep 2023",
    place: "Hyderabad",
    blurb:
      "Ed-Pedia — a Learning Management System spanning Admin, Staff, Student, Library and Transport, from student onboarding through end-to-end process handling.",
    bullets: [
      "Built 20+ reusable UI components across admin, student, library and transport modules.",
      "Integrated REST APIs for real-time data flow in student management.",
      "Managed app-wide state with Redux, cutting prop-drilling through deeply nested trees.",
      "Translated Figma mockups into responsive React components, consistently hitting sprint goals.",
    ],
    stack: ["HTML5", "CSS3", "SCSS", "React.js", "Redux", "Ant Design", "React Native"],
  },
];

const STACK_GROUPS = [
  { name: "Languages", items: ["JavaScript (ES6+)", "Java", "HTML5", "CSS3"] },
  { name: "Frameworks", items: ["React.js", "Next.js", "React Native", "Redux", "Zustand", "Context API", "SCSS"] },
  { name: "UI Libraries", items: ["Ant Design", "Material-UI", "Bootstrap"] },
  { name: "Testing", items: ["Jest", "Cypress", "React Testing Library"] },
  { name: "Backend & Data", items: ["Spring Boot", "MySQL", "Redis", "REST API", "Apache Superset"] },
  { name: "Tooling & Process", items: ["NX Monorepo", "Vite", "Webpack", "Git", "GitLab", "Postman", "Agile / Scrum"] },
];

// timeline axis: mid-2019 → late-2026
const T0 = 2019.5;
const SPAN = 7.25;
const pct = (v) => (((v - T0) / SPAN) * 100).toFixed(1) + "%";
const TICKS = [2020, 2021, 2022, 2023, 2024, 2025, 2026];

function useActiveSection() {
  const [active, setActive] = useState("top");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    SECTIONS.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  return active;
}


/** roles that used a given technology tag */
function rolesUsing(tag) {
  const t = tag.toLowerCase().replace(/\s*\(.*\)/, "");
  return ROLES.filter((r) =>
    r.stack.some((s) => s.toLowerCase().startsWith(t) || t.startsWith(s.toLowerCase()))
  ).map((r) => r.id);
}

const SectionHead = ({ left, right }) => (
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16, fontFamily: MONO, fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: MUTED, marginBottom: "clamp(24px,3vw,40px)" }}>
    <span>{left}</span>
    <span>{right}</span>
  </div>
);

const sectionStyle = {
  position: "relative",
  zIndex: 1,
  padding: "clamp(36px,5vw,72px) clamp(20px,5vw,80px)",
  borderBottom: `1px solid ${LINE}`,
};

const pill = {
  border: "1px solid rgba(255,255,255,.16)",
  padding: "8px 12px",
  borderRadius: 999,
  color: TEXT,
  fontSize: 12,
  textDecoration: "none",
};

function Spine({ active, accent }) {
  return (
    <nav style={{ position: "fixed", right: 18, top: "50%", transform: "translateY(-50%)", zIndex: 40, display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-end" }}>
      {SECTIONS.map(([id, label]) => {
        const on = active === id;
        return (
          <a key={id} href={`#${id}`} style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: MONO, fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", textDecoration: "none", color: on ? accent : DIM, transition: "color .25s" }}>
            <span>{label}</span>
            <span style={{ display: "block", height: 2, width: on ? 40 : 18, background: on ? accent : DIM, transition: "all .25s" }} />
          </a>
        );
      })}
    </nav>
  );
}

function Timeline({ accent }) {
  const tracks = [
    { label: "B.Tech ECE — Einstein Academy of Technology and Management, BBSR", l: 2019.58, r: 2023.5, bg: "rgba(123,107,255,.10)", border: "rgba(123,107,255,.45)", fg: "#B3A9FF" },
    { label: "Eaglemount Software — Associate Software Developer", l: 2022.83, r: 2023.75, bg: "rgba(255,255,255,.05)", border: "rgba(255,255,255,.2)", fg: "#D6D5D0" },
    { label: "Pinnacle Software — Software Developer · Highpoint SCM", l: 2023.75, r: 2026.75, bg: "rgba(203,255,77,.12)", border: accent, fg: accent },
  ];
  return (
    <div style={{ position: "relative", borderTop: `1px solid ${LINE}`, paddingTop: 10 }}>
      <div style={{ position: "relative", height: 16, fontFamily: MONO, fontSize: 10, color: DIM }}>
        {TICKS.map((y) => (
          <span key={y} style={{ position: "absolute", left: pct(y), transform: "translateX(-50%)" }}>{y}</span>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 8 }}>
        {tracks.map((t) => (
          <div key={t.label} style={{ position: "relative", height: 46 }}>
            <div style={{ position: "absolute", inset: 0, borderTop: "1px dashed rgba(255,255,255,.06)" }} />
            <div style={{ position: "absolute", top: 6, left: pct(t.l), width: (((t.r - t.l) / SPAN) * 100).toFixed(1) + "%", height: 34, background: t.bg, border: `1px solid ${t.border}`, borderRadius: 6, display: "flex", alignItems: "center", padding: "0 12px", overflow: "hidden" }}>
              <span style={{ fontFamily: MONO, fontSize: 11.5, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", color: t.fg }}>{t.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RoleCard({ role, dimmed, accent }) {
  const bullets = role.bullets;
  return (
    <article style={{ border: `1px solid ${LINE}`, borderRadius: 14, background: PANEL, padding: "clamp(18px,2.4vw,32px)", opacity: dimmed ? 0.22 : 1, transition: "opacity .3s" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "space-between", alignItems: "baseline" }}>
        <div>
          <h2 style={{ margin: 0, fontSize: "clamp(20px,2.4vw,30px)", letterSpacing: "-.02em", fontWeight: 600 }}>{role.company}</h2>
          <div style={{ marginTop: 6, fontFamily: MONO, fontSize: 12, color: accent }}>{role.title}</div>
        </div>
        <div style={{ textAlign: "right", fontFamily: MONO, fontSize: 11.5, color: MUTED }}>
          <div>{role.dates}</div>
          <div>{role.place}</div>
        </div>
      </div>

      <p style={{ margin: "18px 0 0", color: "#9FA1A6", fontSize: 14.5, lineHeight: 1.6, maxWidth: "80ch", textWrap: "pretty" }}>{role.blurb}</p>

      <ul style={{ listStyle: "none", padding: 0, margin: "18px 0 0", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))", gap: "10px 28px" }}>
        {bullets.map((b) => (
          <li key={b} style={{ display: "flex", gap: 10, fontSize: 14.5, lineHeight: 1.5, color: "#D6D5D0" }}>
            <span style={{ color: VIOLET, fontFamily: MONO, fontSize: 12, paddingTop: 2 }}>▸</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 18, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,.07)" }}>
        {role.stack.map((s) => (
          <span key={s} style={{ fontFamily: MONO, fontSize: 11, color: MUTED, border: "1px solid rgba(255,255,255,.1)", padding: "4px 9px", borderRadius: 5 }}>{s}</span>
        ))}
      </div>
    </article>
  );
}

export default function Portfolio({ accent = "#CBFF4D" }) {
  const active = useActiveSection();
  const [hovered, setHovered] = useState(null);
  const matched = useMemo(() => (hovered ? rolesUsing(hovered) : null), [hovered]);

  return (
    <div style={{ background: INK, color: TEXT, fontFamily: SANS, minHeight: "100vh", position: "relative", overflowX: "hidden" }}>
      <style>{`
        html { scroll-behavior: smooth; }
        body { margin: 0; background: ${INK}; }
        ::selection { background: ${accent}; color: ${INK}; }
        @keyframes pulse { 0%,100% { opacity: 1 } 50% { opacity: .25 } }
        a:hover { color: ${accent} !important; }
      `}</style>

      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.028) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.028) 1px,transparent 1px)", backgroundSize: "88px 88px" }} />

      <Spine active={active} accent={accent} />

      {/* 00 — intro */}
      <section id="top" style={{ ...sectionStyle, padding: "clamp(28px,6vw,72px) clamp(20px,5vw,80px) clamp(40px,7vw,96px)" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "space-between", alignItems: "baseline", fontFamily: MONO, fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: MUTED }}>
          <span>madhusmita palai</span>
          <span>Balugaon, Odisha · IN</span>
        </div>

        <h1 style={{ fontSize: "clamp(44px,11.5vw,168px)", lineHeight: 0.86, letterSpacing: "-.045em", fontWeight: 700, margin: "clamp(28px,5vw,56px) 0 0", textWrap: "balance" }}>
          Software<br />developer<span style={{ color: accent }}>.</span>
        </h1>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: "clamp(20px,3vw,48px)", marginTop: "clamp(32px,5vw,64px)", alignItems: "start" }}>
          <div style={{ display: "flex", gap: "clamp(16px,2.4vw,28px)", alignItems: "flex-start" }}>
            <img
              src={profilePhoto}
              alt="Madhusmita Palai"
              style={{ width: "clamp(64px,7vw,96px)", height: "clamp(64px,7vw,96px)", borderRadius: "50%", objectFit: "cover", flexShrink: 0, border: `2px solid ${accent}` }}
            />
            <p style={{ margin: 0, fontSize: "clamp(15px,1.35vw,19px)", lineHeight: 1.55, color: "#B9B9B4", maxWidth: "52ch", textWrap: "pretty" }}>
              3.5+ years on the frontend — owning core UI areas and leading stack migrations in React, Redux and SCSS inside NX monorepos. Comfortable driving architecture, design systems and micro-frontends end-to-end, from legacy teardown to production rollout.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, fontFamily: MONO, fontSize: 12.5 }}>
            <div style={{ display: "flex", gap: 10, alignItems: "center", color: accent }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: accent, animation: "pulse 2.4s infinite" }} />
              {/* <span>Available · notice 0–45 days</span> */}
            </div>
            <div style={{ color: MUTED }}>Remote · Hybrid · On-site</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 6 }}>
              <a href="mailto:madhusmitapalei916@gmail.com" style={pill}>email</a>
              <a href="https://linkedin.com/in/madhusmita-p/" style={pill}>linkedin</a>
              <a href="https://github.com/madhusmitapalai" style={pill}>github</a>
            </div>
          </div>
        </div>
      </section>

      {/* 01 — trajectory */}
      <section id="timeline" style={sectionStyle}>
        <SectionHead left="01 — trajectory" right="2019 → now" />
        <Timeline accent={accent} />
      </section>

      {/* 02 — experience */}
      <section id="work" style={sectionStyle}>
        <SectionHead left="02 — experience" right={hovered ? `tracing · ${hovered}` : "2 roles · 3.5+ yrs"} />
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(16px,2vw,24px)" }}>
          {ROLES.map((r) => (
            <RoleCard key={r.id} role={r} accent={accent} dimmed={!!matched && !matched.includes(r.id)} />
          ))}
        </div>
      </section>

      {/* 03 — stack */}
      <section id="stack" style={sectionStyle}>
        <SectionHead left="03 — stack" right="hover to trace usage" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,250px),1fr))", gap: "clamp(16px,2vw,28px)" }}>
          {STACK_GROUPS.map((g) => (
            <div key={g.name}>
              <div style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: ".14em", textTransform: "uppercase", color: DIM, paddingBottom: 10, borderBottom: `1px solid ${LINE}` }}>{g.name}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 14 }}>
                {g.items.map((name) => {
                  const on = hovered === name;
                  const icon = TECH_ICON[name];
                  return (
                    <span
                      key={name}
                      onMouseEnter={() => setHovered(name)}
                      onMouseLeave={() => setHovered(null)}
                      style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 13, fontFamily: MONO, padding: "6px 10px", borderRadius: 6, cursor: "default", border: `1px solid ${on ? accent : "rgba(255,255,255,.1)"}`, background: on ? accent : "rgba(255,255,255,.03)", color: on ? INK : "#D6D5D0", transition: "all .2s" }}
                    >
                      {icon && <icon.Icon size={14} color={on ? INK : icon.color} style={{ flexShrink: 0 }} />}
                      {name}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 04 — projects */}
      <section id="projects" style={sectionStyle}>
        <SectionHead left="04 — projects" right={`${PROJECTS.length} project${PROJECTS.length > 1 ? "s" : ""}`} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: "clamp(18px,2.5vw,32px)" }}>
          {PROJECTS.map((p) => (
            <a
              key={p.id}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              style={{ display: "block", border: `1px solid ${LINE}`, borderRadius: 14, padding: "clamp(18px,2.4vw,28px)", background: PANEL, textDecoration: "none", color: TEXT }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
                <h3 style={{ margin: 0, fontSize: "clamp(18px,2vw,24px)", fontWeight: 600, letterSpacing: "-.02em" }}>{p.name}</h3>
                <span style={{ fontFamily: MONO, fontSize: 12, color: accent, whiteSpace: "nowrap" }}>visit ↗</span>
              </div>
              {p.date && <div style={{ marginTop: 6, fontFamily: MONO, fontSize: 11.5, color: MUTED }}>{p.date}</div>}
              <p style={{ margin: "10px 0 0", color: MUTED, fontSize: 14, lineHeight: 1.55 }}>{p.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 16, paddingTop: 14, borderTop: "1px solid rgba(255,255,255,.07)" }}>
                {p.stack.map((s) => (
                  <span key={s} style={{ fontFamily: MONO, fontSize: 11, color: MUTED, border: "1px solid rgba(255,255,255,.1)", padding: "4px 9px", borderRadius: 5 }}>{s}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 05 — background */}
      <section id="about" style={sectionStyle}>
        <SectionHead left="05 — background" right="education · languages" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: "clamp(18px,2.5vw,32px)" }}>
          <div style={{ border: `1px solid ${LINE}`, borderRadius: 14, padding: "clamp(18px,2.4vw,28px)", background: PANEL }}>
            <div style={{ fontFamily: MONO, fontSize: 11.5, color: accent }}>2019 — 2023</div>
            <h3 style={{ margin: "10px 0 0", fontSize: "clamp(18px,2vw,24px)", fontWeight: 600, letterSpacing: "-.02em" }}>B.Tech, Electronics &amp; Communication Engineering</h3>
            <p style={{ margin: "8px 0 0", color: MUTED, fontSize: 14, lineHeight: 1.55 }}>Einstein Academy of Technology and Management, Bhubaneswar, Odisha</p>
          </div>
          <div style={{ border: `1px solid ${LINE}`, borderRadius: 14, padding: "clamp(18px,2.4vw,28px)", background: PANEL }}>
            <div style={{ fontFamily: MONO, fontSize: 11.5, color: VIOLET }}>spoken</div>
            <h3 style={{ margin: "10px 0 0", fontSize: "clamp(18px,2vw,24px)", fontWeight: 600, letterSpacing: "-.02em" }}>English · Odia · Hindi</h3>
            <p style={{ margin: "8px 0 0", color: MUTED, fontSize: 14, lineHeight: 1.55 }}>Fluent async and verbal communication across distributed, cross-functional teams.</p>
          </div>
        </div>
      </section>

      {/* 06 — contact */}
      <footer id="contact" style={{ position: "relative", zIndex: 1, padding: "clamp(48px,8vw,120px) clamp(20px,5vw,80px)" }}>
        <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: MUTED }}>06 — contact</div>
        <a href="mailto:madhusmitapalei916@gmail.com" style={{ display: "block", marginTop: "clamp(18px,3vw,36px)", fontSize: "clamp(26px,6.5vw,86px)", lineHeight: 1, letterSpacing: "-.045em", fontWeight: 700, color: TEXT, wordBreak: "break-word", textDecoration: "none" }}>
          madhusmitapalei916<br />@gmail.com
        </a>
        <a href="tel:+919668145551" style={{ display: "inline-block", marginTop: "clamp(14px,2.4vw,24px)", fontFamily: MONO, fontSize: "clamp(14px,1.8vw,18px)", color: MUTED, textDecoration: "none" }}>
          +91 96681 45551
        </a>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 20, justifyContent: "space-between", marginTop: "clamp(32px,5vw,64px)", paddingTop: 20, borderTop: `1px solid ${LINE}`, fontFamily: MONO, fontSize: 11, color: DIM, letterSpacing: ".1em", textTransform: "uppercase" }}>
          <span>© 2026 Madhusmita Palai</span>
          <img
            src="https://visitor-badge.laobi.icu/badge?page_id=madhusmita-portfolio.visits&left_text=visitors"
            alt="visitor count"
            style={{ height: 20, borderRadius: 4 }}
          />
          <a href="#top" style={{ color: DIM, textDecoration: "none" }}>back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
