import { motion } from "framer-motion";
import { Briefcase, Github, Linkedin, Mail } from "lucide-react";

interface Project {
  name: string;
  points: string[];
}

interface TimelineItem {
  type: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  badge: string[];
  desc: string;
  points?: string[];
  projects?: Project[];
}

const Experience = () => {
  const github = import.meta.env.VITE_APP_GITHUB;
  const linkedin = import.meta.env.VITE_APP_LINKEDIN;
  const email = import.meta.env.VITE_APP_EMAIL;

  const timelineItems: TimelineItem[] = [
    {
      type: "work",
      icon: <Briefcase size={16} />,
      title: "Gladtech Private Services Limited - Hybrid",
      subtitle: "Software Engineer (May 2025 - Present)",
      badge: ["Fullstack", "React Native", "AI Integration"],
      desc: "",
      projects: [
        {
          name: "Massage Booking Platform (Canada-Based Client Project)",
          points: [
            "Architected and developed a full-stack booking platform from scratch, engineering a scalable PostgreSQL database schema with optimized relationships, indexing, and query performance tuning.",
            "Integrated Stripe Connect payments, introducing a secure 'Save Now, Pay Later' execution model with robust webhook handling and strict transaction state management.",
            "Engineered a partner onboarding pipeline and comprehensive admin dashboard, empowering business partners and schedulers to monitor real-time payment states (completed, pending, and cancelled).",
            "Implemented robust, time zone-safe scheduling mechanics to guarantee scheduling consistency across frontend, backend, and PostgreSQL database layers.",
            "Designed event-driven backend scheduling logic for real-time booking validation, conflict detection, and rescheduling, integrated with automated Gmail and Twilio services to deliver booking confirmations and secure OTP verifications.",
          ],
        },
        {
          name: "CyanDigipay",
          points: [
            "Developed the core client-facing mobile application using React Native(Expo), delivering a smooth, high-performance cross-platform user experience.",
            "Refactored the PHP backend server, debugging system issues, optimizing data queries, and resolving critical payment integration bottlenecks.",
            "Implemented an FAQ-based Retrieval-Augmented Generation (RAG) chatbot for the partner dashboard, enabling instant and accurate retrieval of platform support information.",
          ],
        },
      ],
    },
    {
      type: "work",
      icon: <Briefcase size={16} />,
      title: "Champhunt Inc (Techstars '24) - Remote",
      subtitle: "MERN Stack Developer (May 2024 - May 2025)",
      badge: ["React.js", "AWS", "Redis"],
      desc: "Led the architectural transition to microservices and developed real-time user-facing features, significantly driving up platform performance, scalability, and engagement.",
      points: [
        "Engineered an interactive, real-time peer-to-peer chat system using Socket.io and restructured MongoDB nested schemas, boosting user engagement metrics by 10x.",
        "Reduced Customer Acquisition Cost (CAC) by 71% through comprehensive performance tuning, asset delivery optimization, and strategic code refactoring.",
        "Architected scalable microservices using AWS (EC2, S3, SQS) to decouple core system components and enhance platform availability during peak traffic.",
        "Built dynamic, responsive user interfaces with React.js and React Context API, minimizing API overuse and redundant component updates.",
        "Partnered with marketing team to design real-time data dashboards, converting raw user event logs into intuitive metrics for data-driven decision-making.",
      ],
    },
    {
      type: "work",
      icon: <Briefcase size={16} />,
      title: "Homeosetu - Remote",
      subtitle: "Fullstack developer (Nov 2023 - April 2024)",
      badge: ["Next.js"],
      desc: "",
      points: [
        "Integrated Razorpay payment gateway and set up automated invoicing and billing for users.",
        "Built new features including contact/survey forms, a coupon code system, and multi-currency payments for international purchases.",
        "Maintained the website, resolved bugs, structured data for homeopathic remedy data, and implemented SEO to improve site visibility",
        "Optimized component rendering for large datasets using React Virtuoso to prevent browser crashes and ensure mobile responsiveness.",
      ],
    },
  ];

  return (
    <main className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden bg-grid-pattern transition-colors duration-500 bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text">
      {/* Decorative Radial Grid */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Experience Timeline Section */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold tracking-tight mb-8 text-center md:text-left">
            Professional Experience
          </h2>

          <div className="relative space-y-10 pb-4 pl-4">
            {/* Vertical timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 pointer-events-none" />

            {timelineItems.map((item, i) => (
              <div key={i} className="relative w-full group">
                {/* Glowing Node Icon */}
                <div className="absolute left-0 -translate-x-1/2 top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 z-10 border-indigo-500 bg-slate-50 dark:bg-slate-900 text-indigo-500 group-hover:scale-110 shadow-sm shadow-indigo-500/10">
                  {item.icon}
                </div>

                {/* Card Content */}
                <div className="w-full pl-10">
                  <div className="glass-panel rounded-3xl p-6 md:p-8 transition-all duration-300 border border-slate-200/50 dark:border-white/[0.04] hover:border-indigo-500/30 dark:hover:border-indigo-400/20 hover:shadow-indigo-glow/5">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold tracking-wider mt-0.5">
                          {item.subtitle}
                        </p>
                      </div>

                      {item.badge && (
                        <div className="flex flex-wrap gap-1.5">
                          {item.badge.map((badge, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 dark:bg-indigo-400/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>

                    {item.projects ? (
                      <div className="mt-6 space-y-6">
                        {item.projects.map((proj, pIdx) => (
                          <div
                            key={pIdx}
                            className="border-t border-slate-100 dark:border-slate-800/40 pt-4 first:border-t-0 first:pt-0"
                          >
                            <div className="flex flex-wrap justify-between items-center gap-2 mb-3">
                              <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                                {proj.name}
                              </h4>
                            </div>
                            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                              {proj.points.map((point, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2.5"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 mt-2 shrink-0 shadow-sm shadow-blue-500/50" />
                                  <span
                                    className="leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: point }}
                                  />
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      item.points &&
                      item.points.length > 0 && (
                        <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                          {item.points.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 mt-2 shrink-0 shadow-sm shadow-blue-500/50" />
                              <span
                                className="leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: point }}
                              />
                            </li>
                          ))}
                        </ul>
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Card Section */}
        <motion.div
          className="mt-24 text-center glass-panel rounded-3xl p-10 md:p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 left-0 w-24 h-24 bg-blue-500/10 dark:bg-blue-500/5 blur-2xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-purple-500/10 dark:bg-purple-500/5 blur-2xl rounded-full" />

          <h3 className="text-2xl font-bold mb-3 tracking-tight">
            Let’s Collaborate
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
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
        </motion.div>
      </div>
    </main>
  );
};

export default Experience;
