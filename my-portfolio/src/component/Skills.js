export function Skills() {
    const skillCategories = [
      {
        category: "Frontend",
        skills: ["React.js", "HTML5", "CSS3", "JavaScript", "TypeScript", "Tailwind CSS"],
      },
      {
        category: "Backend",
        skills: ["Node.js", "NestJS", "Express.js", "Python", "Django"],
      },
      {
        category: "Databases",
        skills: ["MongoDB", "MySQL", "PostgreSQL"],
      },
      {
        category: "DevOps",
        skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
      },
    ]
  
    return (
      <div>
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">{category.category}</h3>
              <ul className="list-disc list-inside">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    )
  }