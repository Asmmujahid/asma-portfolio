import { useState } from "react";
import {
  FiMail,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiArrowUpRight,
  FiCheckCircle,
} from "react-icons/fi";

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <FiMail />,
      label: "Email",
      value: "your-email@example.com",
      link: "mailto:your-email@example.com",
    },
    {
      icon: <FiMapPin />,
      label: "Location",
      value: "Karachi, Pakistan",
      link: "#",
    },
    {
      icon: <FiGithub />,
      label: "GitHub",
      value: "github.com/Asmmujahid",
      link: "https://github.com/Asmmujahid",
    },
    {
      icon: <FiLinkedin />,
      label: "LinkedIn",
      value: "linkedin.com/in/asma-syed-49a8b3339",
      link: "https://www.linkedin.com/in/asma-syed-49a8b3339/",
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsSubmitted(true);

    event.target.reset();

    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">

        <div className="section-heading">
          <p className="section-label">
            GET IN TOUCH
          </p>

          <h2>
            Let's build something
            <span> meaningful together.</span>
          </h2>
        </div>

        <div className="contact-content">

          <div className="contact-info">

            <p className="contact-intro">
              I'm open to discussing new opportunities,
              interesting projects, and full-stack development
              work. If you'd like to work together, feel free
              to get in touch.
            </p>

            <div className="contact-list">

              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.link}
                  target={
                    item.link.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    item.link.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="contact-item"
                >

                  <div className="contact-icon">
                    {item.icon}
                  </div>

                  <div className="contact-details">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>

                  <FiArrowUpRight className="contact-arrow" />

                </a>
              ))}

            </div>

          </div>

          <div className="contact-form-wrapper">

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="form-group">

                <label htmlFor="name">
                  Your Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />

              </div>

              <div className="form-group">

                <label htmlFor="email">
                  Your Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />

              </div>

              <div className="form-group">

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>

              </div>

              <button
                type="submit"
                className="contact-submit"
              >
                {isSubmitted ? (
                  <>
                    Message Ready
                    <FiCheckCircle />
                  </>
                ) : (
                  <>
                    Send Message
                    <FiSend />
                  </>
                )}
              </button>

              {isSubmitted && (
                <p className="form-success">
                  Thank you! Your message has been prepared successfully.
                </p>
              )}

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;

