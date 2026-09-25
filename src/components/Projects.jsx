import {
  FiGithub,
  FiExternalLink,
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
      demo:
        "https://ecommerce-frontend-nine-blue.vercel.app/",
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
      demo:
        "https://laravel-task-management-system-production.up.railway.app/",
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
      demo: "",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">

        <div className="section-heading">
          <p className="section-label">
            MY PROJECTS
          </p>

          <h2>
            Projects that showcase
            <span> my development skills.</span>
          </h2>
        </div>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <article
              className={`project-card ${
                project.featured ? "project-featured" : ""
              }`}
              key={project.title}
            >

              {/* Project Image */}
              <div className="project-image-wrapper">

                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="project-image"
                />

                <div className="project-image-overlay">
                  <FiArrowUpRight />
                </div>

              </div>

              {/* Project Header */}
              <div className="project-top">

                <div className="project-number">
                  0{index + 1}
                </div>

                <FiArrowUpRight className="project-arrow" />

              </div>

              {/* Project Content */}
              <div className="project-content">

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

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

              {/* Project Links */}
              <div className="project-links">

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FiGithub />
                    GitHub
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-demo"
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>
                )}

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;

