"use client"

const Portfolio = () => {
  const projects = [
    { id: 1, title: "Project 1", description: "A brief description of Project 1" },
    { id: 2, title: "Project 2", description: "A brief description of Project 2" },
    { id: 3, title: "Project 3", description: "A brief description of Project 3" },
  ]

  return (
    <section
      id="portfolio"
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
