import { useState } from "react";
import { motion } from "framer-motion";

const Form = () => {

  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State to store submitted rows
  const [rows, setRows] = useState<
    { name: string; email: string; message: string }[]
  >([]);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return; // simple guard
    setRows([...rows, formData]); // add new row
    setFormData({ name: "", email: "", message: "" }); // reset form
  };

  return (
    <main
      className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden bg-grid-pattern transition-colors duration-500 bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text"
    >
      {/* Decorative Radial Grid */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
            Interactive <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent font-extrabold">Form Practice</span>
          </h1>
          <div className="h-1 w-12 rounded bg-blue-600 mt-4" />
        </div>

        {/* Form Section */}
        <motion.div
          className="glass-panel p-8 rounded-3xl max-w-lg mx-auto border border-slate-200/50 dark:border-white/[0.04]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit} className="grid gap-4 text-left">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Full Name"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/40 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-200 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="email@example.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/40 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-200 text-sm"
              />
            </div>
            
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Message Description
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/40 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all h-32 text-sm resize-none"
              />
            </div>
            
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-xl hover:scale-[1.01] active:scale-[0.99] shadow-md shadow-blue-500/10 hover:shadow-blue-500/20 transition-all text-center flex items-center justify-center gap-2 mt-2"
            >
              <span>Submit</span>
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
};

export default Form;
