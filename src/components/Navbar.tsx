/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/works", text: "Works" },
    { href: "/about", text: "About" },
    { href: "/contact", text: "Contact" },
    { href: "/recommendations", text: "Recommendations" },
  ];

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <>
      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 backdrop-blur-sm lg:hidden"
          onClick={closeMenu}
        ></div>
      )}

      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md pt-4"
            : "bg-transparent py-5 md:py-6 lg:py-8"
        }`}
      >
        <div className="container mx-auto px-5 md:px-6 flex items-center justify-between">
          <Link href="/" className="inline-block">
            <span
              className={`font-bold text-2xl sm:text-3xl uppercase transition-colors duration-300 ${
                scrolled ? "text-black" : "text-orange-600"
              }`}
            >
              Ajmal
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-4">
            <div className="flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 relative font-medium ${
                    isActive(link.href)
                      ? "text-orange-600"
                      : "text-gray-700 hover:text-orange-600"
                  } transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-orange-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-bottom-right hover:after:origin-bottom-left ${
                    isActive(link.href) && "after:scale-x-100"
                  }`}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </nav>

          <div className="hidden lg:block ml-auto">
            <Link
              href="/contact"
              className="relative bg-black text-white hover:bg-orange-600 transition-all duration-300 px-5 py-2 uppercase text-sm font-medium shadow-[2px_2px_0px_rgb(0,0,0)] hover:shadow-[3px_3px_0px_rgb(234,88,12)] active:translate-y-1 active:translate-x-1 active:shadow-[1px_1px_0px_rgb(234,88,12)] overflow-hidden"
            >
              <span className="relative z-10">Get In Touch</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 ml-4 rounded-md focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className={`h-6 w-6 transition-colors duration-300 ${
                scrolled ? "text-black" : "text-orange-600"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 right-0 w-[80%] sm:w-[60%] max-w-sm h-full bg-white z-50 shadow-xl transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden flex flex-col`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-5 border-b">
          <span className="font-bold text-2xl uppercase">Menu</span>
          <button
            onClick={closeMenu}
            className="p-2 rounded-md text-black focus:outline-none"
            aria-label="Close menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <div className="flex-1 overflow-y-auto">
          <nav className="flex flex-col p-5 space-y-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-medium py-2 border-b border-gray-100 ${
                  isActive(link.href)
                    ? "text-orange-600 border-orange-600"
                    : "text-gray-700 hover:text-orange-600 hover:border-orange-600"
                } transition-colors duration-300`}
                onClick={closeMenu}
              >
                {link.text}
              </Link>
            ))}
          </nav>
        </div>

        {/* Footer */}
        <div className="p-5 border-t">
          <Link
            href="/contact"
            className="inline-block relative bg-orange-600 text-white hover:bg-orange-700 transition-all duration-300 px-6 py-3 text-base uppercase text-center tracking-wider font-medium w-full shadow-[3px_3px_0_rgb(0,0,0)] hover:shadow-[4px_4px_0_rgb(0,0,0)] active:translate-y-1 active:shadow-[3px_3px_0_rgb(0,0,0)] overflow-hidden group"
            onClick={closeMenu}
          >
            <span className="relative z-10 flex items-center justify-center">
              Get In Touch
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
