import {
  FaReact,
  FaJs,
  FaLaravel,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiMysql,
  SiTailwindcss,
  SiMui,
} from "react-icons/si";

function Skills() {
  const skills = [
    {
      name: "React",
      icon: <FaReact />,
      category: "Frontend",
      description: "Building modern and interactive user interfaces.",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      category: "Frontend",
      description: "Creating dynamic and interactive web experiences.",
    },
    {
      name: "Laravel",
      icon: <FaLaravel />,
      category: "Backend",
      description: "Developing secure and scalable REST APIs.",
    },
    {
      name: "PHP",
      icon: <FaPhp />,
      category: "Backend",
      description: "Building server-side web applications.",
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
      category: "Database",
      description: "Designing and managing relational databases.",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      category: "Frontend",
      description: "Creating responsive and modern interfaces.",
    },
    {
      name: "MUI",
      icon: <SiMui />,
      category: "UI Library",
      description: "Building professional React interfaces.",
    },
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      category: "Frontend",
      description: "Creating semantic and accessible web structures.",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      category: "Frontend",
      description: "Styling responsive and visually appealing websites.",
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap />,
      category: "Frontend",
      description: "Developing responsive layouts efficiently.",
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
      category: "Tools",
      description: "Managing source code and development workflows.",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      category: "Tools",
      description: "Hosting repositories and collaborating on projects.",
    },
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">

        {/* Section Heading */}
        <div className="section-heading">
          <p className="section-label">MY SKILLS</p>

          <h2>
            Technologies I use to
            <span> build applications.</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>

              <div className="skill-icon">
                {skill.icon}
              </div>

              <div className="skill-info">
                <div className="skill-title">
                  <h3>{skill.name}</h3>

                  <span>{skill.category}</span>
                </div>

                <p>{skill.description}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;