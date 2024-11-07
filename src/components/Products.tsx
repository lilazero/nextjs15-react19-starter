"use client"

const Products = () => {
  const products = [
    { id: 1, name: "Product A", price: "$99.99" },
    { id: 2, name: "Product B", price: "$149.99" },
    { id: 3, name: "Product C", price: "$199.99" },
  ]

  return (
    <section
      id="products"
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
