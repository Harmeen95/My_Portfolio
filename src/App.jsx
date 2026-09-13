import { useEffect, useState } from "react";
import profileImage from "./assets/harmeen-profile.png";


/* =========================================================
   DATA
========================================================= */

const roles = [
  "RPA Developer",
  "Intelligent Automation Specialist",
  "UiPath Automation Developer",
  "Agentic AI Explorer",
];

const skills = [
  {
    category: "RPA & Automation",
    icon: "⚡",
    items: [
      ["UiPath Studio", 95],
      ["UiPath Studio Web", 90],
      ["UiPath Orchestrator", 90],
      ["UiPath Agentic AI", 85],
      ["Power Automate Desktop", 50],
      ["Workflow Optimization", 90],
      ["Multithreading", 85],
    ],
  },
  {
    category: "Generative AI",
    icon: "✦",
    items: [
      ["Large Language Models", 70],
      ["Prompt Engineering", 65],
      ["RAG", 75],
      ["Agentic AI Systems", 70],
    ],
  },
  {
    category: "Programming",
    icon: "</>",
    items: [
      ["Python", 70],
      ["C#", 50],
      [".NET", 70],
    ],
  },
  {
    category: "Data & ETL",
    icon: "◈",
    items: [
      ["SQL / PostgreSQL", 70],
      ["Talend", 75],
      ["Data Analysis", 75],
      ["Statistical Techniques", 70],
    ],
  },
  {
    category: "Other",
    icon: "◇",
    items: [
      ["Excel Automation", 90],
      ["API Integration", 80],
      ["Quality Assurance", 80],
      ["Code Reviews", 75],
      ["Cryptography", 70],
    ],
  },
];


const workflow = [
  {
    number: "01",
    title: "Discover",
    text: "Understand the business process, requirements, users and expected outcome.",
    icon: "⌕",
  },
  {
    number: "02",
    title: "Analyze",
    text: "Identify repetitive tasks, business rules, exceptions and automation opportunities.",
    icon: "◌",
  },
  {
    number: "03",
    title: "Design",
    text: "Create the automation architecture, workflow logic and integration approach.",
    icon: "⌘",
  },
  {
    number: "04",
    title: "Build",
    text: "Develop reliable UiPath workflows with reusable components and integrations.",
    icon: "</>",
  },
  {
    number: "05",
    title: "Test",
    text: "Validate functionality, business rules, exceptions, security and reliability.",
    icon: "✓",
  },
  {
    number: "06",
    title: "Deploy & Monitor",
    text: "Deploy through Orchestrator, monitor production and continuously improve.",
    icon: "↗",
  },
];


