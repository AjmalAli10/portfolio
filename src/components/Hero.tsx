"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);
    // Call handler right away to update initial position
    handleScroll();

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="pt-20 sm:pt-28 md:pt-36 pb-24 sm:pb-32 md:pb-40 bg-white relative overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <motion.h1
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase mb-4 sm:mb-6 leading-[1.1]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="text-orange-600">Ajmal</span> Ali
          </motion.h1>

          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-medium uppercase tracking-tight mt-4 mb-6 sm:mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Frontend Engineer
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl max-w-3xl mb-8 sm:mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            I build exceptional digital experiences that bridge the gap between
            user-centered design and technical implementation. Currently
            crafting product experiences at{" "}
            <span className="text-orange-600 font-medium">MULTIPLY</span>.
            Available for both freelance opportunities and full-time positions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-10 sm:mt-14"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button
              asChild
              variant="cta"
              size="cta"
              withArrow
              className="w-full sm:w-auto"
            >
              <Link href="/works">View My Work</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="cta"
              className="w-full sm:w-auto border-2 border-black shadow-[4px_4px_0_rgb(0,0,0)] hover:shadow-[4px_4px_0_rgb(234,88,12)] hover:border-orange-600 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0_rgb(234,88,12)]"
            >
              <Link href="/contact">Contact Me</Link>
            </Button>
          </motion.div>

          <motion.p
            className="text-sm sm:text-base text-gray-600 mt-6 sm:mt-8 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            I&apos;m interested in ambitious and large-scale freelance projects,
            but I&apos;m equally open to full-time opportunities. If you have
            any inquiries or would like to discuss potential collaborations,
            please don&apos;t hesitate to get in touch.
          </motion.p>
        </motion.div>
      </div>

      {/* Abstract design elements */}
      <div
        className="absolute -top-20 right-0 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-orange-600 rounded-full opacity-5 blur-3xl"
        style={{
          transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`,
        }}
      ></div>
      <div
        className="absolute -top-40 -left-20 w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] bg-black rounded-full opacity-5 blur-3xl"
        style={{
          transform: `translate(${scrollY * -0.05}px, ${scrollY * -0.08}px)`,
        }}
      ></div>
      <div
        className="absolute bottom-0 -left-10 w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] bg-orange-500 rounded-full opacity-5 blur-3xl"
        style={{
          transform: `translate(${scrollY * -0.05}px, ${scrollY * -0.02}px)`,
        }}
      ></div>

      {/* X design element */}
      <div className="absolute bottom-20 right-10 sm:bottom-40 sm:right-40 opacity-10 w-20 sm:w-40 h-20 sm:h-40 hidden sm:block">
        <div className="w-full h-1 bg-orange-600 absolute top-1/2 transform -translate-y-1/2 rotate-45"></div>
        <div className="w-full h-1 bg-orange-600 absolute top-1/2 transform -translate-y-1/2 -rotate-45"></div>
      </div>
    </section>
  );
}
