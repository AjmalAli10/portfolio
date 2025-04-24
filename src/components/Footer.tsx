export default function Footer() {
  return (
    <footer className="border-t border-black py-12 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <p className="text-xl font-bold">AJMAL ⋆ ALI</p>
            <p className="mt-4 text-gray-400">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <p className="text-lg font-medium mb-3">Connect</p>
            <div className="flex flex-col space-y-2">
              <a
                href="https://github.com/AjmalAli10"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-600 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ajmal-ali10"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-600 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/softEng_ajmal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-600 transition-colors"
              >
                X
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
