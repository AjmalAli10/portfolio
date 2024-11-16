import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const ServiceNavbar = () => {
    return (
        <>
          <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-xl z-50 border-b border-slate-200 h-[80px]">
          <div className="container mx-auto px-6 py-5">
          <div className="flex justify-between items-center">
              <div
                className="text-2xl font-bold gradient-text"
              >
               <Link href="/">
               <img
                  src="/assets/portfolio-logo.png"
                  alt="portfolio"
                  className="h-[40px] w-[40px] object-contain"
                />
               </Link>
              </div>
              <div className="flex items-center gap-8 text-slate-600 hover:text-sectionHadingColor-800 transition-all duration-300 relative group">
                MY SERVICES
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full" />
              </div>
            </div>
          </div>
        </nav>
        </>
      );
}
export default ServiceNavbar