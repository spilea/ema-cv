"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";

type Language = "lt" | "en";

type Experience = {
  id: string;
  company: string;
  year: string;
  role: {
    lt: string;
    en: string;
  };
  description: {
    lt: string;
    en: string;
  };
  color: string;
  background: string;
};

const experiences: Experience[] = [
  {
    id: "elinta",
    company: "Elinta Robotics",
    year: "2025",
    role: {
      lt: "Praktika",
      en: "Internship",
    },
    description: {
      lt: "Praktikos metu įgijau patirties vaizdų duomenų paruošimo ir defektų anotavimo srityje, ruošiant duomenis dirbtinio intelekto modelių mokymui. Taip pat susipažinau su skirtingais duomenų žymėjimo įrankiais bei technologine darbo aplinka.",
      en: "During my internship, I gained experience in image data preparation and defect annotation, preparing data for AI model training. I also became familiar with different data labeling tools and the technological environment used in the field.",
    },
    color: "#9d83e8",
    background: "#f1ecff",
  },
  {
    id: "3b",
    company: "3B SOLUTIONS",
    year: "2023 — 2024",
    role: {
      lt: "Padavėja",
      en: "Waitress",
    },
    description: {
      lt: "Šiame darbe išmokau susidaryti veiksmų planą, dirbti komandoje ir greitai spręsti problemas stresinėse situacijose. Taip pat pagerinau komunikacijos ir bendradarbiavimo įgūdžius.",
      en: "This experience taught me to create action plans, work effectively in a team and think quickly in stressful situations. It also strengthened my communication and collaboration skills.",
    },
    color: "#d98c9f",
    background: "#fff0f4",
  },
  {
    id: "rieke",
    company: "RIEKĖ",
    year: "2021",
    role: {
      lt: "Padavėja",
      en: "Waitress",
    },
    description: {
      lt: "Šio darbo metu išmokau dirbti su kasos aparatu, bendrauti su žmonėmis ir atsakingai atlikti kasdienes užduotis.",
      en: "During this job, I learned to work with a cash register, communicate with people and responsibly handle everyday tasks.",
    },
    color: "#7fa995",
    background: "#edf7f2",
  },
];