const projects = [
  {
    number: "01",
    type: "AGENTIC AI",
    title: "Automated Email Response Agent",
    description:
      "Built an intelligent email automation agent using UiPath Studio Web that reads incoming emails, understands context using AI and automatically generates and sends appropriate replies.",
    technologies: [
      "UiPath Studio Web",
      "Agentic AI",
      "LLM",
      "Email Automation",
    ],
    impact: "Reduced manual email handling and response effort.",
  },
  {
    number: "02",
    type: "GENERATIVE AI",
    title: "User Prompt Engineering Framework",
    description:
      "Designed a framework demonstrating how prompts can be structured within Agentic AI workflows to guide AI agents toward accurate and context-aware responses.",
    technologies: [
      "Agentic AI",
      "Prompt Engineering",
      "LLM",
    ],
    impact: "Enabled intuitive interaction with AI-powered workflows.",
  },
  {
    number: "03",
    type: "SECURITY AUTOMATION",
    title: "Secure Password Management",
    description:
      "Created a UiPath Form to securely manage passwords stored in automation assets, enabling controlled handling and updating of credentials.",
    technologies: [
      "UiPath",
      "UiPath Forms",
      "Secure Assets",
    ],
    impact: "Improved secure credential management within automation.",
  },
  {
    number: "04",
    type: "EMAIL AUTOMATION",
    title: "IMAP Email Integration",
    description:
      "Introduced IMAP functionality through UiPath to replace Outlook during its phase-out, ensuring seamless email retrieval and management within automated workflows.",
    technologies: [
      "UiPath",
      "IMAP",
      "Email Automation",
    ],
    impact: "Provided an alternative email integration for automation workflows.",
  },
  {
    number: "05",
    type: "BANKING AUTOMATION",
    title: "Multithreading Banking Automation",
    description:
      "Optimized a multithreaded UiPath automation allowing two banks operating on different browsers to execute tasks simultaneously.",
    technologies: [
      "UiPath",
      "Multithreading",
      "Banking",
      "Parallel Processing",
    ],
    impact: "Improved workflow speed and reliability through parallel execution.",
  },
  {
    number: "06",
    type: "HYBRID AUTOMATION",
    title: "UiPath + Talend Hybrid Automation",
    description:
      "Developed a hybrid automation solution combining UiPath and Talend ETL to fulfil complex end-to-end requirements involving data extraction, transformation and workflow automation.",
    technologies: [
      "UiPath",
      "Talend",
      "ETL",
      "Data Processing",
    ],
    impact: "Combined ETL and RPA capabilities into one end-to-end workflow.",
  },
  {
    number: "07",
    type: "CYBERSECURITY",
    title: "Custom UiPath Encryption Activity",
    description:
      "Built a custom UiPath activity in C# implementing cryptographic techniques for encrypting and decrypting sensitive data at rest.",
    technologies: [
      "C#",
      "UiPath",
      "Cryptography",
      "Custom Activity",
    ],
    impact: "Enabled encryption and decryption directly within UiPath workflows.",
  },
  {
    number: "08",
    type: "BANKING / MERCHANT AUTOMATION",
    title: "Merchant Payout Transaction Automation",
    description:
      "Designed a UiPath bot that automates merchant requests for transaction details. The bot receives requests through email, performs required checks and validations, retrieves the relevant transaction information and sends the validated transaction details back to the merchant.",
    technologies: [
      "UiPath",
      "Email Automation",
      "Validation",
      "Banking",
      "Transaction Processing",
    ],
    impact:
      "Reduced manual intervention, accelerated merchant responses and standardized transaction-detail delivery.",
  },
];


const experience = [
  {
    company: "Worldline",
    role: "Application Engineer",
    period: "March 2022 — Present",
    location: "Mumbai, India",
    description:
      "Developing intelligent software and automation solutions tailored to customer requirements. Working across design, development, testing, deployment and maintenance while supporting enterprise systems and automation workflows.",
  },
  {
    company: "eClerx",
    role: "Data Analyst",
    period: "September 2021 — February 2022",
    location: "Mumbai, India",
    description:
      "Translated raw data into actionable insights using statistical techniques and data visualization while maintaining comprehensive documentation for reproducibility and compliance.",
  },
];


const achievements = [
  {
    icon: "✦",
    title: "Excellent Performer",
    text: "Recognised twice at Worldline for outstanding contributions.",
  },
  {
    icon: "AI",
    title: "Generative AI",
    text: "Currently pursuing a structured Generative AI course covering Python, data science and advanced GenAI topics.",
  },
  {
    icon: "⚙",
    title: "Power Automate Desktop",
    text: "Completed advanced learning and earned proficiency certification.",
  },
];


/* =========================================================
   APP
========================================================= */

