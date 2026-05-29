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
            title: "Gladtech Services Limited",
            subtitle: "Software Developer (May 2025 - Present)",
            badge: ["Fullstack", "React Native", "AI Integration"],
            desc: "",
            projects: [
                {
                    name: "Massage Booking Platform (Canada-Based Client Project)",
                    points: [
                        "Architected and developed a full-stack booking platform from scratch, designing a scalable database architecture with optimized schema modeling, relationships, indexing, and performance tuning.",
                        "Integrated Stripe payments, including <strong class='font-bold text-indigo-600 dark:text-indigo-400'>'Save Now, Pay Later'</strong> secure transaction flows, webhook handling, and reliable payment state management.",
                        "Implemented robust <strong class='font-bold text-indigo-600 dark:text-indigo-400'>time zone–safe date-time handling</strong>, ensuring consistency across frontend, backend, and database layers.",
                        "Designed backend scheduling logic for booking validation, conflict detection, cancellations, and rescheduling, integrating event-driven email and SMS notifications."
                    ]
                },
                {
                    name: "CyandigiPay (Startup Product)",
                    points: [
                        "Built a real-time <strong class='font-bold text-indigo-600 dark:text-indigo-400'>voice assistant chatbot</strong>, streaming audio from frontend clients to backend Speech-to-Text models and LLMs to extract intent/entities and trigger backend workflows dynamically.",
                        "Developed a performant <strong class='font-bold text-indigo-600 dark:text-indigo-400'>React Native (Expo)</strong> mobile application, translating and adapting the web frontend into a performant cross-platform mobile experience with optimized state management."
                    ]
                }
            ]
        },
        {
            type: "work",
            icon: <Briefcase size={16} />,
            title: "Champhunt Inc",
            subtitle: "Fullstack Developer (May 2024 - May 2025)",
            badge: ["React.js", "AWS", "Redis"],
            desc: "Led the architectural transition to microservices and developed real-time user-facing features, significantly driving up platform performance, scalability, and engagement.",
            points: [
                "Developed a real-time chat feature using Socket.io and redesigned MongoDB schemas, boosting user engagement <strong class='font-bold text-indigo-600 dark:text-indigo-400'>10x</strong>.",
                "Reduced Customer Acquisition Cost by <strong class='font-bold text-indigo-600 dark:text-indigo-400'>71%</strong> through targeted performance tuning and strategic architectural refactoring.",
                "Implemented microservices architecture and integrated key AWS services (EC2, S3, SQS) to significantly enhance scalability and system availability.",
                "Built dynamic, responsive user interfaces using React.js, optimizing state management with Context API and minimizing API overhead.",
                "Partnered with marketing teams to build live data dashboards, enabling real-time metrics and data-informed business decisions.",
            ],
        },
        {
            type: "work",
            icon: <Briefcase size={16} />,
            title: "Homeosetu",
            subtitle: "Fullstack Developer (Aug 2023 - April 2024)",
            badge: ["Next.js"],
            desc: "",
            points: [
                "Implemented secure payment processing flows utilizing Razorpay alongside automated invoicing systems.",
                "Designed and built interactive AI-driven chatbot features based on custom business and client needs.",
                "Optimized backend APIs and implemented key website enhancements to improve responsiveness, uptime, and user experience.",
            ],
        },
    ];

    return (
        <main
            className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden bg-grid-pattern transition-colors duration-500 bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text"
        >
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
                    <h2 className="text-2xl font-bold tracking-tight mb-8 text-center md:text-left">Professional Experience</h2>

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
                                                        <span key={idx} className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 dark:bg-indigo-400/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
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
                                                    <div key={pIdx} className="border-t border-slate-100 dark:border-slate-800/40 pt-4 first:border-t-0 first:pt-0">
                                                        <div className="flex flex-wrap justify-between items-center gap-2 mb-3">
                                                            <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                                                                {proj.name}
                                                            </h4>
                                            
                                                        </div>
                                                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                                                            {proj.points.map((point, idx) => (
                                                                <li key={idx} className="flex items-start gap-2.5">
                                                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 mt-2 shrink-0 shadow-sm shadow-blue-500/50" />
                                                                    <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: point }} />
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            item.points && item.points.length > 0 && (
                                                <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                                                    {item.points.map((point, idx) => (
                                                        <li key={idx} className="flex items-start gap-2.5">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 mt-2 shrink-0 shadow-sm shadow-blue-500/50" />
                                                            <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: point }} />
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

                    <h3 className="text-2xl font-bold mb-3 tracking-tight">Let’s Collaborate</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
                        I’m always excited to work on new concepts and collaborate on modern products. Drop me a line!
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
