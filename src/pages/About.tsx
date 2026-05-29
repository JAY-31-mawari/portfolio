import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const About = () => {
  return (
    <main className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden bg-grid-pattern transition-colors bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text">
      {/* Decorative Radial Grid */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
            Education
          </h1>
          <div className="h-1 w-12 rounded bg-blue-600 mt-4" />
        </div>

        <section className="max-w-3xl mb-12 mx-auto relative z-10">
          <motion.div
            className="glass-panel rounded-3xl p-6 md:p-8 border border-slate-200/50 dark:border-white/[0.04] transition-all relative overflow-hidden group shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Ambient background glows */}
            <div className="absolute -left-10 -top-10 w-40 h-40 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform" />
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform" />

            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
              {/* Glowing Icon Frame */}
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-900/30 bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform shadow-sm shadow-blue-500/10">
                <GraduationCap size={28} />
              </div>

              {/* Card Details */}
              <div className="flex-1">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                      Bachelor of Engineering in Information Technology
                    </h3>
                    <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mt-1">
                      Mumbai University
                    </p>
                  </div>
                  <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 shadow-sm">
                    CGPA: 8.74
                  </span>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                  Completed a Bachelor's degree in Information Technology with a
                  strong academic standing. Well-versed in backend and database
                  designs, while building systems following software engineering
                  best practices.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Who I Am / Profile Biography Section */}
        <motion.div
          className="max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="glass-panel rounded-3xl p-8 border border-slate-200/50 dark:border-white/[0.04] shadow-sm relative overflow-hidden group">
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="w-1.5 h-5 rounded bg-blue-600 dark:bg-blue-500" />
                Who I Am
              </h3>
              <ul className="space-y-4 text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-500 mt-2 shrink-0 shadow-md shadow-blue-500/50" />
                  <span>
                    <strong className="text-slate-950 dark:text-white font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                      MERN Stack Developer
                    </strong>{" "}
                    with a degree in IT, turning ideas into scalable, efficient,
                    high-performance systems.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-500 mt-2 shrink-0 shadow-md shadow-indigo-500/50" />
                  <span>
                    Enjoy collaborating with teams to build efficient and
                    intuitive applications,{" "}
                    <strong className="text-indigo-600 dark:text-indigo-400 font-bold">
                      Together
                    </strong>
                    .
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-violet-600 dark:bg-violet-500 mt-2 shrink-0 shadow-md shadow-violet-500/50" />
                  <span>
                    Passionate about solving problems and optimizing
                    architectures to achieve maximum performance and{" "}
                    <strong className="text-violet-600 dark:text-violet-400 font-bold">
                      Cost Efficiency
                    </strong>
                    .
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default About;
