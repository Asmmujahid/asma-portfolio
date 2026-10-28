import {
  FiGithub,
  FiArrowUpRight,
} from "react-icons/fi";

function Projects() {
  const projects = [
    {
      title: "E-Commerce Web Application",
      description:
        "A full-stack e-commerce application with separate Admin, Seller, and Customer experiences. Includes product management, variants, inventory, orders, authentication, wishlist, cart, reviews, and REST APIs.",
      technologies: [
        "React",
        "Vite",
        "Laravel 12",
        "MySQL",
        "MUI",
        "Tailwind CSS",
      ],
      image: "/screenshots/ecommerce.png",
      github:
        "https://github.com/Asmmujahid/ecommerce-backend",
      featured: true,
    },
    {
      title: "Task Management System",
      description:
        "A role-based task management system designed for teams. Admins can manage users, teams, categories, tasks, and reports, while team leads and members manage their assigned tasks and collaboration.",
      technologies: [
        "Laravel 12",
        "PHP",
        "MySQL",
        "Blade",
        "JavaScript",
      ],
      image: "/screenshots/tms.png",
      github:
        "https://github.com/Asmmujahid/laravel-task-management-system",
      featured: false,
    },
    {
      title: "Doctor Clinic APIs",
      description:
        "A backend API project for managing doctor clinic operations, including API-based data management and database interactions using Laravel and MySQL.",
      technologies: [
        "Laravel",
        "PHP",
        "REST API",
        "MySQL",
        "Postman",
      ],
      image: "/projects/doctor-clinic.png",
      github: "",
      featured: false,
    },
  ];

  return (
    <section
      id="projects"
      className="section projects-section"
    >
      <div className="container">
        {/* Section Heading */}
        <div className="section-heading">
          <p className="section-label">
            MY PROJECTS
          </p>

          <h2>
            Projects that showcase
            <span> my development skills.</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className={`project-card ${
                project.featured
                  ? "project-featured"
                  : ""
              }`}
              key={project.title}
            >
              {/* Project Image */}
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="project-image"
                  loading="lazy"
                />

                <div className="project-image-overlay">
                  <FiArrowUpRight />
                </div>
              </div>

              {/* Project Header */}
              <div className="project-top">
                <div className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <FiArrowUpRight className="project-arrow" />
              </div>

              {/* Project Content */}
              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                {/* Technologies */}
                <div className="project-technologies">
                  {project.technologies.map(
                    (technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* GitHub Repository Link */}
              {project.github && (
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <FiGithub />
                    <span>GitHub Repository</span>
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;