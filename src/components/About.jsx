import {
  FiCode,
  FiBriefcase,
  FiLayers,
  FiDatabase,
} from "react-icons/fi";

function About() {
  const stats = [
    {
      icon: <FiBriefcase />,
      number: "17+",
      label: "Months Experience",
    },
    {
      icon: <FiCode />,
      number: "10+",
      label: "Projects Built",
    },
    {
      icon: <FiLayers />,
      number: "6+",
      label: "Core Technologies",
    },
    {
      icon: <FiDatabase />,
      number: "3+",
      label: "API Projects",
    },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">

        {/* Section Heading */}
        <div className="section-heading">
          <p className="section-label">ABOUT ME</p>

          <h2>
            Turning ideas into
            <span> modern web applications.</span>
          </h2>
        </div>

        {/* About Content */}
        <div className="about-content">

          <div className="about-text">
            <p>
              I'm Asma Mujahid, a Software Engineer and Full Stack
              Developer passionate about building modern, scalable,
              and user-friendly web applications.
            </p>

            <p>
              I have professional experience working as a Web Developer
              at iCreativez, where I worked with technologies such as
              HTML, CSS, Bootstrap, PHP, Laravel, and MySQL.
            </p>

            <p>
              Currently, I focus on developing full-stack applications
              using React and Vite for the frontend and Laravel APIs
              for the backend. I also work with MySQL, MUI, Tailwind
              CSS, Git, and GitHub.
            </p>

            <p>
              I enjoy learning new technologies, solving development
              problems, and creating projects that demonstrate
              real-world development skills.
            </p>
          </div>

          {/* Stats */}
          <div className="about-stats">
            {stats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <div className="stat-icon">
                  {stat.icon}
                </div>

                <h3>{stat.number}</h3>

                <p>{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;