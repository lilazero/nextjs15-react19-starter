"use client"

const OldProjects = () => {
  const oldProjects = [
    { id: 1, name: "Legacy Project X", year: 2015 },
    { id: 2, name: "Vintage Solution Y", year: 2010 },
    { id: 3, name: "Classic Implementation Z", year: 2008 },
  ]

  return (
    <section
      id="old-projects"
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Old Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {oldProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-lg shadow-md p-6 border border-primary-foreground"
            >
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="">Year: {project.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OldProjects
