/* eslint-disable @next/next/no-img-element */
'use client';
import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import { AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";


const navItems = ['About', 'Services', 'Experience', 'Skills', 'Projects', 'Contact'];
 const  Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }
}, [isMobileMenuOpen]);
  return (
    <>
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-xl z-50 border-b border-slate-200 h-[80px]">
      <div className="container mx-auto px-6 py-5">
      <div className="flex justify-between items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-2xl font-bold gradient-text"
          >
           <Link href="/">
           <img
              src="/assets/portfolio-logo.png"
              alt="portfolio"
              className="h-[40px] w-[40px] object-contain"
            />
           </Link>
          </motion.div>
          <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
               item === 'Services' ? (
                <Link key={item} href="/services" className="text-slate-600 hover:text-sectionHadingColor-800 transition-all duration-300 relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full" />
              </Link>
               ):
               (
                <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-600 hover:text-sectionHadingColor-800 transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full" />
              </a>
               )
              ))}
            
             {/* <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300 shadow-sm group"
              >
                <FileText className="w-4 h-4" />
                Resume
                <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a> */}
          </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-slate-600 hover:text-primary-600 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>
        </div>
      </div>
    </nav>
     {/* Mobile Sidebar */}
     <AnimatePresence>
        {isMobileMenuOpen && (
          <Sidebar
            onClose={closeMobileMenu}
            navItems={navItems}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;