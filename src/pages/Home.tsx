import React from "react";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  const github = import.meta.env.VITE_APP_GITHUB;
  const linkedin = import.meta.env.VITE_APP_LINKEDIN;
  const email = import.meta.env.VITE_APP_EMAIL;
  const resume = import.meta.env.VITE_APP_RESUME;

  const projects = [
    {
      title: "E-Finder",
      desc: "E-Finder is designed to locate the nearest electric charging station for EV cars, offering precise traffic condition forecasts. The application seamlessly integrates Map API for mapping services, and the data is dispatched into the API after cleaning the data. Stores the data in a Nosql mongoDB database, ensuring scalability",
      tech: ["HTML", "JavaScript", "Node.js", "Map API"],
      link: "https://efinder-group32.netlify.app/",
    },
    {
      title: "Travel",
      desc: "A dynamic travel website built in React.js ensures smooth and efficient functionality, plus with improved state management. It stores user data and travel-related information in an SQL database, ensuring faster responses. The implementation includes a REST API facilitating communication between the frontend and the database, enabling seamless storage and retrieval of data",
      tech: ["React.js", "Express.js", "mysql", "REST API"],
      link: "",
    },
    {
      title: "REST API for E-Commerce App",
      desc: "A fully functional, fast, and secure REST API has been developed for an e-commerce app, encompassing all necessary CRUD endpoints for a web application. User authentication and authorization have been managed using Node.js libraries and encryption methods. A database is employed to store validated information on users and products",
      tech: [
        "Express.js",
        "mongoDB",
        "authentication",
        "authorization Libraries",
      ],
      link: "https://github.com/JAY-31-mawari/E-Commerce-API",
    },
  ];

  return (
    <main className="relative min-h-screen w-full px-6 pt-32 pb-20 overflow-hidden bg-grid-pattern transition-colors duration-500 bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text">
      {/* Decorative Radial Gradient Background */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center mt-24 mb-44 relative z-10">
        <motion.h6
          className="text-lg md:text-xl mb-4 max-w-2xl mx-auto text-slate-600 dark:text-slate-300 leading-relaxed font-normal"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Transforming Ideas into Functional Software
        </motion.h6>

        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I am{" "}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-500 bg-clip-text text-transparent font-extrabold">
            Jay Mawari, a Software Developer.
          </span>
        </motion.h1>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <a
            href={resume}
            target="_blank"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-blue-500/10 hover:shadow-blue-500/25 transition-all inline-flex items-center justify-center gap-2 group"
          >
            <span>My Resume</span>
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#projects"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/40 backdrop-blur-sm hover:bg-slate-100 dark:hover:bg-slate-900 hover:scale-[1.02] active:scale-[0.98] transition-all text-slate-700 dark:text-slate-300 inline-flex items-center justify-center gap-2"
          >
            <span>Explore Projects</span>
          </a>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="max-w-6xl mx-auto mb-28 relative z-10 scroll-mt-24"
      >
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-2">
            Featured Projects
          </h2>
          <div className="h-1 w-12 rounded bg-blue-600" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <motion.a
              key={i}
              href={proj.link || undefined}
              target={proj.link ? "_blank" : undefined}
              rel={proj.link ? "noopener noreferrer" : undefined}
              className={`glass-panel glass-panel-hover rounded-3xl p-6 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300 ${
                proj.link ? "cursor-pointer" : "cursor-default"
              }`}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                  {proj.desc}
                </p>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-white/[0.04]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {proj.link ? (
                  <div className="flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300">
                    <span>View Project</span>
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                ) : null}
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="max-w-3xl mx-auto text-center relative z-10 pt-8"
      >
        <div className="glass-panel rounded-3xl p-10 md:p-12 relative overflow-hidden">
          {/* subtle decoration */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 dark:bg-blue-500/5 blur-2xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/10 dark:bg-purple-500/5 blur-2xl rounded-full" />

          <h2 className="text-3xl font-bold mb-4 tracking-tight">
            Let’s Connect
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
            Interested in collaborating on a project or exploring new employment
            opportunities? I’m always open to discussing new ideas.
          </p>

          <div className="flex justify-center items-center gap-4">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-full glass-panel hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 active:scale-95 transition-all shadow-sm"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-full glass-panel hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 active:scale-95 transition-all shadow-sm"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-full glass-panel hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 active:scale-95 transition-all shadow-sm"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
