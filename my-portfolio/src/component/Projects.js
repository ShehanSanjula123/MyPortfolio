export function Projects() {
    const projects = [
      {
        title: "KidsCare Mobile App",
        description: "Developed a mobile app to manage children's medical records and vaccination schedules. Built an admin dashboard to manage user accounts and handle data effectively.",
        technologies: ["React Native", "NestJS", "MongoDB"],
        github: "https://github.com/yourusername/kidscare",
        demo: null,
      },
      {
        title: "Sri Lanka Travel Guide",
        description: "Created a responsive website featuring Sri Lanka's beautiful tourist destinations and hotel listings for travelers.",
        technologies: ["ReactJS"],
        github: "https://github.com/yourusername/sl-travel-guide",
        demo: null,
      },
    ]
  
    return (
      <div>
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="mb-4">
                <strong>Technologies:</strong> {project.technologies.join(", ")}
              </div>
              <div className="flex space-x-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  GitHub
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }