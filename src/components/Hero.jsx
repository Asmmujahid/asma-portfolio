import {
  FiGithub,
  FiLinkedin,
  FiArrowRight,
  FiDownload,
} from "react-icons/fi";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">

        <div className="hero-content">

          <p className="hero-subtitle">
            FULL STACK DEVELOPER
          </p>

          <h1>
            Building modern
            <span> web applications.</span>
          </h1>

          <p className="hero-description">
            I'm Asma Mujahid, a Software Engineer focused on building
            scalable and user-friendly web applications using Laravel,
            React and MySQL.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="btn btn-primary"
            >
              View My Projects
              <FiArrowRight />
            </a>

            <a
              href="#contact"
              className="btn btn-secondary"
            >
              Contact Me
            </a>

            <a
              href="/resume.pdf"
              download="Asma-Mujahid-Resume.pdf"
              className="btn resume-btn"
            >
              Download Resume
              <FiDownload />
            </a>

          </div>

          <div className="social-links">

            <a
              href="https://github.com/Asmmujahid"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/asma-syed-49a8b3339/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>

          </div>

        </div>

        <div className="hero-card">

          <div className="code-window">

            <div className="code-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="code-content">

              <p>
                <span className="code-purple">
                  const
                </span>{" "}
                <span className="code-blue">
                  developer
                </span>{" "}
                = {"{"}
              </p>

              <p className="indent">
                name:{" "}
                <span className="code-green">
                  "Asma Mujahid"
                </span>,
              </p>

              <p className="indent">
                role:{" "}
                <span className="code-green">
                  "Full Stack Developer"
                </span>,
              </p>

              <p className="indent">
                frontend:{" "}
                <span className="code-green">
                  "React + Vite"
                </span>,
              </p>

              <p className="indent">
                backend:{" "}
                <span className="code-green">
                  "Laravel 12"
                </span>,
              </p>

              <p className="indent">
                database:{" "}
                <span className="code-green">
                  "MySQL"
                </span>
              </p>

              <p>
                {"};"}
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;

