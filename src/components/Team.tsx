"use client"

const Team = () => {
  const teamMembers = [
    { id: 1, name: "John Doe", role: "CEO" },
    { id: 2, name: "Jane Smith", role: "CTO" },
    { id: 3, name: "Mike Johnson", role: "Lead Developer" },
  ]

  return (
    <section
      id="team"
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="rounded-lg shadow-md p-6 text-center"
            >
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
