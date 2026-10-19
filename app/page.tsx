"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";

type Language = "lt" | "en";

type Experience = {
  id: string;
  company: {
    lt: string;
    en: string;
  };
  year: string;
  role: {
    lt: string;
    en: string;
  };
  duration: {
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
    company: {
      lt: "Elinta Robotics",
      en: "Elinta Robotics",
    },
    year: "2025",
    role: {
      lt: "Praktika",
      en: "Internship",
    },
    duration: {
      lt: "1 mėn. 26 d.",
      en: "1 month 26 days",
    },
    description: {
      lt: "Praktikos metu įgijau patirties vaizdo duomenų paruošimo ir defektų anotavimo srityje, ruošiant duomenis dirbtinio intelekto modelių mokymui. Taip pat susipažinau su skirtingais duomenų žymėjimo įrankiais bei technologine darbo aplinka.",
      en: "During my internship, I gained experience in image data preparation and defect annotation, preparing data for AI model training. I also became familiar with different data labeling tools and the workflows used in the field.",
    },
    color: "#9d83e8",
    background: "#f1ecff",
  },
  {
    id: "3b",
    company: {
      lt: "3B SOLUTIONS",
      en: "3B SOLUTIONS",
    },
    year: "2023 — 2024",
    role: {
      lt: "Padavėja",
      en: "Waitress",
    },
    duration: {
      lt: "7 mėn. 9 d.",
      en: "7 months 9 days",
    },
    description: {
      lt: "Darbo metu išmokau susidaryti veiksmų planą, dirbti komandoje ir greitai spręsti problemas stresinėse situacijose. Taip pat pagerinau komunikacijos ir bendradarbiavimo įgūdžius.",
      en: "This experience taught me to create action plans, work effectively in a team and think quickly in stressful situations. It also strengthened my communication and collaboration skills.",
    },
    color: "#d98c9f",
    background: "#fff0f4",
  },
  {
    id: "student-representation",
    company: {
      lt: "Studentų atstovybė",
      en: "Student Representation",
    },
    year: "2022 — 2025",
    role: {
      lt: " Savanorystė",
      en: "Volunteering",
    },
    duration: {
      lt: "3 metai",
      en: "3 years",
    },
    description: {
      lt: "",
      en: "",
    },
    color: "#E5A078",
    background: "#FFF0E5",
  },
  {
    id: "rieke",
    company: {
      lt: "RIEKĖ",
      en: "RIEKĖ",
    },
    year: "2021",
    role: {
      lt: "Padavėja",
      en: "Waitress",
    },
    duration: {
      lt: "1 mėn. 11 d.",
      en: "1 month 11 days",
    },
    description: {
      lt: "Darbo metu išmokau dirbti su kasos aparatu, bendrauti su žmonėmis ir atsakingai atlikti kasdienes užduotis.",
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

      title: "Apie mane",
      intro:
        "Sveiki, aš esu Ema Špiliauskaitė, man yra 23 metai",
      paragraph:
        "Esu kūrybiška ir smalsi, mėgstu išbandyti save įvairiose veiklose ir bendrauti su žmonėmis. Turiu loginį mąstymą, esu pastabi detalėms ir greitai mokausi. Mane įkvepia galimybė kurti, ieškoti naujų idėjų ir prisidėti prie darbų, kurie turi prasmę bei kuria vertę žmonėms. Esu atvira naujoms patirtims ir nuolat siekiu augti tiek asmeniškai, tiek profesiškai.",
      university: "VILNIUS TECH",
      universityText: "Taikomasis dirbtinis intelektas",
      erasmus: "ERASMUS+",
      erasmusText: "León universitetas, Ispanija",
      representation: "STUDENTŲ ATSTOVYBĖ",
      representationText: "HR koordinatorė ir pirmakursių kuratorė",
    },

    experience: {

      title: "Patirtis",
      description:
        "Kiekviena patirtis suteikė skirtingų įgūdžių ir padėjo augti tiek profesiškai, tiek asmeniškai.",
    },

    education: {
      title: "Išsilavinimas",
      schoolDate: "2018 — 2022",
      school: "Vilniaus Radvilų gimnazija",
      universityDate: "2022 — 2026",
      university: "VILNIUS TECH",
      degree: "Inžinerijos bakalauras",
      program: "Taikomasis dirbtinis intelektas",
      erasmusDate: "2025 / 02 — 2025 / 06",
      erasmus: "Universidad de Leon",
      erasmusText:
        "Studijos Ispanijoje, pagal Erasmus+ programą.",
    },

    skills: {
      title: "Įgūdžiai",
      description:
        "Techniniai pagrindai ir įrankiai, su kuriais teko dirbti studijų bei praktikos metu.",
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
      davinciResolve: "DaVinci Resolve",
      photoshop: "Adobe Photoshop",
      solidworks: "SOLIDWORKS",
      canva: "Canva",
    },

    contact: {
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
      title: "About me",
      intro:
        "Hello, I am Ema Špiliauskaitė, and I am 23 years old",
      paragraph:
        "I am a creative and curious person who enjoys trying new activities and connecting with people. I have a logical mindset, pay attention to detail, and learn quickly. I am inspired by opportunities to create, develop new ideas, and contribute to meaningful projects that make a positive difference in people's lives. I am open to new experiences and continuously strive to grow both personally and professionally.",
      university: "VILNIUS TECH",
      universityText: "Applied Artificial Intelligence",
      erasmus: "ERASMUS+",
      erasmusText: "University of León, Spain",
      representation: "STUDENTS' REPRESENTATION",
      representationText: "HR Coordinator & student mentor",
    },

    experience: {
      title: "Experience",
      description:
        "Every experience gave me a different set of skills and helped me grow both professionally and personally.",
    },

    education: {
      title: "Education",
      schoolDate: "2018 — 2022",
      school: "Vilniaus Radvilų Gymnasium",
      universityDate: "2022 — 2026",
      university: "VILNIUS TECH",
      degree: "Bachelor of Engineering",
      program: "Applied Artificial Intelligence",
      erasmusDate: "2025 / 02 — 2025 / 06",
      erasmus: "Universidad de Leon",
      erasmusText:
        "Studies in Spain under the Erasmus+ programme.",
    },

    skills: {
      title: "Skills",
      description:
        "Technical foundations and tools I have worked with during my studies and internship.",
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
      davinciResolve: "DaVinci Resolve",
      photoshop: "Adobe Photoshop",
      solidworks: "SOLIDWORKS",
      canva: "Canva",
    },

    contact: {
      title: "Let's connect",
      description:
        "If my experience and interests align with what you are looking for, I would be happy to connect.",
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
  onOpenDesign,
}: {
  experience: Experience;
  language: Language;
  open: boolean;
  onToggle: () => void;
  onOpenDesign: (src: string) => void;
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
        <div className="grid grid-cols-[minmax(0,1fr)_56px] items-center gap-6 md:grid-cols-[130px_minmax(0,1fr)_60px]">
          <div className="col-span-2 text-xs font-medium uppercase tracking-[0.18em] text-black/35 md:col-span-1 md:text-center"> 
           {experience.year}
          </div>

          <div className="min-w-0">
            <h3 className="break-words text-3xl font-medium leading-tight tracking-[-0.035em] md:text-4xl">
              {experience.company[language]}
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

            className="col-start-2 row-start-2 flex h-14 w-14 shrink-0 items-center justify-center self-center justify-self-end rounded-full border border-black/10 bg-white/70 text-xl transition-all duration-500 hover:scale-105 hover:bg-white md:col-auto md:row-auto"
          >
            <span
              className={`transition-transform duration-500 ${open ? "rotate-45" : ""
                }`}
            >
              +
            </span>
          </button>
        </div>

        <div
          className={`grid transition-[grid-template-rows] duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
        >
          <div className="min-h-0 overflow-hidden">
            <div
              className={`transition-all duration-700 ${open
                ? "translate-y-0 opacity-100"
                : "-translate-y-5 opacity-0"
                }`}
            >
              <div className="my-8 h-px bg-black/[0.07]" />

<div className="grid gap-7">
                  <p className="max-w-3xl text-base leading-8 text-black/55 md:text-lg">
                  {experience.description[language]}
                </p>

                
              </div>

              {experience.id === "student-representation" && (
                <div className="mt-4 grid gap-6 md:grid-cols-3">
                  <div className="rounded-2xl border border-[#E5A078]/20 bg-white/60 p-5">
                    <h4 className="font-medium text-[#C9825C]">
                      {language === "lt"
                        ? "Žmogiškųjų išteklių koordinatorė"
                        : "Human Resources Coordinator"}
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-black/55">
                      {language === "lt"
                        ? "Buvau atsakinga už informacijos sklaidą atstovybės savanoriams, rašiau socialinių tinklų įrašus, bendradarbiavau su kitais fakultetais ir savarankiškai suorganizavau Kalėdinį bendruomenės susibūrimą."
                        : "I was responsible for keeping student representation volunteers informed, created social media posts, collaborated with other faculties, and independently organized a Christmas gathering for the community."}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#E5A078]/20 bg-white/60 p-5">
                    <h4 className="font-medium text-[#C9825C]">
                      {language === "lt"
                        ? "Pirmakursių kuratorė"
                        : "First-Year Student Mentor"}
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-black/55">
                      {language === "lt"
                        ? "Du metus padėjau pirmakursiams adaptuotis universitete, įsitraukti į bendruomenę ir susipažinti su studentišku gyvenimu. Taip pat prisidėjau prie pirmakursių krikštynų ir stovyklos organizavimo."
                        : "For two years, I supported first-year students in adapting to university life, becoming involved in the student community, and getting to know student life. I also contributed to organizing the first-year student initiation event and camp."}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#E5A078]/20 bg-white/60 p-5">
                    <h4 className="font-medium text-[#C9825C]">
                      {language === "lt"
                        ? "Ryšių su visuomene komitetas"
                        : "Public Relations Committee"}
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-black/55">
                      {language === "lt"
                        ? "Prisidėjau prie vizualinių maketų kūrimo, rengiau pirmakursių stovyklos vadovų pristatymų tekstus ir savarankiškai sukūriau jų maketą."
                        : "Contributed to visual design projects, prepared presentation texts for first-year student camp leaders, and independently designed the presentation layouts."}
                    </p>


                    <button
                      type="button"
                      onClick={() => onOpenDesign("/images/kvietimas.png")}
className="mt-5 ml-auto flex w-fit items-center gap-2 text-sm font-medium text-[#C9825C] underline underline-offset-4 transition-colors hover:text-[#A96845]"                    >
                      {language === "lt"
                        ? "Peržiūrėti mano maketą"
                        : "View my design"}
                    </button>


                  </div>








                </div>
              )}
<div className="mt-5 flex justify-end">
  <span
    className="text-xs uppercase tracking-[0.18em]"
    style={{ color: experience.color }}
  >
    {experience.duration[language]}
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
  const [showStudentActivity, setShowStudentActivity] = useState(false);
  const [showInvitation, setShowInvitation] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);
const [selectedDesign, setSelectedDesign] = useState<string | null>(null);
  const openDesign = (src: string) => setSelectedDesign(src);
  const [showCertificates, setShowCertificates] = useState(false);
  const t = content[language];
  const [showDesign, setShowDesign] = useState(false);

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

  
/* Klaviatūros mygtukų paspaudimo įvykis */
useEffect(() => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setSelectedCertificate(null);
      setSelectedDesign(null);
      return;
    }

    if (!selectedCertificate) return;

    const certificates = [
      "/certificates/introduction-to-python.png",
      "/certificates/intermediate-python.png",
      "/certificates/introduction-to-sql.png",
      "/certificates/intermediate-sql.png",
      "/certificates/joining-data-in-sql.png",
      "/certificates/data-manipulation-in-sql.png",
    ];

    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();

      setSelectedCertificate((current) => {
        if (!current) return null;

        const index = certificates.indexOf(current);
        if (index === -1) return current;

        const direction = event.key === "ArrowLeft" ? -1 : 1;

        return certificates[
          (index + direction + certificates.length) % certificates.length
        ];
      });
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [selectedCertificate]);

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
        className={`fixed left-0 top-0 z-50 w-full px-6 py-6 md:px-10 transition-all duration-500 ${showHeader
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
              className={`rounded-full px-4 py-2 text-xs transition ${language === "lt"
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
              className={`rounded-full px-4 py-2 text-xs transition ${language === "en"
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
className="object-cover object-[center_20%]"              />
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
        className="relative overflow-hidden px-6 py-32 md:py-44"
        style={{ background: "linear-gradient(to bottom, #faf9f6 0%, #f8f4fa 10%, #f4efff 32%, #fff4f8 70%, #fff3df 100%)" }}
      >
        <div className="pointer-events-none absolute inset-x-0 bottom-[-180px] h-[450px] bg-gradient-to-b from-[#f4efff] via-[#fff1f6] to-[#fff7ed] blur-3xl" />

        <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#c9b6ff]/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
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


          <div className="mt-16 space-y-5">

          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE
      ===================================================== */}

      <section
        id="experience"
        className="relative overflow-hidden px-6 py-20 md:py-24" 
style={{ background: "linear-gradient(to bottom, #fff1f6 0%, #fff3df 35%, #fff7ed 70%, #faf9f6 100%)" }}      >
<div className="pointer-events-none absolute inset-x-0 top-[-100px] h-[350px] bg-gradient-to-b from-[#fff1f6]/80 via-[#fff3df]/50 to-transparent blur-3xl" />
        <div className="pointer-events-none absolute inset-x-0 bottom-[-200px] h-[450px] bg-gradient-to-b from-[#fff7ed] via-[#faf9f6] to-[#f2f7f4] blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              title={t.experience.title}

            />
          </Reveal>

          <div className="mt-16 space-y-8 md:mt-25">
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
                  onOpenDesign={openDesign}
                />

              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* DESIGN PREVIEW */}
      {selectedDesign && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedDesign(null)}
        >
          <div
            className="relative flex max-h-[90vh] w-full max-w-5xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedDesign(null)}
              className="mb-3 self-end rounded-full bg-white/10 px-4 py-2 text-white transition hover:bg-white/20"
              aria-label="Uždaryti maketą"
            >
              ✕ Uždaryti
            </button>

            <img
              src={selectedDesign}
              alt="Mano kurtas maketas"
              className="max-h-[80vh] max-w-full rounded-lg object-contain"
            />
          </div>
        </div>
      )}

      {/* =====================================================
    EDUCATION
===================================================== */}

      <section
        id="education"
        className="relative overflow-hidden px-6 py-20 md:py-24"
        style={{
          background:
            "linear-gradient(to bottom, #faf9f6 0%, #f5f7f5 55%, #edf7f2 100%)",
        }}
      >
        {/* Background accents */}
        <div className="pointer-events-none absolute inset-x-0 top-[-180px] h-[400px] bg-gradient-to-b from-[#fff7ed] to-[#faf9f6] blur-3xl" />

        <div className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-[#c9b6ff]/10 blur-3xl" />

        <div className="pointer-events-none absolute inset-x-0 bottom-[-180px] h-[420px] bg-gradient-to-b from-[#faf9f6] via-[#f1f7f3] to-[#edf7f2] blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              title={t.education.title}
            />
          </Reveal>

          <div className="relative mt-16 md:mt-20">

            {/* Timeline line */}
            <div className="absolute bottom-8 left-[7px] top-8 w-px bg-gradient-to-b from-[#ffd59e]/80 via-[#c9b6ff]/80 to-[#ffb7d5]/80 md:left-[9px]" />

            <div className="space-y-8 md:space-y-10">

              {/* Gymnasium */}
              <Reveal>
                <div className="relative pl-9 md:pl-12">

                  {/* Timeline dot */}
                  <div className="absolute left-0 top-8 z-10 h-4 w-4 rounded-full border-[3px] border-[#faf9f6] bg-[#e9bd82] shadow-[0_0_0_4px_rgba(255,213,158,0.20)] md:left-[2px] md:h-[18px] md:w-[18px]" />

                  <article className="group rounded-[1.75rem] border border-[#e9bd82]/30 bg-white/75 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.025)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#e9bd82]/60 hover:bg-white/90 hover:shadow-[0_20px_55px_rgba(201,182,255,0.12)] md:rounded-[2rem] md:p-9 lg:p-10">
                    <span className="inline-flex rounded-full border border-[#ffd59e]/60 bg-[#ffd59e]/20 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[#b78343]">
                      {t.education.schoolDate}
                    </span>

                    <h3 className="mt-5 text-2xl font-medium leading-tight tracking-[-0.035em] md:text-3xl lg:text-4xl">
                      {t.education.school}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-black/45 md:text-base">
                      {language === "lt"
                        ? "Vidurinis išsilavinimas"
                        : "Secondary education"}
                    </p>

                  </article>
                </div>
              </Reveal>

              {/* University */}
              <Reveal delay={120}>
                <div className="relative pl-9 md:pl-12">

                  {/* Timeline dot */}
                  <div className="absolute left-0 top-8 z-10 h-4 w-4 rounded-full border-[3px] border-[#faf9f6] bg-[#9d83e8] shadow-[0_0_0_4px_rgba(201,182,255,0.22)] md:left-[2px] md:h-[18px] md:w-[18px]" />

                  <article className="group rounded-[1.75rem] border border-[#c9b6ff]/35 bg-white/80 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.025)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#c9b6ff]/70 hover:bg-white/95 hover:shadow-[0_20px_55px_rgba(157,131,232,0.14)] md:rounded-[2rem] md:p-9 lg:p-10">
                    <span className="inline-flex rounded-full border border-[#c9b6ff]/50 bg-[#c9b6ff]/20 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[#8b72d9]">
                      {t.education.universityDate}
                    </span>

                    <h3 className="mt-5 text-3xl font-medium leading-tight tracking-[-0.035em] md:text-4xl">
                      {t.education.university}
                    </h3>

                    <p className="mt-3 text-sm font-medium text-[#9d83e8] md:text-base">
                      {t.education.degree}
                    </p>

                    <p className="mt-2 text-sm leading-7 text-black/45 md:text-base">
                      {t.education.program}
                    </p>

                  </article>
                </div>
              </Reveal>

              {/* Erasmus+ */}
              <Reveal delay={240}>
                <div className="relative pl-9 md:pl-12">

                  {/* Timeline dot */}
                  <div className="absolute left-0 top-8 z-10 h-4 w-4 rounded-full border-[3px] border-[#faf9f6] bg-[#e5a1b7] shadow-[0_0_0_4px_rgba(255,183,213,0.22)] md:left-[2px] md:h-[18px] md:w-[18px]" />

                  <article className="group rounded-[1.75rem] border border-[#ffb7d5]/35 bg-white/75 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.025)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#ffb7d5]/70 hover:bg-white/90 hover:shadow-[0_20px_55px_rgba(229,161,183,0.14)] md:rounded-[2rem] md:p-9 lg:p-10">
                    <span className="inline-flex rounded-full border border-[#ffb7d5]/50 bg-[#ffb7d5]/20 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[#c9829a]">
                      {t.education.erasmusDate}
                    </span>

                    <h3 className="mt-5 text-3xl font-medium leading-tight tracking-[-0.035em] md:text-4xl">
                      {t.education.erasmus}
                    </h3>

                    <p className="mt-3 text-sm font-medium text-[#d98c9f] md:text-base">
                      {language === "lt"
                        ? "Mainų studijos"
                        : "Exchange studies"}
                    </p>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-black/50 md:text-base md:leading-8">
                      {t.education.erasmusText}
                    </p>

                  </article>
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
        className="relative overflow-hidden px-6 py-20 md:py-24" style={{
          background:
            "linear-gradient(to bottom, #edf7f2 0%, #e8f3ee 55%, #dce8e3 100%)",
        }}
      >
        <div className="pointer-events-none absolute inset-x-0 top-[-180px] h-[420px] bg-gradient-to-b from-[#f1f7f3] to-[#edf7f2] blur-3xl" />

        <div className="pointer-events-none absolute inset-x-0 bottom-[-180px] h-[450px] bg-gradient-to-b from-[#edf7f2] via-[#dce8e3] to-[#171717] blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              title={t.skills.title}
              description={t.skills.description}
            />
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
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
                    t.skills.davinciResolve,
                    t.skills.photoshop,
                    t.skills.solidworks,
                    t.skills.canva,
                  ].map((skill, index) => (
                    <span
                      key={`${skill}-${index}`}
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

            {/* CERTIFICATES */}
            <Reveal delay={200} className="md:col-span-3">
              <div
                className="md:col-span-3 rounded-[2rem] border border-black/[0.06] bg-white/65 p-7 shadow-sm backdrop-blur-xl transition-all duration-500 hover:bg-white/85 hover:shadow-xl md:p-8"              >

                <div className="flex items-center justify-between gap-6">
                  <div>
                    <h3 className="text-3xl font-semibold tracking-tight">                      {language === "lt" ? "Sertifikatai" : "Certificates"}
                    </h3>

                    <p className="mt-2 text-base leading-7 text-black/50">
                      {language === "lt" ? "Python ir SQL." : "Python and SQL."}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowCertificates(!showCertificates)}
                    aria-expanded={showCertificates}
                    className="shrink-0 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm transition hover:bg-white"
                  >
                    {showCertificates
                      ? language === "lt" ? "Paslėpti" : "Hide certificates"
                      : language === "lt" ? "Peržiūrėti" : "View certificates"}

                    <span
                      className={`transition-transform duration-300 ${showCertificates ? "rotate-180" : ""
                        }`}
                    >
                      ↓
                    </span>
                  </button>
                </div>


                <div
                  className={`grid transition-[grid-template-rows,opacity,margin] duration-500 ease-in-out ${showCertificates
                    ? "mt-6 grid-rows-[1fr] opacity-100"
                    : "mt-0 grid-rows-[0fr] opacity-0"
                    }`}
                  aria-hidden={!showCertificates}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      {[
                        {
                          title: "Introduction to Python",
                          src: "/certificates/introduction-to-python.png",
                        },
                        {
                          title: "Intermediate Python",
                          src: "/certificates/intermediate-python.png",
                        },
                        {
                          title: "Introduction to SQL",
                          src: "/certificates/introduction-to-sql.png",
                        },
                        {
                          title: "Intermediate SQL",
                          src: "/certificates/intermediate-sql.png",
                        },
                        {
                          title: "Joining Data in SQL",
                          src: "/certificates/joining-data-in-sql.png",
                        },
                        {
                          title: "Data Manipulation in SQL",
                          src: "/certificates/data-manipulation-in-sql.png",
                        },
                      ].map((certificate) => (
                        <button
                          key={certificate.title}
                          type="button"
                          onClick={() => setSelectedCertificate(certificate.src)}
                          className="relative z-10 mx-auto w-full max-w-[250px] cursor-pointer overflow-hidden rounded-2xl border border-black/[0.07] bg-white/80 text-left transition duration-300 hover:-translate-y-1 hover:shadow-md"                        >
                          <img
                            src={certificate.src}
                            alt={certificate.title}
                            className="h-28 w-full object-contain p-2" />

                          <p className="p-3 text-xs font-medium">
                            {certificate.title}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>


          </div>

        </div>
      </section >


      {/* CERTIFICATE PREVIEW */}
      {
        selectedCertificate && (() => {
          const certificates = [
            { title: "Introduction to Python", src: "/certificates/introduction-to-python.png" },
            { title: "Intermediate Python", src: "/certificates/intermediate-python.png" },
            { title: "Introduction to SQL", src: "/certificates/introduction-to-sql.png" },
            { title: "Intermediate SQL", src: "/certificates/intermediate-sql.png" },
            { title: "Joining Data in SQL", src: "/certificates/joining-data-in-sql.png" },
            { title: "Data Manipulation in SQL", src: "/certificates/data-manipulation-in-sql.png" },

          ];

          const currentIndex = certificates.findIndex(
            (certificate) => certificate.src === selectedCertificate
          );

          const currentCertificate = certificates[currentIndex];

          const changeCertificate = (direction: number) => {
            const nextIndex =
              (currentIndex + direction + certificates.length) % certificates.length;
            setSelectedCertificate(certificates[nextIndex].src);
          };

          return (
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
              onClick={() => setSelectedCertificate(null)}
            >
              <button
                type="button"
                aria-label="Uždaryti"
                onClick={() => setSelectedCertificate(null)}
                className="absolute right-3 sm:right-8 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl shadow-lg transition hover:scale-105 leading-none"
              >
                <span className="absolute inset-0 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="m18 6-12 12M6 6l12 12" />
                  </svg>
                </span>
              </button>

              <button
                type="button"
                aria-label="Ankstesnis sertifikatas"
                onClick={(event) => {
                  event.stopPropagation();
                  changeCertificate(-1);
                }}
                className="absolute left-3 sm:left-8 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-2xl shadow-lg transition hover:scale-105"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 -translate-x-px"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>

              <div
                className="flex max-h-[88vh] max-w-[75vw] flex-col items-center gap-3"
                onClick={(event) => event.stopPropagation()}
              >
                <img
                  src={currentCertificate?.src}
                  alt={currentCertificate?.title ?? "Sertifikatas"}
                  className="max-h-[78vh] max-w-full rounded-xl object-contain shadow-2xl"
                />
                <p className="text-center text-sm text-white">
                  {currentCertificate?.title} · {currentIndex + 1} / {certificates.length}
                </p>
              </div>

              <button
                type="button"
                aria-label="Kitas sertifikatas"
                onClick={(event) => {
                  event.stopPropagation();
                  changeCertificate(1);
                }}
                className="absolute right-3 sm:right-8 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-2xl shadow-lg transition hover:scale-105"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 translate-x-px"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          );
        })()
      }


      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section
        id="contact"
        className="relative min-h-[80vh] overflow-hidden px-6 pt-12 pb-20 text-white md:pt-20 md:pb-24" style={{
          background:
            "linear-gradient(to bottom, #dce8e3 0%, #b7c3be 5%, #747f7a 14%, #3b403e 30%, #171717 56%, #171717 100%)",
        }}
      >
        <div className="pointer-events-none absolute inset-x-0 top-[-100px] h-[500px] bg-gradient-to-b from-[#dce8e3] via-[#59615d] to-[#171717] blur-3xl" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#c9b6ff]/5 via-[#d9b8c7]/5 to-[#b8e8d4]/5 blur-3xl" />
        <div className="relative mx-auto flex min-h-[55vh] max-w-6xl flex-col justify-between">
          <Reveal>
            <div>


              <h2 className="mt-6 max-w-5xl -translate-x-2  text-6xl font-semibold leading-[0.9] tracking-[-0.03em] md:text-8xl lg:text-[8rem]">
                {t.contact.title}
              </h2>

              <p className="mt-8 max-w-xl text-base leading-8 text-white/45 md:text-lg">
                {t.contact.description}
              </p>
            </div>
          </Reveal>

          <div className="mt-20 grid gap-12 md:grid-cols-[1fr_auto] items-start">
            <Reveal delay={150}>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/25">
                  {t.contact.email}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-4">
                  <a
                    href="mailto:ema.spiliauskaite1@gmail.com"
                    className="break-all text-2xl leading-none tracking-[-0.025em] text-white transition-colors duration-300 hover:text-[#c9b6ff] md:text-4xl"
                  >
                    ema.spiliauskaite1@gmail.com
                  </a>

                  <button
                    type="button"
                    aria-live="polite"
                    onClick={copyEmail}
                    className="shrink-0 translate-y-1 rounded-full border border-white/15 px-5 py-2.5 text-xs text-white/60 transition-all duration-300 hover:border-white/30 hover:bg-white/5 hover:text-white"
                  >
                    {copied ? t.contact.copied : t.contact.copy}
                  </button>
                </div>
              </div>

            </Reveal>

            <Reveal delay={250}>
              <div className="md:text-right">
                <p className="text-xs uppercase tracking-[0.18em] text-white/25">
                  {t.contact.phone}
                </p>

                <a
                  href="tel:+37062585817"
                  className="mt-6 inline-block text-lg text-white/70 transition-colors hover:text-white"
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
    </main >
  );
}