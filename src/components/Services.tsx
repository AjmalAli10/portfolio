'use client';
import { motion } from 'framer-motion';
import { Code2, Palette, Rocket, Smartphone, Globe2, Zap, Gem, ArrowRight, CheckCircle2, Sparkles, Target, Heart } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Modern, responsive web applications built with the latest technologies.',
    features: ['Custom Web Applications', 'Responsive Design', 'Progressive Web Apps'],
    commitment: 'Clean code, optimal performance, modern best practices',
    color: 'from-blue-500 to-cyan-500',
    lightColor: 'from-blue-50 to-cyan-50',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that provide exceptional user experiences.',
    features: ['Modern UI Design', 'Interactive Prototypes', 'User-Centric Approach'],
    commitment: 'Pixel-perfect designs, smooth interactions',
    color: 'from-purple-500 to-pink-500',
    lightColor: 'from-purple-50 to-pink-50',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Development',
    description: 'Seamless experiences across all devices and screen sizes.',
    features: ['Responsive Layouts', 'Touch-Friendly Design', 'Cross-Platform Support'],
    commitment: 'Consistent experience across all devices',
    color: 'from-orange-500 to-red-500',
    lightColor: 'from-orange-50 to-red-50',
  },
  {
    icon: Globe2,
    title: 'Full Stack Solutions',
    description: 'Complete web solutions from frontend to backend.',
    features: ['API Integration', 'Database Design', 'Server Setup'],
    commitment: 'Scalable architecture, secure implementation',
    color: 'from-green-500 to-teal-500',
    lightColor: 'from-green-50 to-teal-50',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Fast-loading, optimized applications for the best user experience.',
    features: ['Speed Optimization', 'SEO Best Practices', 'Core Web Vitals'],
    commitment: 'Lightning-fast load times, SEO-friendly',
    color: 'from-yellow-500 to-orange-500',
    lightColor: 'from-yellow-50 to-orange-50',
  },
  {
    icon: Gem,
    title: 'Quality Assurance',
    description: 'Thoroughly tested solutions that meet high quality standards.',
    features: ['Comprehensive Testing', 'Bug-Free Code', 'Performance Monitoring'],
    commitment: 'Reliable, maintainable solutions',
    color: 'from-indigo-500 to-purple-500',
    lightColor: 'from-indigo-50 to-purple-50',
  },
];

const highlights = [
  {
    icon: Sparkles,
    title: 'Fresh Perspective',
    description: 'Bringing innovative ideas and modern solutions.',
  },
  {
    icon: Target,
    title: 'Focused Dedication',
    description: 'Ensuring excellence and success in every project.',
  },
  {
    icon: Heart,
    title: 'Passionate Developer',
    description: 'Driven by love for clean, efficient, and robust code.',
  },
];


export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Header Section */}
          <div className="text-center mb-16 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              {/* <span className="px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium inline-block mb-4">
                Available for New Projects
              </span> */}
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-600 via-primary-800 to-primary-600 text-transparent bg-clip-text">
              Transforming Ideas into Digital Realities
              </h2>
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Delivering seamless, high-performance, and user-centric digital experiences.
              </p>
            </motion.div>

            {/* Highlights Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16"
            >
              {highlights.map((highlight) => {
                const Icon = highlight.icon;
                
                return (
                  <div
                    key={highlight.title}
                    className="relative group flex bg-white rounded-2xl p-6 shadow-sm group-hover:shadow-md transition-all duration-300"
                  >
                    {/* <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300" /> */}
                    <div className="relative">
                      <div className="flex items-center justify-center mb-4">
                        <div className="p-3 rounded-xl bg-primary-100 group-hover:bg-primary-200 transition-colors">
                          <Icon className="w-8 h-8 text-primary-600" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-primary-600 mb-1">{highlight.title}</h3>
                      <p className="text-slate-600">{highlight.description}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isHovered = hoveredIndex === index;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="group relative flex flex-col bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm group-hover:shadow-xl transition-all duration-300 border border-slate-100"
                >
                  {/* <div 
                    className={`absolute inset-0 bg-gradient-to-r ${service.lightColor} rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300`}
                  /> */}
                  <div className="relative">
                    <div className="relative">
                      <div className={`absolute inset-0 blur-xl bg-gradient-to-r ${service.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                      <div className={`relative mb-6 inline-block p-4 bg-gradient-to-r ${service.lightColor} rounded-xl group-hover:scale-110 transition-all duration-300`}>
                      <Icon className={`w-8 h-8 ${!isHovered ? `text-${service.lightColor}` : 'text-primary-600'} group-hover:scale-110 `} /> 
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-transparent bg-clip-text bg-gradient-to-r group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-primary-800 transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature) => (
                        <motion.li
                          key={feature}
                          className="flex items-center gap-2"
                          initial={{ x: 0 }}
                          animate={{ x: isHovered ? 4 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                            <CheckCircle2 className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-slate-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${service.lightColor} mb-6`}>
                      <p className="text-sm font-medium text-slate-700">
                        <span className="text-primary-600">My Commitment: </span>
                        {service.commitment}
                      </p>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                      transition={{ duration: 0.2 }}
                      className="pt-4 border-t border-slate-100"
                    >
                      <a
                        href="#contact"
                        className={`inline-flex items-center gap-2 text-sm font-medium bg-gradient-to-r ${service.color} text-transparent bg-clip-text group/link`}
                      >
                        Discuss Your Project
                        <ArrowRight className={`w-4 h-4 bg-gradient-to-r ${service.color} text-transparent bg-clip-text group-hover/link:translate-x-1 transition-transform`} />
                      </a>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-20 text-center"
          >
            <div className="max-w-2xl mx-auto mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                Let&apos;s Build Something Amazing Together
              </h3>
              <p className="text-slate-600 mb-8">
                Ready to bring your ideas to life with modern web technologies and dedicated attention to detail
              </p>
            </div>
            <div className="relative inline-block">
              <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-primary-300 to-primary-600 opacity-20 animate-pulse" />
              <a
                href="#contact"
                className="relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-sm hover:shadow-xl group"
              >
                Start a Conversation
                <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}