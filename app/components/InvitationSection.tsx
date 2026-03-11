"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Download, MessageCircle, Send, Sparkles, RotateCcw } from "lucide-react";

export default function InvitationSection() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) setSubmitted(true);
  };

  const handleDownload = async () => {
    if (!cardRef.current) return;
    try {
      const html2canvas = (await import("html2canvas")).default;
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: "#0B1727",
        scale: 3,
        useCORS: true,
        allowTaint: true,
        logging: false,
      });
      const link = document.createElement("a");
      link.download = `دعوة-${name.trim()}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (e) {
      console.error("Card error", e);
    }
  };

  const handleWhatsapp = () => {
    const text = encodeURIComponent(
      `✝️ يوم فريق البابا شنوده\n\n${name} بيدعوك تيجي معاه! ✨\n\nاجتماع مار يوحنا الحبيب\nالخميس — الساعة ٦ مساءً ⛪\nكنيسة العذراء والشهيد أبانوب\n\nمتتأخرش! 🏃‍♂️`
    );
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  const reset = () => { setSubmitted(false); setName(""); };

  return (
    <section className="relative px-5 py-20 overflow-hidden bg-[#0B1727]">
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-[#C5A059]/8 rounded-full blur-[150px]" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 space-y-4"
      >
        <div className="inline-flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-[#C5A059]" />
          <span className="text-[#C5A059] text-xs font-bold uppercase tracking-[0.3em]">الدعوة الرسمية</span>
          <Sparkles className="w-4 h-4 text-[#C5A059]" />
        </div>
        <h2 className="text-3xl md:text-4xl font-[900] text-white leading-tight">
          لأنك شخص{" "}
          <span
            style={{
              background: "linear-gradient(90deg,#8B6B38,#E8D2A1,#C5A059)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "gold-shimmer 4s linear infinite",
            }}
          >
            عزيز علينا..
          </span>
        </h2>
        <p className="text-white/45 text-base md:text-lg font-medium max-w-sm mx-auto leading-relaxed">
          اكتب اسمك وهنعمللك كارت دعوة شخصي تقدر تشاركه مع أصحابك.
        </p>
      </motion.div>

      <AnimatePresence mode="wait">
        {!submitted ? (
          /* ── Name Input Form ── */
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="max-w-md mx-auto space-y-4"
          >
            <div className="relative">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="اكتب اسمك هنا..."
                dir="rtl"
                className="w-full px-6 py-5 rounded-2xl text-right text-white text-lg font-bold outline-none transition-all placeholder-white/20"
                style={{
                  background: "rgba(16,33,56,0.7)",
                  border: "1px solid rgba(197,160,89,0.25)",
                }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(197,160,89,0.7)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(197,160,89,0.25)")}
              />
              <Sparkles className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C5A059]/30 pointer-events-none" />
            </div>
            <button
              type="submit"
              disabled={!name.trim()}
              className="w-full py-5 rounded-2xl font-[900] text-lg text-[#0B1727] transition-all active:scale-[0.98] disabled:opacity-30 shadow-xl shadow-[#C5A059]/20"
              style={{ background: "linear-gradient(135deg,#C5A059,#E8D2A1)" }}
            >
              اعمللي الكارت ✨
            </button>
          </motion.form>
        ) : (
          /* ── Invitation Card ── */
          <motion.div
            key="card"
            initial={{ opacity: 0, scale: 0.93, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-sm mx-auto flex flex-col items-center gap-5"
          >
            {/* The Card */}
            <div
              id="invite-card"
              ref={cardRef}
              className="w-full rounded-[2rem] overflow-hidden"
              style={{
                background: "linear-gradient(155deg,#C5A059 0%,#8B6B38 40%,#C5A059 100%)",
                padding: 2,
              }}
            >
              <div
                className="bg-[#0B1727] rounded-[1.85rem] px-8 py-10 flex flex-col items-center text-center relative overflow-hidden"
              >
                {/* Decorative cross watermark */}
                <div
                  className="absolute top-3 right-4 text-[8rem] font-black leading-none text-white/5 select-none pointer-events-none"
                  style={{ rotate: "25deg" }}
                >
                  †
                </div>

                {/* Logo */}
                <div
                  className="relative mb-5 rounded-full overflow-hidden"
                  style={{
                    width: 80,
                    height: 80,
                    border: "2px solid rgba(197,160,89,0.5)",
                    boxShadow: "0 0 20px rgba(197,160,89,0.2)",
                  }}
                >
                  <Image src="/logo.png" alt="Logo" fill className="object-cover" />
                </div>

                {/* Blessed intro */}
                <p className="text-[#E8D2A1] text-[11px] font-bold uppercase tracking-[0.4em] mb-1">
                  بسم الآب والابن والروح القدس
                </p>
                <div className="w-10 h-px bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mb-6" />

                {/* Invitation body */}
                <p className="text-white/60 text-sm font-semibold mb-1">نتشرف بدعوة</p>
                <h3
                  className="text-[2.2rem] font-[900] mb-6 leading-tight"
                  style={{
                    background: "linear-gradient(90deg,#8B6B38,#E8D2A1,#C5A059)",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    animation: "gold-shimmer 4s linear infinite",
                  }}
                >
                  {name}
                </h3>

                <p className="text-white/80 text-sm font-bold leading-relaxed mb-1">
                  لحضور اليوم الروحاني المميز
                </p>
                <p className="text-white text-xl font-[900] mb-1">يوم فريق البابا شنوده</p>
                <p className="text-[#C5A059] text-sm font-black mb-8">اجتماع مار يوحنا الحبيب</p>

                {/* Event details strip */}
                <div
                  className="w-full rounded-2xl px-6 py-5 grid grid-cols-3 divide-x divide-x-reverse divide-white/10 text-center"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div className="px-2">
                    <p className="text-white/35 text-[10px] font-bold uppercase mb-1">اليوم</p>
                    <p className="text-[#E8D2A1] text-sm font-black">الخميس</p>
                  </div>
                  <div className="px-2">
                    <p className="text-white/35 text-[10px] font-bold uppercase mb-1">التوقيت</p>
                    <p className="text-[#E8D2A1] text-sm font-black">٦ مساءً</p>
                  </div>
                  <div className="px-2">
                    <p className="text-white/35 text-[10px] font-bold uppercase mb-1">المكان</p>
                    <p className="text-white text-[11px] font-black">كنيسة العذراء</p>
                  </div>
                </div>

                <p className="mt-6 text-[10px] text-white/20 font-medium italic">
                  بمحبة كبيرة — فريق البابا شنوده 🙏
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="w-full space-y-3">
              <button
                onClick={handleDownload}
                className="w-full py-4 rounded-2xl font-black text-base bg-white text-[#0B1727] flex items-center justify-center gap-3 active:scale-95 transition-all shadow-xl"
              >
                <Download className="w-5 h-5" /> حمّل كارت الدعوة
              </button>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleWhatsapp}
                  className="py-4 rounded-2xl font-black text-sm bg-[#25D366] text-white flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" /> شارك واتساب
                </button>
                <button
                  onClick={reset}
                  className="py-4 rounded-2xl font-bold text-sm text-white flex items-center justify-center gap-2 active:scale-95 transition-all"
                  style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.10)" }}
                >
                  <RotateCcw className="w-4 h-4" /> كارت جديد
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
