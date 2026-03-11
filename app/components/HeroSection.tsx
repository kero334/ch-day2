"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${(i * 17.3) % 100}%`,
  top: `${(i * 13.7) % 100}%`,
  size: (i % 3) + 2,
  opacity: 0.08 + (i % 4) * 0.04,
  duration: 5 + (i % 5),
  delay: (i % 8) * 0.6,
}));

export default function HeroSection() {
  const scrollDown = () =>
    document.getElementById("teaser")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden px-5 pt-16 pb-12 bg-[#0B1727]">
      {/* Background ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-15%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#C5A059]/8 blur-[130px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-[#1A3050]/50 blur-[100px]" />
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-[#C5A059]"
            style={{ width: p.size, height: p.size, left: p.left, top: p.top, opacity: p.opacity }}
            animate={{ y: [0, -35, 0], opacity: [p.opacity * 0.4, p.opacity * 1.8, p.opacity * 0.4] }}
            transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-md mx-auto gap-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Warm backglow */}
          <div className="absolute inset-[-25%] rounded-full bg-[#C5A059]/12 blur-[50px] animate-[soft-glow_4s_ease-in-out_infinite]" />

          {/* Logo ring */}
          <div
            className="relative rounded-full shadow-2xl overflow-hidden"
            style={{
              width: 200,
              height: 200,
              padding: 3,
              background: "linear-gradient(135deg, #8B6B38, #E8D2A1, #C5A059, #8B6B38)",
            }}
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-[#0B1727] relative">
              <Image
                src="/logo.png"
                alt="فريق البابا شنوده"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <div className="space-y-4 px-2">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="text-[#C5A059] text-xs font-bold uppercase tracking-[0.3em]"
          >
            اجتماع مار يوحنا الحبيب
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.9 }}
            className="text-[2.6rem] leading-tight font-[900] text-white tracking-tight"
          >
            أيوه انت..{" "}
            <span
              className="block mt-1"
              style={{
                background: "linear-gradient(90deg, #8B6B38, #E8D2A1, #C5A059, #E8D2A1, #8B6B38)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "gold-shimmer 4s linear infinite",
              }}
            >
              ده مش صدفة ✨
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-white/55 text-lg font-medium leading-relaxed max-w-xs mx-auto"
          >
            في حاجة بتحصل يوم الخميس الجاي..
            <br />
            إحنا مستنينك هناك 🙏
          </motion.p>
        </div>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.8 }}
          onClick={scrollDown}
          whileTap={{ scale: 0.96 }}
          className="px-10 py-4 rounded-2xl font-black text-base text-[#0B1727] shadow-xl shadow-[#C5A059]/25 active:scale-95 transition-all"
          style={{ background: "linear-gradient(135deg, #C5A059, #E8D2A1)" }}
        >
          ابدأ التجربة ↓
        </motion.button>

        {/* Scroll Mouse */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="flex flex-col items-center gap-2 cursor-pointer mt-4 group"
          onClick={scrollDown}
        >
          <div className="w-5 h-9 rounded-full border border-[#C5A059]/30 flex justify-center pt-1.5 overflow-hidden">
            <motion.div
              animate={{ y: [0, 18, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1.5 rounded-full bg-[#C5A059]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