const content = {
  lt: {
    nav: {
      about: "Apie mane",
      experience: "Patirtis",
      education: "Išsilavinimas",
      skills: "Įgūdžiai",
      contact: "Kontaktai",
    },

    hero: {
      button: "Susipažinkime",
    },

    about: {
      eyebrow: "01 / Apie mane",
      title: "Apie mane",
      intro:
        "Esu baigusi Vilnius TECH universiteto Taikomojo dirbtinio intelekto studijų programą ir įgijusi inžinerijos bakalauro laipsnį.",
      paragraph:
        "Esu komunikabili, kūrybiška ir atsakinga. Mėgstu dirbti su kitais, susitelkti į užduotis ir nuolat mokytis naujų dalykų.",
      university: "VILNIUS TECH",
      universityText: "Taikomasis dirbtinis intelektas",
      erasmus: "ERASMUS+",
      erasmusText: "León universitetas, Ispanija",
      representation: "STUDENTŲ ATSTOVYBĖ",
      representationText: "HR koordinatorė ir pirmakursių kuratorė",
    },

    experience: {
      eyebrow: "02 / Patirtis",
      title: "Patirtis",
      description:
        "Kiekviena patirtis suteikė skirtingų įgūdžių ir padėjo augti tiek profesiškai, tiek asmeniškai.",
    },

    education: {
      eyebrow: "03 / Išsilavinimas",
      title: "Išsilavinimas",
      schoolDate: "2018 — 2022",
      school: "Vilniaus Radvilų gimnazija",
      universityDate: "2022 — 2026",
      university: "VILNIUS TECH",
      degree: "Inžinerijos bakalauras",
      program: "Taikomojo dirbtinio intelekto programa",
      erasmusDate: "2025 / 02 — 2025 / 06",
      erasmus: "Erasmus+",
      erasmusText:
        "Studijos León universitete, Ispanijoje, pagal Erasmus+ programą.",
    },

    skills: {
      eyebrow: "04 / Įgūdžiai",
      title: "Įgūdžiai",
      description:
        "Techniniai pagrindai, duomenų paruošimas ir įrankiai, su kuriais teko dirbti studijų bei praktikos metu.",
      technical: "Techniniai",
      tools: "Įrankiai",
      languages: "Kalbos",
      python: "Python · pagrindai",
      excel: "Excel · pagrindai",
      sql: "SQL · pagrindai",
      annotation: "Duomenų anotavimas",
      preparation: "Duomenų paruošimas",
      colab: "Google Colab",
      pycharm: "PyCharm",
      vscode: "Visual Studio Code",
      anaconda: "Anaconda",
      lithuanian: "Lietuvių · gimtoji",
      english: "Anglų · B2",
      spanish: "Ispanų · mokausi",
    },

    contact: {
      eyebrow: "05 / Kontaktai",
      title: "Susisiekime",
      description:
        "Jeigu mano patirtis ir interesai atitinka tai, ko ieškote, mielai pabendrausiu.",
      email: "El. paštas",
      phone: "Telefonas",
      copy: "Kopijuoti el. paštą",
      copied: "Nukopijuota",
      footer: "Ema Špiliauskaitė · 2026",
    },
  },

  en: {
    nav: {
      about: "About me",
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      contact: "Contact",
    },

    hero: {
      button: "Explore my story",
    },

    about: {
      eyebrow: "01 / About me",
      title: "About me",
      intro:
        "I graduated from Vilnius TECH University with a Bachelor of Engineering degree in Applied Artificial Intelligence.",
      paragraph:
        "I am communicative, creative and responsible. I enjoy working with others, staying focused on tasks and continuously learning new things.",
      university: "VILNIUS TECH",
      universityText: "Applied Artificial Intelligence",
      erasmus: "ERASMUS+",
      erasmusText: "University of León, Spain",
      representation: "STUDENTS' REPRESENTATION",
      representationText: "HR Coordinator & student mentor",
    },

    experience: {
      eyebrow: "02 / Experience",
      title: "Experience",
      description:
        "Every experience gave me a different set of skills and helped me grow both professionally and personally.",
    },

    education: {
      eyebrow: "03 / Education",
      title: "Education",
      schoolDate: "2018 — 2022",
      school: "Vilniaus Radvilų Gymnasium",
      universityDate: "2022 — 2026",
      university: "VILNIUS TECH",
      degree: "Bachelor of Engineering",
      program: "Applied Artificial Intelligence",
      erasmusDate: "2025 / 02 — 2025 / 06",
      erasmus: "Erasmus+",
      erasmusText:
        "Studies at the University of León, Spain, as part of the Erasmus+ programme.",
    },

    skills: {
      eyebrow: "04 / Skills",
      title: "Skills",
      description:
        "Technical foundations, data preparation and tools I have worked with during my studies and internship.",
      technical: "Technical",
      tools: "Tools",
      languages: "Languages",
      python: "Python · basic",
      excel: "Excel · basic",
      sql: "SQL · basic",
      annotation: "Data annotation",
      preparation: "Data preparation",
      colab: "Google Colab",
      pycharm: "PyCharm",
      vscode: "Visual Studio Code",
      anaconda: "Anaconda",
      lithuanian: "Lithuanian · native",
      english: "English · B2",
      spanish: "Spanish · learning",
    },

    contact: {
      eyebrow: "05 / Contact",
      title: "Let's talk",
      description:
        "If my experience and interests match what you are looking for, I would be happy to connect.",
      email: "Email",
      phone: "Phone",
      copy: "Copy email",
      copied: "Copied",
      footer: "Ema Špiliauskaitė · 2026",
    },
  },
};

