import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    num: "01",
    name: "Fine Tech School System",
    category: "School Management System",
    tools: "Python • Django • HTML • CSS • JavaScript • SQLite",
    desc: "Developed a web-based school management system using Django, SQLite, and JavaScript at Fine Tech Software House, implementing dynamic UI and secure authentication to streamline administrative record-keeping.",
    image: "/images/fine_tech_school.webp",
  },
  {
    num: "02",
    name: "GILLUX",
    category: "Desktop Business Software",
    tools: "Python, MySQL",
    desc: "A Windows desktop business management application with user authentication, customer management, sales, purchases, inventory, invoicing and full ledger tracking.",
    image: "/images/gillux.webp",
  },
  {
    num: "03",
    name: "AI Workflow Automation",
    category: "Automation & AI",
    tools: "n8n, Make.com, APIs, AI Models",
    desc: "Hands-on automation workflows connecting AI models, APIs, databases and Google services to eliminate repetitive tasks and build intelligent process pipelines.",
    image: "/images/ai_automation.webp",
  },
  {
    num: "04",
    name: "Book & Thesis Composition",
    category: "Academic & Publishing",
    tools: "MS Word, InPage, Typography Tools",
    desc: "Professional composition of MPhil theses and Urdu/English books — handling layout, typography, structured formatting and publication-ready presentation.",
    image: "/images/book_thesis.webp",
  },
  {
    num: "05",
    name: "Portfolio Website",
    category: "Web Development",
    tools: "React, TypeScript, GSAP, Three.js, Vite",
    desc: "This portfolio — a fully custom-built interactive site featuring 3D character animation, GSAP scroll animations, and a polished dark UI built from scratch.",
    image: "/images/portfolio.webp",
  },
];

// Removes any pin-spacer GSAP left around the Work section (React
// StrictMode's double mount in dev can leave a stale one, which nests a
// second spacer inside it and breaks the page height).
function clearStaleWorkPin() {
  ScrollTrigger.getById("work")?.kill(true);
  const el = document.querySelector<HTMLElement>(".work-section");
  if (!el) return;
  while (el.parentElement?.classList.contains("pin-spacer")) {
    const spacer = el.parentElement;
    spacer.parentElement!.insertBefore(el, spacer);
    spacer.remove();
  }
  el.removeAttribute("style");
}

const Work = () => {
  useGSAP(() => {
    clearStaleWorkPin();
    let translateX = 0;

    // Measured fresh on every ScrollTrigger refresh (see end / x below),
    // so the pin distance is correct even if layout wasn't ready at mount.
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (!box.length) return;
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      const padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = Math.max(
        0,
        rect.width * box.length - (rectLeft + parentWidth) + padding
      );
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        scroller: "#smooth-wrapper",
        start: "top top",
        end: () => {
          setTranslateX();
          return `+=${translateX}`;
        },
        scrub: true,
        pin: true,
        pinSpacing: true,
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: () => -translateX,
      ease: "none",
    });

    // Layout (fonts, images, lazy TechStack) can settle after mount
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const t1 = setTimeout(refresh, 500);
    const t2 = setTimeout(refresh, 2500);

    // kill(true) reverts the pin, which removes the pin-spacer. A plain
    // kill() leaves it behind, and StrictMode's second mount (dev) then
    // nests a second spacer inside the stale one -> page too short,
    // Work stays pinned while TechStack scrolls through it.
    return () => {
      window.removeEventListener("load", refresh);
      clearTimeout(t1);
      clearTimeout(t2);
      timeline.kill();
      clearStaleWorkPin();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.num}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools &amp; technologies</h4>
                <p>{project.tools}</p>
                <p style={{ marginTop: "12px", opacity: 0.7, fontSize: "13px" }}>
                  {project.desc}
                </p>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;