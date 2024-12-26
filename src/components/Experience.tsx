import * as motion from "framer-motion/client";
import { Briefcase, Code2 } from "lucide-react";

const experiences = [
  {
    title: "Frontend Engineer",
    company: "Multiply (by Pidilite)",
    period: "Sep 2023 - Present",
    description: (
      <>
        <p className="text-sm md:text-base text-slate-600 mt-5">
          🚀 <strong>From Intern to Frontend Engineer : </strong>I began my
          journey with Pidilite as an intern and transitioned into a full-time
          role due to my contributions and passion for building intuitive,
          high-performance applications.
        </p>
        <p className="text-sm md:text-base text-slate-600 mt-5">
          📈 <strong>Key Contributions: </strong> I’ve played a central role in
          developing a sophisticated app tailored for interior contractors. This
          application includes complex features such as:
        </p>
        <ul className="list-disc list-inside text-sm md:text-base text-slate-600 mt-5">
          <li style={{ textIndent: "-1.4em", paddingLeft: "1.2em" }}>
            <strong>Digital Profile:</strong> Tools for contractors to manage
            and share thier work experience, portfolio, and skills. This feature
            allows contractors to showcase their expertise and design elements
            seamlessly.
          </li>
          <li
            style={{ textIndent: "-1.4em", paddingLeft: "1.2em" }}
            className=""
          >
            <strong>Procurement System:</strong> Streamlined procurement to
            support contractors in ordering and managing materials.
          </li>
          <li style={{ textIndent: "-1.4em", paddingLeft: "1.2em" }}>
            <strong>Quotation Generator:</strong> An efficient tool for
            generating detailed interior project quotes, saving contractors time
            and improving accuracy.
          </li>
        </ul>
        <p className="text-sm md:text-base text-slate-600 mt-5">
          This role has allowed me to hone my skills in frontend development,
          collaborate with a talented team, and continuously deliver value
          through meaningful solutions for the industry.
        </p>
      </>
    ),
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "HTML5",
      "CSS",
      "SCSS",
      "Tailwind CSS",
      "PWA",
      "Strapi CMS",
      "Flutter",
      "REST APIS",
    ],
  },
  {
    title: "Frontend Engineer Intern",
    company: "Multiply (by Pidilite)",
    period: "Mar 2023 - Aug 2023",
    description: (
      <p className="text-[14px] md:text-[16px] text-slate-600">
        Worked as a Frontend Engineer Intern.
      </p>
    ),
    skills: ["React", "JavaScript", "Tailwind CSS", "Bootstrap", "Material UI"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="my-20 bg-white">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold mb-12 text-primary-600">
            <Briefcase className="w-8 h-8 text-primary-600" />
            Work Experience
          </h2>

          <div
            className="relative border-l-2 pl-8 ml-4"
            style={{
              borderColor: "rgb(165 163 229)",
            }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="mb-12 relative"
              >
                <div
                  className="absolute -left-[43px] bg-white border-4 w-5 h-5 rounded-full"
                  style={{
                    borderColor: "rgb(165 163 229)",
                  }}
                />
                <div className="bg-slate-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                    <h3 className="text-xl font-bold text-slate-800">
                      {exp.title}
                    </h3>
                    <span className="text-primary-600 font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-lg font-medium text-slate-600 mb-3">
                    {exp.company}
                  </p>
                  <div className="mb-4">{exp.description}</div>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        transition={{
                          delay: index * 0.1 + skillIndex * 0.1,
                          duration: 0.2,
                        }}
                        className="px-4 py-1.5 bg-gradient-to-r from-primary-50 to-primary-100 hover:from-primary-100 hover:to-primary-200 text-primary-700 rounded-lg text-sm font-medium border border-primary-200 shadow-sm flex items-center gap-1.5 transition-colors"
                      >
                        <Code2 className="w-3.5 h-3.5" />
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
