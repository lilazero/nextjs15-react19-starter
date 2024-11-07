"use client"

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Our Business</h3>
            <p className="text-sm">Providing innovative solutions since 2010</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p className="text-sm">123 Business Street</p>
            <p className="text-sm">City, State 12345</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="www.facebook.com"
                className="text-white hover:text-gray-300"
              >
                Facebook
              </a>
              <a
                href="twitter.com"
                className="text-white hover:text-gray-300"
              >
                Twitter
              </a>
              <a
                href="linkedin.com"
                className="text-white hover:text-gray-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Our Business. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
