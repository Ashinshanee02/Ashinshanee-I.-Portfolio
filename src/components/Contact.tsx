import { motion } from "motion/react";
import { Mail, Phone, Send, ArrowRight, Sparkles, MessageSquare } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const form = useRef();
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setSending(true);

    emailjs
      .sendForm(
        "service_acod5r5",
        "template_7kwio3d",
        form.current,
        "jQpcxpaoQrPM0UzL2"
      )
      .then(
        () => {
          setSending(false);
          setSuccess(true);
          form.current.reset();

          setTimeout(() => {
            setSuccess(false);
          }, 4000);
        },
        (error) => {
          setSending(false);
          console.log(error);
          alert("Failed to send message! Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-32 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 relative overflow-hidden"
    >

      {/* Glass Background */}
      <div className="absolute inset-0 bg-zinc-100/30 dark:bg-zinc-950/30 backdrop-blur-3xl z-0" />

      {/* Ambient Orbs */}
      <div className="absolute top-0 left-1/2 w-full max-w-3xl h-125 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0" />
      <div className="absolute bottom-0 right-0 w-112.5 h-112.5 bg-purple-500/10 rounded-full blur-[150px] pointer-events-none translate-x-1/3 translate-y-1/3 z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center flex flex-col items-center"
        >

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 mb-6 backdrop-blur-md">
            <Sparkles size={16} />
            <span className="text-sm font-medium tracking-wide uppercase">
              Collaboration
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 text-zinc-950 dark:text-white">
            Let's Build
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-500 ml-3">
              Something Great
            </span>
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl">
            I'm always excited to collaborate on meaningful products,
            innovative ideas, and new opportunities in product management
            and technology.
          </p>

        </motion.div>


        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Contact Cards */}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >

            {/* Email */}

            <motion.a
              href="mailto:ashinshaneeindrachapa02@gmail.com"
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative flex flex-col gap-4 p-8 rounded-[2.5rem] bg-white/60 dark:bg-zinc-900/60 backdrop-blur-2xl border border-zinc-200/50 dark:border-white/10 hover:border-indigo-500/50 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] transition-all duration-500 overflow-hidden"
            >

              <div className="absolute inset-0 bg-linear-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-center gap-6 relative z-10">

                <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
                  <Mail size={28} />
                </div>

                <div>

                  <h3 className="text-sm font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                    Email
                  </h3>

                  <p className="text-lg md:text-xl font-bold text-zinc-950 dark:text-white break-all">
                    ashinshaneeindrachapa02@gmail.com
                  </p>

                </div>

              </div>

            </motion.a>


            {/* Phone */}

            <motion.a
              href="tel:+94764687798"
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative flex flex-col gap-4 p-8 rounded-[2.5rem] bg-white/60 dark:bg-zinc-900/60 backdrop-blur-2xl border border-zinc-200/50 dark:border-white/10 hover:border-emerald-500/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] transition-all duration-500 overflow-hidden"
            >

              <div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-center gap-6 relative z-10">

                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
                  <Phone size={28} />
                </div>

                <div>

                  <h3 className="text-sm font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                    Phone
                  </h3>

                  <p className="text-lg md:text-xl font-bold text-zinc-950 dark:text-white">
                    +94 76 468 7798
                  </p>

                </div>

              </div>

            </motion.a>

          </motion.div>


          {/* Contact Form */}

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6 p-8 md:p-12 rounded-[2.5rem] bg-white/60 dark:bg-zinc-900/60 backdrop-blur-2xl border border-zinc-200/50 dark:border-white/10 relative overflow-hidden hover:border-indigo-500/30 transition-colors duration-500"
          >

            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="text-indigo-500" size={24} />
              <h3 className="text-2xl font-display font-bold text-zinc-950 dark:text-white">
                Send a Message
              </h3>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="px-6 py-4 rounded-2xl bg-white/80 dark:bg-zinc-950/50 border border-zinc-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                required
                className="px-6 py-4 rounded-2xl bg-white/80 dark:bg-zinc-950/50 border border-zinc-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />

            </div>

            <textarea
              name="message"
              rows={5}
              placeholder="Tell me about your project, idea, or opportunity..."
              required
              className="px-6 py-4 rounded-2xl bg-white/80 dark:bg-zinc-950/50 border border-zinc-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 resize-none"
            />


            {success && (
              <div className="text-emerald-500 font-medium text-center">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}


            <button
              type="submit"
              disabled={sending}
              className="mt-4 w-full py-5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-bold text-lg rounded-2xl hover:bg-indigo-600 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-70"
            >

              <Send size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"/>

              {sending ? "Sending..." : "Send Message"}

              <ArrowRight
                size={20}
                className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
              />

            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}