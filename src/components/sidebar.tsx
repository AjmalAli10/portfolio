import { motion } from 'framer-motion';
import {  X } from 'lucide-react';

interface SidebarProps {
  onClose: () => void;
  navItems: string[];
}

export default function Sidebar({ onClose, navItems }: SidebarProps) {
  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
      />

      {/* Sidebar */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
        className="fixed right-0 top-0 bottom-0 w-[300px] bg-white shadow-2xl z-50 md:hidden"
      >
        <div className="p-6">
          <div className="flex justify-end mb-8">
            <button
              onClick={onClose}
              className="p-2 text-slate-600 hover:text-primary-600 transition-colors"
              aria-label="Close mobile menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-6">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={onClose}
                className="block text-lg font-medium text-slate-600 hover:text-primary-600 transition-colors"
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {item}
              </motion.a>
            ))}
            
            {/* <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300 shadow-sm group w-full justify-center mt-8"
              whileHover={{ scale: 1.02 }}
            >
              <FileText className="w-4 h-4" />
              Resume
              <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a> */}
          </div>

          <div className="absolute bottom-8 left-6 right-6">
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
              <p className="text-sm text-slate-600">
                Let`&apos;s work together! Feel free to reach out for collaborations or just a friendly hello 👋
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}