/* =========================================================
   REVEAL ANIMATION
   Animacija vyksta tik leidžiantis žemyn.
   Kylant aukštyn elementai nesianimuoja.
========================================================= */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const hasEnteredViewport = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      setVisible(true);
      return;
    }

    lastScrollY.current = window.scrollY;

    const update = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastScrollY.current;
      const scrollingUp = currentY < lastScrollY.current;
      const rect = element.getBoundingClientRect();

      // Initial load / direct navigation to an anchor:
      // don't leave content permanently invisible.
      if (!hasEnteredViewport.current) {
        if (rect.top < window.innerHeight * 0.88 && rect.bottom > 0) {
          hasEnteredViewport.current = true;
          setVisible(true);
        }
      }

      // Reveal only when the user is moving down.
      if (scrollingDown && rect.top < window.innerHeight * 0.88 && rect.bottom > 0) {
        hasEnteredViewport.current = true;
        setVisible(true);
      }

      // When scrolling back up, keep already revealed content visible.
      // Reset only after the whole element has moved below the viewport.
      if (scrollingUp && rect.top >= window.innerHeight) {
        hasEnteredViewport.current = false;
        setVisible(false);
      }

      lastScrollY.current = currentY;
      ticking.current = false;
    };

    const handleScroll = () => {
      if (ticking.current) return;

      ticking.current = true;
      window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      ticking.current = false;
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={[
        "transform transition-all duration-[900ms]",
        "ease-[cubic-bezier(0.22,1,0.36,1)]",
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-5xl">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-black/35">
        {eyebrow}
      </p>

      <h2 className="mt-6 text-5xl font-semibold leading-[0.92] tracking-[-0.055em] md:text-7xl lg:text-8xl">
        {title}
      </h2>

      {description && (
        <p className="mt-8 max-w-2xl text-lg leading-8 text-black/50 md:text-xl">
          {description}
        </p>
      )}
    </div>
  );
}

/* =========================================================
   EXPERIENCE CARD
========================================================= */

function ExperienceCard({
  experience,
  language,
  open,
  onToggle,
}: {
  experience: Experience;
  language: Language;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <article
      className="group overflow-hidden rounded-[2rem] border border-black/[0.07] bg-white/70 shadow-[0_10px_50px_rgba(0,0,0,0.035)] backdrop-blur-xl transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_20px_70px_rgba(0,0,0,0.07)]"
      style={{
        background: open
          ? `linear-gradient(135deg, rgba(255,255,255,.95), ${experience.background})`
          : "rgba(255,255,255,.70)",
      }}
    >
      <div className="p-6 md:p-8 lg:p-10">
        <div className="grid gap-6 md:grid-cols-[130px_minmax(0,1fr)_60px] md:items-center">
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-black/35">
            {experience.year}
          </div>

          <div className="min-w-0">
            <h3 className="break-words text-3xl font-medium leading-tight tracking-[-0.035em] md:text-4xl">
              {experience.company}
            </h3>

            <p
              className="mt-2 text-sm font-medium"
              style={{
                color: experience.color,
              }}
            >
              {experience.role[language]}
            </p>
          </div>

          <button
            type="button"
            onClick={onToggle}
            aria-expanded={open}
            aria-label={
              open
                ? `Close ${experience.company}`
                : `Open ${experience.company}`
            }
            className="flex h-14 w-14 shrink-0 items-center justify-center justify-self-end rounded-full border border-black/10 bg-white/70 text-xl transition-all duration-500 hover:scale-105 hover:bg-white"
          >
            <span
              className={`transition-transform duration-500 ${
                open ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
        </div>

        <div
          className={`grid transition-[grid-template-rows] duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <div
              className={`transition-all duration-700 ${
                open
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-5 opacity-0"
              }`}
            >
              <div className="my-8 h-px bg-black/[0.07]" />

              <div className="grid gap-7 md:grid-cols-[1fr_auto] md:items-end">
                <p className="max-w-3xl text-base leading-8 text-black/55 md:text-lg">
                  {experience.description[language]}
                </p>

                <span
                  className="text-xs uppercase tracking-[0.18em]"
                  style={{
                    color: experience.color,
                  }}
                >
                  {experience.role[language]}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function Home() {
  const [language, setLanguage] = useState<Language>("lt");
  const [scrollY, setScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const [openExperience, setOpenExperience] = useState<string | null>(
    null
  );
  const [copied, setCopied] = useState(false);

  const t = content[language];

  /* =======================================================
     HEADER + HERO SCROLL
  ======================================================= */

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const delta = currentScrollY - lastScrollY;

        setScrollY(currentScrollY);

        if (currentScrollY < 40) {
          setShowHeader(true);
        } else if (Math.abs(delta) > 4) {
          setShowHeader(delta < 0);
        }

        lastScrollY = currentScrollY;
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =======================================================
     COPY EMAIL
  ======================================================= */

  const copyEmail = async () => {
    const email = "ema.spiliauskaite1@gmail.com";

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = email;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
      }

      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="min-h-screen scroll-smooth overflow-x-hidden bg-[#faf9f6] text-[#171717] selection:bg-[#c9b6ff] selection:text-black">
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav
        className={`fixed left-0 top-0 z-50 w-full px-6 py-6 md:px-10 transition-all duration-500 ${
          showHeader
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a
            href="#top"
            className="text-lg font-semibold tracking-tight"
          >
            CV
          </a>

          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-black/10 bg-white/75 p-1.5 text-sm shadow-sm backdrop-blur-md md:flex">
            <a
              href="#about"
              className="rounded-full px-4 py-2 text-xs text-black/55 transition hover:bg-black/5 hover:text-black"
            >
              {t.nav.about}
            </a>

            <a
              href="#experience"
              className="rounded-full px-4 py-2 text-xs text-black/55 transition hover:bg-black/5 hover:text-black"
            >
              {t.nav.experience}
            </a>

            <a
              href="#education"
              className="rounded-full px-4 py-2 text-xs text-black/55 transition hover:bg-black/5 hover:text-black"
            >
              {t.nav.education}
            </a>

            <a
              href="#skills"
              className="rounded-full px-4 py-2 text-xs text-black/55 transition hover:bg-black/5 hover:text-black"
            >
              {t.nav.skills}
            </a>

            <a
              href="#contact"
              className="rounded-full px-4 py-2 text-xs text-black/55 transition hover:bg-black/5 hover:text-black"
            >
              {t.nav.contact}
            </a>
          </div>

          <div className="flex items-center gap-1 rounded-full border border-black/10 bg-white/75 p-1 backdrop-blur-md">
            <button
              type="button"
              aria-pressed={language === "lt"}
              aria-label="Pasirinkti lietuvių kalbą"
              onClick={() => setLanguage("lt")}
              className={`rounded-full px-4 py-2 text-xs transition ${
                language === "lt"
                  ? "bg-black text-white"
                  : "text-black/50 hover:text-black"
              }`}
            >
              LT
            </button>

            <button
              type="button"
              aria-pressed={language === "en"}
              aria-label="Switch to English"
              onClick={() => setLanguage("en")}
              className={`rounded-full px-4 py-2 text-xs transition ${
                language === "en"
                  ? "bg-black text-white"
                  : "text-black/50 hover:text-black"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </nav>

      {/* =====================================================
          HERO
          ORIGINALUS PIRMAS PUSLAPIS
      ===================================================== */}

      <section
        id="top"
        className="relative flex min-h-screen items-center justify-center overflow-visible px-6"
      >
        <div className="absolute left-[8%] top-[20%] h-32 w-32 rounded-full bg-[#c9b6ff] opacity-70 blur-[2px]" />

        <div className="absolute right-[10%] top-[30%] h-24 w-24 rounded-full bg-[#ffb7d5] opacity-70 blur-[2px]" />

        <div className="absolute bottom-[15%] left-[20%] h-20 w-20 rounded-full bg-[#b8e8d4] opacity-70 blur-[2px]" />

        <div className="absolute bottom-[20%] right-[20%] h-28 w-28 rounded-full bg-[#ffd59e] opacity-70 blur-[2px]" />

        <div className="relative z-10 flex flex-col items-center pt-16">
          <div
            className="relative h-72 w-72 transition-transform duration-100 md:h-80 md:w-80"
            style={{
              transform: `scale(${Math.max(
                1 - scrollY / 700,
                0.65
              )})`,
              opacity: Math.max(1 - scrollY / 500, 0),
            }}
          >
            <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-[#c9b6ff] via-[#ffb7d5] to-[#ffd59e] opacity-50 blur-3xl" />

            <div className="relative h-full w-full overflow-hidden rounded-full border-[6px] border-white bg-white shadow-2xl">
              <Image
                src="/profile.jpg"
                alt="Ema Špiliauskaitė"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
              />
            </div>

            <div className="absolute -right-14 top-2 h-11 w-11 rounded-full border-4 border-white bg-[#b8e8d4] shadow-lg" />

            <div className="absolute -bottom-1 -left-5 h-8 w-8 rounded-full border-2 border-white bg-[#c9b6ff] shadow-lg" />
          </div>

          <h1 className="mt-12 text-center text-5xl font-semibold tracking-[-0.05em] md:text-7xl lg:text-8xl">
            Ema Špiliauskaitė
          </h1>

          <a
            href="#about"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm font-medium text-white transition duration-300 hover:scale-105"
          >
            {t.hero.button}

            <span className="transition-transform duration-300 group-hover:translate-y-1">
              ↓
            </span>
          </a>
        </div>
      </section>

      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section
        id="about"
        className="relative overflow-hidden px-6 py-32 md:py-44" style={{ background: "linear-gradient(to bottom, #faf9f6 0%, #f8f4fa 10%, #f4efff 32%, #fff4f8 70%, #fff3df 100%)" }}
      >
        <div className="pointer-events-none absolute inset-x-0 bottom-[-180px] h-[450px] bg-gradient-to-b from-[#f4efff] via-[#fff1f6] to-[#fff7ed] blur-3xl" />

        <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#c9b6ff]/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              eyebrow={t.about.eyebrow}
              title={t.about.title}
            />
          </Reveal>

          <div className="mt-14 max-w-5xl">
            <Reveal delay={120}>
              <p className="text-2xl leading-[1.55] tracking-[-0.025em] text-black/65 md:text-4xl md:leading-[1.45]">
                {t.about.intro}
              </p>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-8 max-w-3xl text-base leading-8 text-black/50 md:text-lg">
                {t.about.paragraph}
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            <Reveal delay={120}>
              <div className="h-full rounded-[2rem] border border-black/[0.06] bg-white/60 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-white/80">
                <p className="text-xs uppercase tracking-[0.18em] text-black/30">
                  2022 — 2026
                </p>

                <h3 className="mt-8 text-2xl font-medium tracking-tight">
                  {t.about.university}
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/45">
                  {t.about.universityText}
                </p>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="h-full rounded-[2rem] border border-black/[0.06] bg-white/60 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-white/80">
                <p className="text-xs uppercase tracking-[0.18em] text-black/30">
                  2025
                </p>

                <h3 className="mt-8 text-2xl font-medium tracking-tight">
                  {t.about.erasmus}
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/45">
                  {t.about.erasmusText}
                </p>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="h-full rounded-[2rem] border border-black/[0.06] bg-white/60 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-white/80">
                <p className="text-xs uppercase tracking-[0.18em] text-black/30">
                  5 mėn. / mentorystė
                </p>

                <h3 className="mt-8 text-2xl font-medium tracking-tight">
                  {t.about.representation}
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/45">
                  {t.about.representationText}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE
      ===================================================== */}

      <section
        id="experience"
        className="relative overflow-hidden px-6 py-32 md:py-44" style={{ background: "linear-gradient(to bottom, #fff3df 0%, #fff7ed 24%, #faf9f6 100%)" }}
      >
        <div className="pointer-events-none absolute inset-x-0 top-[-180px] h-[450px] bg-gradient-to-b from-[#fff1f6] via-[#fff7ed] to-transparent blur-3xl" />

        <div className="pointer-events-none absolute inset-x-0 bottom-[-200px] h-[450px] bg-gradient-to-b from-[#fff7ed] via-[#faf9f6] to-[#f2f7f4] blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              eyebrow={t.experience.eyebrow}
              title={t.experience.title}
              description={t.experience.description}
            />
          </Reveal>

          <div className="mt-16 space-y-4 md:mt-20">
            {experiences.map((experience, index) => (
              <Reveal
                key={experience.id}
                delay={index * 120}
              >
                <ExperienceCard
                  experience={experience}
                  language={language}
                  open={openExperience === experience.id}
                  onToggle={() =>
                    setOpenExperience(
                      openExperience === experience.id
                        ? null
                        : experience.id
                    )
                  }
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          EDUCATION
      ===================================================== */}

      <section
        id="education"
        className="relative overflow-hidden px-6 py-32 md:py-44" style={{ background: "linear-gradient(to bottom, #faf9f6 0%, #f5f7f5 55%, #edf7f2 100%)" }}
      >
        <div className="pointer-events-none absolute inset-x-0 top-[-180px] h-[400px] bg-gradient-to-b from-[#fff7ed] to-[#faf9f6] blur-3xl" />

        <div className="pointer-events-none absolute inset-x-0 bottom-[-180px] h-[420px] bg-gradient-to-b from-[#faf9f6] via-[#f1f7f3] to-[#edf7f2] blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              eyebrow={t.education.eyebrow}
              title={t.education.title}
            />
          </Reveal>

          <div className="relative mt-20">
            <div className="absolute left-[7px] top-4 hidden h-[calc(100%-2rem)] w-px bg-black/10 md:block" />

            <div className="space-y-14 md:space-y-20">
              <Reveal>
                <div className="grid gap-6 md:grid-cols-[160px_1fr] md:gap-12">
                  <div>
                    <div className="hidden h-4 w-4 rounded-full border-4 border-[#faf9f6] bg-[#c9b6ff] shadow-sm md:block" />

                    <p className="mt-4 text-xs uppercase tracking-[0.18em] text-black/35">
                      {t.education.schoolDate}
                    </p>
                  </div>

                  <div className="rounded-[2rem] border border-black/[0.06] bg-white/65 p-7 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-lg md:p-9">
                    <p className="text-xs uppercase tracking-[0.18em] text-black/30">
                      {t.education.schoolDate}
                    </p>

                    <h3 className="mt-4 text-2xl font-medium tracking-tight md:text-3xl">
                      {t.education.school}
                    </h3>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="grid gap-6 md:grid-cols-[160px_1fr] md:gap-12">
                  <div>
                    <div className="hidden h-4 w-4 rounded-full border-4 border-[#faf9f6] bg-[#9d83e8] shadow-sm md:block" />

                    <p className="mt-4 text-xs uppercase tracking-[0.18em] text-black/35">
                      {t.education.universityDate}
                    </p>
                  </div>

                  <div className="rounded-[2rem] border border-[#c9b6ff]/30 bg-white/75 p-7 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-lg md:p-9">
                    <p className="text-xs uppercase tracking-[0.18em] text-[#8b72d9]">
                      {t.education.universityDate}
                    </p>

                    <h3 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">
                      {t.education.university}
                    </h3>

                    <p className="mt-3 text-lg text-black/60">
                      {t.education.degree}
                    </p>

                    <p className="mt-2 text-sm leading-7 text-black/40">
                      {t.education.program}
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={240}>
                <div className="grid gap-6 md:grid-cols-[160px_1fr] md:gap-12">
                  <div>
                    <div className="hidden h-4 w-4 rounded-full border-4 border-[#faf9f6] bg-[#ffb7d5] shadow-sm md:block" />

                    <p className="mt-4 text-xs uppercase tracking-[0.18em] text-black/35">
                      {t.education.erasmusDate}
                    </p>
                  </div>

                  <div className="rounded-[2rem] border border-[#ffb7d5]/30 bg-white/70 p-7 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-lg md:p-9">
                    <p className="text-xs uppercase tracking-[0.18em] text-[#d98c9f]">
                      {t.education.erasmusDate}
                    </p>

                    <h3 className="mt-4 text-3xl font-medium tracking-tight">
                      {t.education.erasmus}
                    </h3>

                    <p className="mt-4 max-w-2xl text-base leading-8 text-black/50">
                      {t.education.erasmusText}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SKILLS
      ===================================================== */}

      <section
        id="skills"
        className="relative overflow-hidden px-6 py-32 md:py-44" style={{
          background:
            "linear-gradient(to bottom, #edf7f2 0%, #e8f3ee 55%, #dce8e3 100%)",
        }}
      >
        <div className="pointer-events-none absolute inset-x-0 top-[-180px] h-[420px] bg-gradient-to-b from-[#f1f7f3] to-[#edf7f2] blur-3xl" />

        <div className="pointer-events-none absolute inset-x-0 bottom-[-180px] h-[450px] bg-gradient-to-b from-[#edf7f2] via-[#dce8e3] to-[#171717] blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              eyebrow={t.skills.eyebrow}
              title={t.skills.title}
              description={t.skills.description}
            />
          </Reveal>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            <Reveal delay={100}>
              <div className="h-full rounded-[2rem] border border-black/[0.06] bg-white/65 p-7 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-white/85 hover:shadow-xl md:p-8">
                <p className="text-xs uppercase tracking-[0.18em] text-black/35">
                  {t.skills.technical}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    t.skills.python,
                    t.skills.excel,
                    t.skills.sql,
                    t.skills.annotation,
                    t.skills.preparation,
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-black/[0.07] bg-[#faf9f6] px-4 py-2.5 text-sm text-black/65 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#9d83e8]/30 hover:bg-[#f4efff]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="h-full rounded-[2rem] border border-black/[0.06] bg-white/65 p-7 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-white/85 hover:shadow-xl md:p-8">
                <p className="text-xs uppercase tracking-[0.18em] text-black/35">
                  {t.skills.tools}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    t.skills.colab,
                    t.skills.pycharm,
                    t.skills.vscode,
                    t.skills.anaconda,
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-black/[0.07] bg-[#faf9f6] px-4 py-2.5 text-sm text-black/65 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d98c9f]/30 hover:bg-[#fff1f5]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="h-full rounded-[2rem] border border-black/[0.06] bg-white/65 p-7 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-white/85 hover:shadow-xl md:p-8">
                <p className="text-xs uppercase tracking-[0.18em] text-black/35">
                  {t.skills.languages}
                </p>

                <div className="mt-7 space-y-3">
                  {[
                    t.skills.lithuanian,
                    t.skills.english,
                    t.skills.spanish,
                  ].map((languageItem) => (
                    <div
                      key={languageItem}
                      className="rounded-2xl border border-black/[0.06] bg-[#faf9f6] px-4 py-3 text-sm text-black/65 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7fa995]/30 hover:bg-[#edf7f2] hover:text-[#527d68]"
                    >
                      {languageItem}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section
        id="contact"
        className="relative min-h-[80vh] overflow-hidden px-6 py-32 text-white md:py-44" style={{
          background:
            "linear-gradient(to bottom, #dce8e3 0%, #b7c3be 5%, #747f7a 14%, #3b403e 30%, #171717 56%, #171717 100%)",
        }}
      >
        <div className="pointer-events-none absolute inset-x-0 top-[-180px] h-[400px] bg-gradient-to-b from-[#dce8e3] via-[#394440] to-[#171717] blur-3xl" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#c9b6ff]/10 via-[#ffb7d5]/10 to-[#b8e8d4]/10 blur-3xl" />

        <div className="relative mx-auto flex min-h-[55vh] max-w-6xl flex-col justify-between">
          <Reveal>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-white/30">
                {t.contact.eyebrow}
              </p>

              <h2 className="mt-6 max-w-5xl text-6xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-8xl lg:text-[8rem]">
                {t.contact.title}
              </h2>

              <p className="mt-8 max-w-xl text-base leading-8 text-white/45 md:text-lg">
                {t.contact.description}
              </p>
            </div>
          </Reveal>

          <div className="mt-20 grid gap-12 md:grid-cols-[1fr_auto] md:items-end">
            <Reveal delay={150}>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/25">
                  {t.contact.email}
                </p>

                <a
                  href="mailto:ema.spiliauskaite1@gmail.com"
                  className="mt-4 inline-block break-all text-2xl tracking-[-0.025em] text-white transition-colors duration-300 hover:text-[#c9b6ff] md:text-4xl"
                >
                  ema.spiliauskaite1@gmail.com
                </a>

                <button
                  type="button"
                  aria-live="polite"
                  onClick={copyEmail}
                  className="mt-6 rounded-full border border-white/15 px-5 py-2.5 text-xs text-white/60 transition-all duration-300 hover:border-white/30 hover:bg-white/5 hover:text-white"
                >
                  {copied ? t.contact.copied : t.contact.copy}
                </button>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <div className="md:text-right">
                <p className="text-xs uppercase tracking-[0.18em] text-white/25">
                  {t.contact.phone}
                </p>

                <a
                  href="tel:+37062585817"
                  className="mt-3 inline-block text-lg text-white/70 transition-colors hover:text-white"
                >
                  +370 625 85817
                </a>
              </div>
            </Reveal>
          </div>

          <div className="mt-24 border-t border-white/10 pt-6">
            <p className="text-xs text-white/25">
              {t.contact.footer}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}