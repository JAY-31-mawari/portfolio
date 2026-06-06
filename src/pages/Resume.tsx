import React from "react";
import { Phone, CalendarRangeIcon } from "lucide-react";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { FaLink } from "react-icons/fa";

interface SubProject {
  role: string;
  project: string;
  period: string;
  bullets: string[];
}

interface Job {
  role?: string;
  company: string;
  period: string;
  bullets?: string[];
  subProjects?: SubProject[];
}

interface Education {
  institution: string;
  degree: string;
  period: string;
  bullets: string[];
}

interface SkillCategory {
  category: string;
  list: string[];
}

interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    portfolio: string;
  };
  summary: string;
  skills: SkillCategory[];
  experience: Job[];
  education: Education;
  certifications: string[];
}

const resumeData: ResumeData = {
  personalInfo: {
    name: "Jay Mawari",
    title: "Software Engineer",
    email: "jaymawari04@gmail.com",
    phone: "+91 9324150165",
    github: "https://github.com/JAY-31-mawari/",
    linkedin: "https://www.linkedin.com/in/jay-mawari-499570221/",
    portfolio: "https://jaymawari.onrender.com/",
  },
  summary:
    "Results-driven Software Engineer with 2.5+ years of experience specializing in full-stack development, cloud architecture, and AI integration. Proven track record of optimizing system performance, building scalable database schemas, and developing real-time applications. Adept at collaborating in fast-paced startup environments to deliver high-quality, impactful software solutions.",
  skills: [
    {
      category: "Frameworks",
      list: [
        "React.js",
        "Next.js",
        "React Native",
        "Node.js",
        "Express.js",
        "Expo",
      ],
    },
    {
      category: "Backend",
      list: ["JavaScript", "Python", "TypeScript"],
    },
    {
      category: "Database",
      list: ["PostgreSQL", "MongoDB", "Redis"],
    },
    {
      category: "Cloud and AI",
      list: [
        "AWS (EC2, S3, SQS)",
        "GIT",
        "Retrieval-Augmented Generation(RAG)",
        "Firebase",
      ],
    },
  ],
  experience: [
    {
      role: "Software Engineer - Hybrid",
      company: "Gladtech Private Services Limited",
      period: "May 2025 - Present",
      subProjects: [
        {
          role: "Software Engineer",
          project: "Massage Booking Marketplace Platform - Canada",
          period: "May 2025 - Present",
          bullets: [
            "Architected and developed a full-stack booking platform from scratch, engineering a scalable PostgreSQL database schema with optimized relationships, indexing, and query performance tuning.",
            "Integrated Stripe Connect payments, introducing a secure 'Save Now, Pay Later' execution model with robust webhook handling and strict transaction state management.",
            "Engineered a partner onboarding pipeline and comprehensive admin dashboard, empowering business partners and schedulers to monitor real-time payment states (completed, pending, and cancelled).",
            "Implemented robust, time zone-safe scheduling mechanics to guarantee scheduling consistency across frontend, backend, and PostgreSQL database layers.",
            "Designed event-driven backend scheduling logic for real-time booking validation, conflict detection, and rescheduling, integrated with automated Gmail and Twilio services to deliver booking confirmations and secure OTP verifications.",
          ],
        },
        {
          role: "Full-Stack AI Engineer / Project Developer",
          project: "CyanDigipay",
          period: "Project-Based",
          bullets: [
            "Developed the core client-facing mobile application using React Native(Expo), delivering a smooth, high-performance cross-platform user experience.",
            "Refactored the PHP backend server, debugging system issues, optimizing data queries, and resolving critical payment integration bottlenecks.",
            "Implemented an FAQ-based Retrieval-Augmented Generation (RAG) chatbot for the partner dashboard, enabling instant and accurate retrieval of platform support information.",
          ],
        },
      ],
    },
    {
      role: "MERN Stack developer - Remote",
      company: "Champhunt Inc (Techstars '24)",
      period: "May 2024 - May 2025",
      bullets: [
        "Engineered an interactive, real-time peer-to-peer chat system using Socket.io and restructured MongoDB nested schemas, boosting user engagement metrics by 10x.",
        "Reduced Customer Acquisition Cost (CAC) by 71% through comprehensive performance tuning, asset delivery optimization, and strategic code refactoring.",
        "Architected scalable microservices using AWS (EC2, S3, SQS) to decouple core system components and enhance platform availability during peak traffic.",
        "Built dynamic, responsive user interfaces with React.js and React Context API, minimizing API overuse and redundant component updates.",
        "Partnered with marketing team to design real-time data dashboards, converting raw user event logs into intuitive metrics for data-driven decision-making.",
      ],
    },
    {
      role: "Fullstack developer - Remote",
      company: "Homeosetu",
      period: "Nov 2023 - April 2024",
      bullets: [
        "Integrated Razorpay payment gateway and set up automated invoicing and billing for users.",
        "Built new features including contact/survey forms, a coupon code system, and multi-currency payments for international purchases.",
        "Maintained the website, resolved bugs, structured data for homeopathic remedy data, and implemented SEO to improve site visibility",
        "Optimized component rendering for large datasets using React Virtuoso to prevent browser crashes and ensure mobile responsiveness.",
      ],
    },
  ],
  education: {
    institution: "Atharva college of Engineering (Mumbai University)",
    degree: "Bachelor of Technology in Information Technology",
    period: "Aug 2019 - Aug 2023",
    bullets: ["Graduated with an overall CGPA of 8.74."],
  },
  certifications: ["Python for Everybody", "Python Data Structures"],
};

