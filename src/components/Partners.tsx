"use client"

const Partners = () => {
  const partners = [
    { id: 1, name: "Partner Company A" },
    { id: 2, name: "Partner Company B" },
    { id: 3, name: "Partner Company C" },
  ]

  return (
    <section
      id="partners"
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="rounded-lg shadow-md p-6 text-center"
            >
              <h3 className="text-xl font-semibold">{partner.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
