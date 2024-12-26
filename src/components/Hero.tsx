import * as motion from "framer-motion/client";
import { ArrowRight, Github, Linkedin, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen pt-[6rem] flex items-center bg-gradient-to-br from-slate-50 to-primary-50/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <div className="flex items-center gap-2 mb-6">
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                >
                  Available for work
                </motion.span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="gradient-text">Ajmal Ali</span>
                <span className="block text-slate-800 mt-2">
                  Frontend Engineer
                </span>
              </h1>
              <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed">
                Crafting beautiful digital experiences with modern web
                technologies. Focused on building scalable and user-friendly
                applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Link
                href="#contact"
                className="group px-8 py-4 bg-primary-600 text-white rounded-xl flex items-center justify-center gap-2 hover:bg-primary-700 transition-all duration-300 shadow-sm hover:shadow"
              >
                Let&apos;s Talk
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              {/* <Link
                href="/services"
                className="px-8 py-4 bg-white text-slate-800 rounded-xl hover:bg-slate-50 transition-all duration-300 border border-slate-200 shadow-sm hover:shadow flex items-center justify-center"
              >
                View Services
              </Link> */}
              <Link
                href="#experience"
                className="px-8 py-4 bg-white text-slate-800 rounded-xl hover:bg-slate-50 transition-all duration-300 border border-slate-200 shadow-sm hover:shadow flex items-center justify-center"
              >
                View Expreince
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4"
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/AjmalAli10",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/ajmal-ali10",
                  label: "LinkedIn",
                },
                {
                  icon: X,
                  href: "https://x.com/softEng_ajmal",
                  label: "Twitter",
                },
              ].map(({ icon: Icon, href, label }, index) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 flex items-center justify-center rounded-xl bg-white text-slate-600 transition-colors border border-slate-200 group ${
                    index === 0 || index === 2
                      ? "hover:text-black hover:bg-primary-50"
                      : "hover:text-primary-600 hover:bg-primary-50"
                  }`}
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute -top-6 -left-6 w-24 h-24 bg-primary-100 rounded-full blur-2xl"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-200 rounded-full blur-2xl"
              />
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
                <Image
                  src="/assets/profile-hero-image.webp"
                  alt="Ajmal Ali"
                  className="w-full h-full object-cover"
                  fill
                  priority={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-200" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white px-8 py-4 rounded-2xl shadow-xl border border-slate-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <p className="text-slate-600 font-medium">
                  Building products in tech!
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