const Resume: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-slate-100 dark:bg-slate-900 py-12 px-4 transition-colors duration-300 print:bg-white print:py-0 print:px-0">
      {/* Global CSS overrides for printing */}
      <style>{`
        .resume-sheet, .resume-sheet * {
          font-family: Inter, Helvetica, Arial, sans-serif !important;
        }

        @media print {
          /* Hide navigation header and print buttons */
          header, 
          .no-print,
          nav,
          aside {
            display: none !important;
          }
          
          /* Reset page styling */
          body {
            background-color: white !important;
            color: black !important;
          }

          /* Remove margins & padding from body and wrapper */
          main {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
            background: white !important;
          }

          .resume-sheet {
            box-shadow: none !important;
            border: none !important;
            padding: 0 !important;
            margin: 0 !important;
            max-width: 100% !important;
            width: 100% !important;
            min-height: auto !important;
            background: white !important;
            color: black !important;
          }
          
          /* Prevent page-breaks inside sections */
          .section-block {
            break-inside: avoid;
          }
        }
      `}</style>

      {/* Control Bar */}
      <div className="max-w-4xl mx-auto mb-6 flex justify-between items-center no-print pt-20">
        <h1 className="text-xl font-bold text-slate-800 dark:text-white">
          Print-Ready Resume
        </h1>
        <button
          onClick={handlePrint}
          className="px-6 py-2.5 bg-[#0F52BA] hover:bg-[#0c4296] text-white rounded-full font-semibold transition-all shadow-md active:scale-95 inline-flex items-center gap-2 text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
            <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
          </svg>
          Print / Save as PDF
        </button>
      </div>

      {/* Printable Sheet */}
      <div className="resume-sheet max-w-4xl mx-auto p-14 bg-white text-[#212529] border border-slate-200 shadow-xl rounded-xl min-h-[1100px] transition-all duration-300 font-sans print:shadow-none print:border-none print:rounded-none">
        {/* HEADER SECTION */}
        <div className="flex justify-between items-start pb-4">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-[40px] font-bold tracking-tight text-[#212529] leading-tight">
                {resumeData.personalInfo.name}
              </h2>
            </div>
            <div className="text-xl font-bold text-[#0F52BA] uppercase tracking-wider mt-1">
              {resumeData.personalInfo.title}
            </div>
          </div>

          <div className="border-l-2 border-[#212529] pl-4 flex flex-col gap-1.5 text-[13px] text-[#212529] py-0.5">
            <div className="flex items-center gap-2">
              <SiGmail size={14} className="text-[#0F52BA]" />
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=jaymawari04@gmail.com`}
                target="_blank"
                className="hover:underline"
              >
                {resumeData.personalInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <SiLinkedin size={14} className="text-[#0F52BA]" />
              <a
                href={resumeData.personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {resumeData.personalInfo.linkedin
                  .replace("https://", "")
                  .replace("www.", "")}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <SiGithub size={14} className="text-[#0F52BA]" />
              <a
                href={resumeData.personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {resumeData.personalInfo.github
                  .replace("https://", "")
                  .replace("www.", "")}
              </a>
            </div>

            <div className="flex items-center gap-2">
              <FaLink size={12} className="text-[#0F52BA]" />
              <a
                href={resumeData.personalInfo.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                portfolio
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={14} className="text-[#0F52BA] fill-current" />
              <a
                href={`tel:${resumeData.personalInfo.phone}`}
                className="hover:underline"
              >
                {resumeData.personalInfo.phone}
              </a>
            </div>
          </div>
        </div>

        {/* SUMMARY SECTION */}
        <div className="section-block mt-2">
          <h3 className="text-base font-bold text-[#212529] uppercase border-b-[1px] border-[#212529] mb-1">
            Summary
          </h3>
          <p className="text-[14px] text-[#212529] text-justify">
            {resumeData.summary}
          </p>
        </div>

        {/* TECHNICAL SKILLS SECTION */}
        <div className="section-block mt-5">
          <h3 className="text-base font-bold text-[#212529] uppercase border-b-[1px] border-[#212529] mb-1">
            Skills
          </h3>
          <div className="flex flex-col gap-1.5 text-[14px] text-[#212529]">
            {resumeData.skills.map((skillCat, idx) => (
              <div key={idx} className="flex items-start text-justify">
                <span className="font-bold min-w-[125px] text-[#0F52BA] shrink-0">
                  {skillCat.category}:
                </span>
                <span className="flex-1 text-[#212529]">
                  {skillCat.list.join(", ")}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* PROFESSIONAL EXPERIENCE SECTION */}
        <div className="section-block mt-5">
          <h3 className="font-bold text-[#212529] uppercase border-b-[1px] border-[#212529] mb-3">
            Professional Experience
          </h3>

          {resumeData.experience.map((job, index) => (
            <div key={index} className="mb-2 section-block">
              {/* Company Header */}
              <div className="text-[#0F52BA] font-bold text-[15px] mb-0.5">
                {job.company}
              </div>

              {/* Role & Period */}
              <div className="flex justify-between items-center text-[14px] text-[#212529] mb-1.5 font-normal">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-slate-500 tracking-wide">
                    {job.role}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[#212529]/70">
                  <CalendarRangeIcon size={13} className="mr-0.5" />
                  <span>{job.period}</span>
                </div>
              </div>

              {/* Sub-projects or single job details */}
              {job.subProjects ? (
                <div className="flex flex-col mt-2 pl-5">
                  {job.subProjects.map((sub, subIdx) => (
                    <div key={subIdx} className="mb-2">
                      <div className="text-[14px] text-[#212529] font-bold mb-1 text-slate-800">
                        {sub.project}
                      </div>
                      <ul className="list-disc pl-5 text-[14px] text-[#212529] text-justify">
                        {sub.bullets.map((bullet, bulletIdx) => (
                          <li key={bulletIdx}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  {/* Bullets */}
                  <ul className="list-disc pl-10 text-[14px] text-[#212529] text-justify">
                    {job.bullets?.map((bullet, bulletIdx) => (
                      <li key={bulletIdx}>{bullet}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>

        {/* EDUCATION SECTION */}
        <div className="section-block mt-5">
          <h3 className="text-base font-bold text-[#212529] uppercase border-b-[1px] border-[#212529] mb-3">
            Education
          </h3>
          <div className="mb-2 section-block">
            {/* Degree */}
            <div className="text-[#0F52BA] font-bold text-[14px] mb-0.5">
              {resumeData.education.degree}
            </div>

            {/* Meta details */}
            <div className="flex justify-between items-center text-[13px] text-[#212529] mb-1.5 font-normal">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-[#212529]">
                  {resumeData.education.institution}
                </span>
              </div>
              <div className="flex items-center gap-1 text-[#212529]/70">
                <CalendarRangeIcon size={13} className="mr-0.5" />
                <span>{resumeData.education.period}</span>
              </div>
            </div>

            {/* Bullets */}
            <ul className="list-disc pl-5 text-[14px] text-[#212529] text-justify">
              {resumeData.education.bullets.map((bullet, bulletIdx) => (
                <li key={bulletIdx}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* CERTIFICATIONS & ACHIEVEMENTS SECTION */}
        <div className="section-block mt-5">
          <h3 className="text-base font-bold text-[#212529] uppercase border-b-[1px] border-[#212529] mb-3">
            Certifications & Achievements
          </h3>
          <ul className="list-disc pl-5 text-[14px] text-[#212529]">
            {resumeData.certifications.map((cert, index) => {
              const parts = cert.split(" — ");
              return (
                <li key={index}>
                  {parts[0]}
                  {parts[1] && ` — ${parts[1]}`}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Resume;
