export default function Footer() {
    return (
      <footer className="bg-purple-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">Nariii</h2>
              <p className="text-sm">Empowering women's safety worldwide</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-200">Privacy Policy</a>
              <a href="#" className="hover:text-purple-200">Terms of Service</a>
              <a href="#" className="hover:text-purple-200">FAQ</a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            © {new Date().getFullYear()} Nariii. All rights reserved.
          </div>
        </div>
      </footer>
    )
  }