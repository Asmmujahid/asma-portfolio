import {
  FiBriefcase,
  FiCalendar,
  FiCheckCircle,
} from "react-icons/fi";

function Experience() {
  const experiences = [
    {
      role: "Web Developer",
      company: "iCreativez",
      duration: "17 Months",
      type: "Professional Experience",
      description:
        "Worked as a Web Developer developing and maintaining web applications using modern web technologies. Contributed to frontend interfaces, backend functionality, database interactions, and responsive web development.",
      technologies: [
        "HTML",
        "CSS",
        "Bootstrap",
        "PHP",
        "Laravel",
        "MySQL",
      ],
    },
    {
      role: "Web Developer Intern",
      company: "iCreativez",
      duration: "3 Months",
      type: "Internship",
      description:
        "Gained practical experience in web development and worked with frontend and backend technologies. Learned professional development workflows, debugging, database handling, and team collaboration.",
      technologies: [
        "HTML",
        "CSS",
        "Bootstrap",
        "PHP",
        "Laravel",
        "MySQL",
      ],
    },
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">

        {/* Section Heading */}
        <div className="section-heading">
          <p className="section-label">MY EXPERIENCE</p>

          <h2>
            Experience that shaped
            <span> my development journey.</span>
          </h2>
        </div>

        {/* Experience Timeline */}
        <div className="experience-timeline">

          {experiences.map((experience, index) => (
            <div className="experience-item" key={experience.role}>

              {/* Timeline */}
              <div className="timeline-marker">
                <FiBriefcase />
              </div>

              {index !== experiences.length - 1 && (
                <div className="timeline-line"></div>
              )}

              {/* Experience Card */}
              <article className="experience-card">

                <div className="experience-header">

                  <div>
                    <p className="experience-type">
                      {experience.type}
                    </p>

                    <h3>{experience.role}</h3>

                    <h4>{experience.company}</h4>
                  </div>

                  <div className="experience-duration">
                    <FiCalendar />
                    <span>{experience.duration}</span>
                  </div>

                </div>

                <p className="experience-description">
                  {experience.description}
                </p>

                <div className="experience-technologies">
                  {experience.technologies.map((technology) => (
                    <span key={technology}>
                      <FiCheckCircle />
                      {technology}
                    </span>
                  ))}
                </div>

              </article>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Experience;