function App() {

  const [roleIndex, setRoleIndex] = useState(0);

  const [menuOpen, setMenuOpen] = useState(false);

  const [visibleSkills, setVisibleSkills] = useState(false);


  /* Rotating hero role */

  useEffect(() => {

    const interval = setInterval(() => {

      setRoleIndex((current) => (current + 1) % roles.length);

    }, 2600);

    return () => clearInterval(interval);

  }, []);


  /* Skills animation */

  useEffect(() => {

    const timer = setTimeout(() => {
      setVisibleSkills(true);
    }, 300);

    return () => clearTimeout(timer);

  }, []);


  const closeMenu = () => setMenuOpen(false);


  return (
    <div className="portfolio">


      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <header className="navbar">

        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
        >
          <span>&lt;</span>
          Harmeen
          <span>/&gt;</span>
        </a>


        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "×" : "☰"}
        </button>


        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>

          <a href="#home" onClick={closeMenu}>
            HOME
          </a>

          <a href="#about" onClick={closeMenu}>
            ABOUT
          </a>

          <a href="#skills" onClick={closeMenu}>
            SKILLS
          </a>

          <a href="#experience" onClick={closeMenu}>
            EXPERIENCE
          </a>

          <a href="#workflow" onClick={closeMenu}>
            WORKFLOW
          </a>

          <a href="#projects" onClick={closeMenu}>
            PROJECTS
          </a>

          <a href="#education" onClick={closeMenu}>
            EDUCATION
          </a>

          <a href="#contact" onClick={closeMenu}>
            CONTACT
          </a>

          <a
            href="#contact"
            className="hire-button"
            onClick={closeMenu}
          >
            HIRE ME
          </a>

        </nav>

      </header>


      <main>


        {/* =====================================================
            HERO
        ===================================================== */}

        <section
          id="home"
          className="hero section-grid"
        >

          <div className="hero-inner">


            <div className="hero-content">

              <div className="availability">

                <span className="status-dot" />

                AVAILABLE FOR OPPORTUNITIES

              </div>


              <p className="hero-intro">
                Hi, my name is
              </p>


              <h1 className="hero-title">

                Harmeen

                <span>
                  Jaina
                </span>

              </h1>


              <div className="hero-role">

                I'm a{" "}

                <span key={roleIndex}>
                  {roles[roleIndex]}
                </span>

                <i />

              </div>


              <p className="hero-description">

                Application Engineer and Automation Specialist with
                4+ years of experience building RPA, software and
                AI-powered solutions. I specialize in UiPath
                automation and am expanding traditional RPA into
                intelligent and agentic automation.

              </p>


              <div className="hero-buttons">

                <a
                  href="#projects"
                  className="primary-button"
                >
                  VIEW MY WORK
                  <span>→</span>
                </a>

                <a
                  href="#contact"
                  className="secondary-button"
                >
                  GET IN TOUCH
                </a>

              </div>


              <div className="hero-socials">

                <a
                  href="#contact"
                  aria-label="Email"
                >
                  @
                </a>

                <a
                  href="https://github.com/Harmeen95"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  GH
                </a>

                <a
                  href="#contact"
                  aria-label="LinkedIn"
                >
                  in
                </a>

              </div>


              <div className="hero-stats">

                <div>
                  <strong>4+</strong>
                  <span>YEARS EXPERIENCE</span>
                </div>

                <div>
                  <strong>50+</strong>
                  <span>BOTS / AUTOMATIONS</span>
                </div>

                <div>
                  <strong>AI</strong>
                  <span>AGENTIC JOURNEY</span>
                </div>

              </div>

            </div>


            {/* Automation visual */}

            <div className="hero-visual">

              <div className="automation-panel">

                <div className="panel-header">

                  <span className="panel-dots">
                    <i />
                    <i />
                    <i />
                  </span>

                  <span>
                    automation.engine
                  </span>

                  <span>
                    ●
                  </span>

                </div>


                <div className="panel-body">

                  <div className="code-line">
                    <span className="purple">const</span>{" "}
                    automation = {"{"}
                  </div>

                  <div className="code-line indent">
                    <span className="blue">platform</span>:
                    <span className="green">
                      " UiPath"
                    </span>,
                  </div>

                  <div className="code-line indent">
                    <span className="blue">workflow</span>:
                    <span className="green">
                      " Intelligent"
                    </span>,
                  </div>

                  <div className="code-line indent">
                    <span className="blue">validation</span>:
                    <span className="green">
                      " Required"
                    </span>,
                  </div>

                  <div className="code-line indent">
                    <span className="blue">future</span>:
                    <span className="green">
                      " Agentic AI"
                    </span>
                  </div>

                  <div className="code-line">
                    {"};"}
                  </div>


                  <div className="flow">

                    <div className="flow-node">
                      <span>01</span>
                      INPUT
                    </div>

                    <div className="flow-arrow">
                      ↓
                    </div>

                    <div className="flow-node active">
                      <span>02</span>
                      AUTOMATE
                    </div>

                    <div className="flow-arrow">
                      ↓
                    </div>

                    <div className="flow-node">
                      <span>03</span>
                      OUTPUT
                    </div>

                  </div>


                  <div className="system-status">

                    <span>●</span>

                    AUTOMATION SYSTEM ONLINE

                  </div>

                </div>

              </div>


              <div className="floating-tag tag-one">
                UiPath
              </div>

              <div className="floating-tag tag-two">
                Agentic AI
              </div>

              <div className="floating-tag tag-three">
                SQL
              </div>

            </div>

          </div>


          <div className="scroll-indicator">

            <span>SCROLL DOWN</span>

            <div />

          </div>

        </section>


        {/* =====================================================
            IMPACT
        ===================================================== */}

        <section className="impact-section">

          <div className="section-label centered">
            <span className="line" />
            IMPACT
            <span className="line" />
          </div>


          <div className="impact-grid">


            <div className="impact-card">

              <div className="impact-icon teal">
                ◷
              </div>

              <strong>
                4+
              </strong>

              <span>
                YEARS EXPERIENCE
              </span>

            </div>


            <div className="impact-card">

              <div className="impact-icon purple">
                ◌
              </div>

              <strong>
                5.6K+
              </strong>

              <span>
                HUMAN HOURS SAVED
              </span>

              <small>
                Excel tracker metric
              </small>

            </div>


            <div className="impact-card">

              <div className="impact-icon blue">
                ⚡
              </div>

              <strong>
                50+
              </strong>

              <span>
                AUTOMATIONS DELIVERED
              </span>

              <small>
                Excel tracker metric
              </small>

            </div>


            <div className="impact-card">

              <div className="impact-icon gold">
                ★
              </div>

              <strong>
                5★
              </strong>

              <span>
                EXCELLENT PERFORMER
              </span>

              <small>
                Recognised twice
              </small>

            </div>

          </div>

        </section>


        {/* =====================================================
            ABOUT
        ===================================================== */}

        {/* =====================================================
            ABOUT
        ===================================================== */}

        <section
          id="about"
          className="about section-grid"
        >

          <div className="about-visual">

          <div className="about-frame">

           <div className="frame-header">
            <span>
            INTELLIGENT AUTOMATION
            </span>

            <span>
              01 / 03
            </span>
          </div>

          <div className="profile-image-wrapper">
            <img
             src={profileImage}
            alt="Harmeen Jaina - Automation Specialist"
            className="profile-image"
           />
          </div>

          <div className="frame-labels">
            <span>
             BUILD
            </span>

            <span>
            IMPROVE
            </span>

            <span>
            AUTOMATE
            </span>
          </div>

          </div>

        </div>


  <div className="about-content">

    <div className="section-label">

      <span className="line" />

      ABOUT ME

    </div>


    <h2>
      Building automation
      <span>
        that matters.
      </span>
    </h2>


    <p>
      I'm an Application Engineer and Automation Specialist
      with 4+ years of experience in RPA, software development
      and AI-powered solutions.
    </p>


    <p>
      My work focuses on designing, developing, testing,
      deploying and maintaining automation solutions that
      solve real business problems and improve operational
      efficiency.
    </p>


    <p>
      My experience spans UiPath, UiPath Studio Web,
      UiPath Agentic AI, Power Automate Desktop,
      workflow optimization, multithreading, Python,
      Generative AI and enterprise integrations.
    </p>


    <div className="about-highlight">

      <span>
        CURRENT FOCUS
      </span>

      <strong>
        RPA → Intelligent Automation → Agentic AI
      </strong>

    </div>

  </div>

</section>      


        {/* =====================================================
            EXPERIENCE
        ===================================================== */}

        <section
          id="experience"
          className="experience section-grid"
        >

          <div className="experience-heading">

            <div className="section-label">

              <span className="line" />

              EXPERIENCE

            </div>


            <h2>
              My automation
              <span>
                journey.
              </span>
            </h2>

          </div>


          <div className="timeline">

            {experience.map((item, index) => (

              <div
                className="timeline-item"
                key={item.company}
              >

                <div className="timeline-marker">

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>


                <div className="timeline-content">

                  <div className="timeline-company">

                    <strong>
                      {item.company}
                    </strong>

                    <span>
                      {item.period}
                    </span>

                  </div>


                  <h3>
                    {item.role}
                  </h3>


                  <span className="timeline-location">
                    {item.location}
                  </span>


                  <p>
                    {item.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* =====================================================
            SKILLS
        ===================================================== */}

        <section
          id="skills"
          className="skills section-grid"
        >

          <div className="skills-intro">

            <div className="section-label">

              <span className="line" />

              SKILLS & TOOLS

            </div>


            <h2>
              What I work
              <span>
                with.
              </span>
            </h2>


            <p>
              A combination of enterprise automation,
              programming, data and emerging AI technologies.
            </p>


            <div className="skill-note">
              <span>i</span>
              Percentages represent portfolio proficiency
              indicators, not formal certifications.
            </div>

          </div>


          <div className="skills-groups">

            {skills.map((group) => (

              <div
                className="skill-group"
                key={group.category}
              >

                <div className="skill-group-title">

                  <span className="skill-group-icon">
                    {group.icon}
                  </span>

                  <h3>
                    {group.category}
                  </h3>

                </div>


                <div className="skill-bars">

                  {group.items.map(([name, percentage]) => (

                    <div
                      className="skill-bar"
                      key={name}
                    >

                      <div className="skill-bar-header">

                        <span>
                          {name}
                        </span>

                        <strong>
                          {percentage}%
                        </strong>

                      </div>


                      <div className="progress-track">

                        <div
                          className={`progress-fill ${
                            visibleSkills ? "animate" : ""
                          }`}
                          style={{
                            "--progress": `${percentage}%`,
                          }}
                        />

                      </div>

                    </div>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* =====================================================
            WORKFLOW
        ===================================================== */}

        <section
          id="workflow"
          className="workflow section-grid"
        >

          <div className="workflow-heading">

            <div className="section-label centered">

              <span className="line" />

              HOW I AUTOMATE

              <span className="line" />

            </div>


            <h2>
              From idea
              <span>
                to automation.
              </span>
            </h2>


            <p>
              A structured approach to transforming business
              processes into reliable automation.
            </p>

          </div>


          <div className="workflow-grid">

            {workflow.map((item) => (

              <div
                className="workflow-card"
                key={item.number}
              >

                <div className="workflow-card-top">

                  <span>
                    {item.number}
                  </span>

                  <strong>
                    {item.icon}
                  </strong>

                </div>


                <h3>
                  {item.title}
                </h3>


                <p>
                  {item.text}
                </p>


                <div className="workflow-line" />

              </div>

            ))}

          </div>

        </section>


        {/* =====================================================
            PROJECTS
        ===================================================== */}

        <section
          id="projects"
          className="projects section-grid"
        >

          <div className="projects-heading">

            <div className="section-label">

              <span className="line" />

              FEATURED PROJECTS

            </div>


            <h2>
              Automation
              <span>
                in action.
              </span>
            </h2>


            <p>
              Selected automation solutions spanning RPA,
              banking, security, email automation, ETL and
              Agentic AI.
            </p>

          </div>


          <div className="project-grid">

            {projects.map((project) => (

              <article
                className="project-card"
                key={project.number}
              >

                <div className="project-header">

                  <span>
                    {project.number}
                  </span>

                  <span>
                    ↗
                  </span>

                </div>


                <div className="project-type">
                  {project.type}
                </div>


                <h3>
                  {project.title}
                </h3>


                <p className="project-description">
                  {project.description}
                </p>


                <div className="project-impact">

                  <span>
                    IMPACT
                  </span>

                  <p>
                    {project.impact}
                  </p>

                </div>


                <div className="project-technologies">

                  {project.technologies.map((technology) => (

                    <span key={technology}>
                      {technology}
                    </span>

                  ))}

                </div>

              </article>

            ))}

          </div>

        </section>


        {/* =====================================================
            IMPACT STORY
        ===================================================== */}

        <section className="impact-story section-grid">

          <div className="impact-story-left">

            <div className="section-label">

              <span className="line" />

              AUTOMATION IMPACT

            </div>


            <h2>
              Giving people
              <span>
                their time back.
              </span>
            </h2>

          </div>


          <div className="impact-story-right">

            <p>
              The real value of automation isn't simply the number
              of bots created. It is the repetitive human effort
              removed from everyday operations.
            </p>


            <p>
              My automation impact will be calculated directly
              from my actual process tracker, giving this portfolio
              a measurable view of the time and effort saved.
            </p>


            <div className="impact-equation">

              <span>
                PROCESS VOLUME
              </span>

              <strong>
                ×
              </strong>

              <span>
                MANUAL TIME
              </span>

              <strong>
                =
              </strong>

              <span className="highlight">
                HUMAN HOURS SAVED
              </span>

            </div>

          </div>

        </section>


        {/* =====================================================
            EDUCATION
        ===================================================== */}

        <section
          id="education"
          className="education section-grid"
        >

          <div className="education-heading">

            <div className="section-label">

              <span className="line" />

              EDUCATION

            </div>


            <h2>
              Where it
              <span>
                started.
              </span>
            </h2>

          </div>


          <div className="education-card">

            <div className="education-icon">
              BE
            </div>


            <div>

              <span className="education-period">
                2016 — 2020
              </span>

              <h3>
                Bachelor of Engineering
              </h3>

              <p>
                Electronics & Telecommunication
              </p>

              <strong>
                Mumbai University
              </strong>

              <span className="cgpi">
                CGPI 7.44
              </span>

            </div>

          </div>


          <div className="education-card school">

            <div className="education-icon">
              SSC
            </div>


            <div>

              <h3>
                Secondary School Certificate
              </h3>

              <strong>
                St. Joseph High School, Mumbai
              </strong>

            </div>

          </div>

        </section>


        {/* =====================================================
            CERTIFICATIONS
        ===================================================== */}

        <section className="achievements section-grid">

          <div className="achievements-heading">

            <div className="section-label">

              <span className="line" />

              CERTIFICATIONS & ACHIEVEMENTS

            </div>


            <h2>
              Learning,
              <span>
                building, growing.
              </span>
            </h2>

          </div>


          <div className="achievement-grid">

            {achievements.map((item) => (

              <div
                className="achievement-card"
                key={item.title}
              >

                <div className="achievement-icon">
                  {item.icon}
                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </section>


        {/* =====================================================
            CONTACT
        ===================================================== */}

        <section
          id="contact"
          className="contact section-grid"
        >

          <div className="contact-left">

            <div className="section-label">

              <span className="line" />

              CONTACT

            </div>


            <h2>
              Let's build
              <span>
                something intelligent.
              </span>
            </h2>

          </div>


          <div className="contact-right">

            <p>
              Interested in RPA, intelligent automation,
              AI or Agentic AI? Let's connect and build
              something useful.
            </p>


            <a
              href="mailto:harmeenjaina95@gmail.com"
              className="email-link"
            >
              harmeenjaina95@gmail.com
              <span>
                ↗
              </span>
            </a>


            <div className="contact-links">

              <a
                href="https://github.com/Harmeen95"
                target="_blank"
                rel="noreferrer"
              >
                GITHUB ↗
              </a>

              <a href="#">
                LINKEDIN ↗
              </a>

            </div>

          </div>

        </section>

      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer>

        <div className="footer-logo">
          <span>&lt;</span>
          Harmeen
          <span>/&gt;</span>
        </div>


        <p>
          RPA • INTELLIGENT AUTOMATION • AGENTIC AI
        </p>


        <p>
          © 2026 Harmeen Jaina
        </p>

      </footer>

    </div>
  );
}


export default App;