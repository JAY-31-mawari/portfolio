import { motion } from "framer-motion";
import { Code, Database, Layers, Server } from "lucide-react";
import {
  SiReact,
  SiPython,
  SiFirebase,
  SiTypescript,
  SiJavascript,
  SiAmazonwebservices,
  SiNextdotjs,
  SiMysql,
  SiMongodb,
  SiRedis,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      icon: <Code size={26} />,
      title: "Progamming Language",
      desc: "Python, Typescript, Javascript",
    },
    {
      icon: <Layers size={26} />,
      title: "Frameworks & Libraries",
      desc: "React.js, Next.js, Node.js, Express.js, React Native, Expo",
    },
    {
      icon: <Database size={26} />,
      title: "Database",
      desc: "PostgreSQL, MongoDB, Redis",
    },
    {
      icon: <Server size={26} />,
      title: "Cloud and AI",
      desc: "AWS (EC2, S3, SQS) , GIT, RAG-chatbot, Firebase",
    },
  ];

  const skillIcons = [
    {
      name: "React",
      icon: (
        <SiReact className="text-[#61DAFB] transition-colors duration-300" />
      ),
      glow: "hover:shadow-[0_0_20px_rgba(97,218,251,0.15)] hover:border-[#61DAFB]/30",
    },
    {
      name: "Next.js",
      icon: (
        <SiNextdotjs className="text-slate-900 dark:text-white transition-colors duration-300" />
      ),
      glow: "hover:shadow-[0_0_20px_rgba(15,23,42,0.15)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:border-slate-400 dark:hover:border-slate-700",
    },
    {
      name: "React Native",
      icon: (
        <SiReact className="text-[#61DAFB] transition-colors duration-300 animate-[pulse_2s_infinite]" />
      ),
      glow: "hover:shadow-[0_0_20px_rgba(97,218,251,0.15)] hover:border-[#61DAFB]/30",
    },
    {
      name: "Python",
      icon: (
        <SiPython className="text-[#3776AB] transition-colors duration-300" />
      ),
      glow: "hover:shadow-[0_0_20px_rgba(55,118,171,0.15)] hover:border-[#3776AB]/30",
    },
    {
      name: "TypeScript",
      icon: (
        <SiTypescript className="text-[#3178C6] transition-colors duration-300" />
      ),
      glow: "hover:shadow-[0_0_20px_rgba(49,120,198,0.15)] hover:border-[#3178C6]/30",
    },
    {
      name: "JavaScript",
      icon: (
        <SiJavascript className="text-[#F7DF1E] transition-colors duration-300" />
      ),
      glow: "hover:shadow-[0_0_20px_rgba(247,223,30,0.15)] hover:border-[#F7DF1E]/30",
    },
    {
      name: "MongoDB",
      icon: (
        <SiMongodb className="text-[#47A248] transition-colors duration-300" />
      ),
      glow: "hover:shadow-[0_0_20px_rgba(71,162,72,0.15)] hover:border-[#47A248]/30",
    },
    {
      name: "SQL",
      icon: (
        <SiMysql className="text-[#4479A1] transition-colors duration-300" />
      ),
      glow: "hover:shadow-[0_0_20px_rgba(68,121,161,0.15)] hover:border-[#4479A1]/30",
    },
    {
      name: "Redis",
      icon: (
        <SiRedis className="text-[#DC382D] transition-colors duration-300" />
      ),
      glow: "hover:shadow-[0_0_20px_rgba(220,56,45,0.15)] hover:border-[#DC382D]/30",
    },
    {
      name: "Firebase",
      icon: (
        <SiFirebase className="text-[#FFCA28] transition-colors duration-300" />
      ),
      glow: "hover:shadow-[0_0_20px_rgba(255,202,40,0.15)] hover:border-[#FFCA28]/30",
    },
    {
      name: "AWS",
      icon: (
        <SiAmazonwebservices className="text-[#FF9900] transition-colors duration-300" />
      ),
      glow: "hover:shadow-[0_0_20px_rgba(255,153,0,0.15)] hover:border-[#FF9900]/30",
    },
  ];

  return (
    <main className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden bg-grid-pattern transition-colors duration-500 bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text">
      {/* Decorative Radial Grid */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto relative z-10">
        <section className="max-w-5xl mx-auto mb-24 relative z-10">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-2">
              My Tech Stack
            </h2>
            <div className="h-1 w-12 rounded bg-blue-600" />
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {skillIcons.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`group flex items-center gap-3 px-5 py-3 rounded-2xl glass-panel glass-panel-hover cursor-default border border-slate-200/50 dark:border-white/[0.04] transition-all duration-300 ${skill.glow}`}
              >
                <span className="text-2xl transition-transform duration-300 group-hover:scale-110">
                  {skill.icon}
                </span>
                <span className="font-semibold text-sm text-slate-700 dark:text-slate-200">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className={`glass-panel rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-300 relative overflow-hidden group border-slate-200/50 dark:border-white/[0.04]"
                }`}
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {/* Subtle hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Glowing Icon Frame */}
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border transition-all duration-300 group-hover:scale-110 shadow-sm bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200/50 dark:border-white/[0.04]"
                  }`}
              >
                {skill.icon}
              </div>

              <h3 className="text-lg font-bold tracking-tight mb-3 text-slate-900 dark:text-white">
                {skill.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed relative z-10">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Skills;
