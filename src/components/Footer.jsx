import {
  FiGithub,
  FiLinkedin,
  FiArrowUp,
} from "react-icons/fi";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-container">

          <div className="footer-brand">

            <a
              href="#home"
              className="footer-logo"
            >
              Asma<span>.</span>
            </a>

            <p className="footer-tagline">
              Full Stack Developer building modern web applications.
            </p>

          </div>

          <div className="footer-links">

            <a
              href="https://github.com/Asmmujahid"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/asma-syed-49a8b3339/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>

            <a
              href="#home"
              className="footer-social"
              aria-label="Back to top"
            >
              <FiArrowUp />
            </a>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © {currentYear} Asma Mujahid. All rights reserved.
          </p>

          <p>
            Built with{" "}
            <span className="footer-heart">
              React
            </span>{" "}
            &{" "}
            <span className="footer-heart">
              Vite
            </span>
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;

