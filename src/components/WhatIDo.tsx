import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>

          {/* CARD 1 — DEVELOP */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>DEVELOP</h3>
              <h4>Software Development</h4>
              <p>
                I build practical software and web applications using Python,
                C++, JavaScript, PHP, MySQL and Django — focused on functional
                solutions to real-world problems.
              </p>
              <h5>Skillset &amp; tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Python</div>
                <div className="what-tags">C++</div>
                <div className="what-tags">JavaScript</div>
                <div className="what-tags">PHP</div>
                <div className="what-tags">Django</div>
                <div className="what-tags">MySQL</div>
                <div className="what-tags">HTML</div>
                <div className="what-tags">CSS</div>
                <div className="what-tags">GitHub</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* CARD 2 — AUTOMATE */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>AUTOMATE</h3>
              <h4>AI &amp; Workflow Automation</h4>
              <p>
                I design automation workflows using n8n, Make.com, APIs and AI
                tools — connecting systems and eliminating repetitive processes
                to build smarter, more efficient pipelines.
              </p>
              <h5>Skillset &amp; tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">n8n</div>
                <div className="what-tags">Make.com</div>
                <div className="what-tags">API Integration</div>
                <div className="what-tags">AI Workflows</div>
                <div className="what-tags">Google Services</div>
                <div className="what-tags">Webhook Triggers</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* CARD 3 — COMPOSE */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 2)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>COMPOSE</h3>
              <h4>Academic &amp; Book Composition</h4>
              <p>
                I work on professional academic and publishing projects —
                MPhil thesis composition and Urdu and English book composition
                — with careful attention to structure, typography and layout.
              </p>
              <h5>Skillset &amp; tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">MPhil Thesis</div>
                <div className="what-tags">Urdu Books</div>
                <div className="what-tags">English Books</div>
                <div className="what-tags">Academic Docs</div>
                <div className="what-tags">Typography</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* CARD 4 — DOCUMENT */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 3)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>DOCUMENT</h3>
              <h4>Technical &amp; Professional Documentation</h4>
              <p>
                I create and format structured technical, academic and
                professional documents with a focus on clarity, organisation
                and polished professional presentation.
              </p>
              <h5>Skillset &amp; tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Technical Docs</div>
                <div className="what-tags">Professional Formatting</div>
                <div className="what-tags">Structured Layout</div>
                <div className="what-tags">Document Design</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
