import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CardStack from './components/CardStack';
import { Shield, Zap, Globe, Cpu, LayoutGrid, Layers, ArrowUpRight, Check, Repeat, Send, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BentoGrid = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1240px] mx-auto px-6">
        <h2 className="text-6xl font-black tracking-tighter text-center mb-20 leading-tight">
          Explore Bitcoin in a <br /> <span className="text-textMuted">whole new way.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[360px]">
          {/* Easy - Tall */}
          <div className="lg:row-span-2 bg-[#FBFBFC] rounded-[40px] p-10 flex flex-col justify-between border border-black/[0.03] relative overflow-hidden group">
            <div className="bg-black rounded-[32px] p-4 space-y-2 shadow-2xl z-10 transition-transform duration-700 group-hover:scale-[1.02]">
              {[
                { label: "Send", sub: "Send tokens or collectibles to any address or ENS username.", color: "#007AFF", icon: <Send size={20} className="text-white" /> },
                { label: "Swap", sub: "Swap your tokens without ever leaving your wallet.", color: "#8E8E93", icon: <Repeat size={20} className="text-white" /> },
                { label: "Receive", sub: "Receive Bitcoin based assets through your unique address.", color: "#34C759", icon: <ArrowRight size={20} className="text-white rotate-90" /> },
                { label: "Purchase", sub: "Purchase crypto instantly through your bank account.", color: "#FF2D55", tag: "ID Required", icon: <span className="text-white font-bold">$</span> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: item.color }}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-bold text-lg">{item.label}</span>
                      {item.tag && <span className="px-2 py-0.5 bg-white/10 text-white/50 text-[9px] font-black rounded-full uppercase tracking-wider">{item.tag}</span>}
                    </div>
                    <p className="text-white/40 text-xs leading-tight mt-1">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative z-10">
              <h3 className="text-4xl font-black tracking-tighter mb-4">Easy</h3>
              <p className="text-xl text-textMuted font-medium leading-tight">Whether you're a beginner or seasoned pro, Bey makes it easy.</p>
            </div>
          </div>

          {/* Secure */}
          <div className="bg-[#FBFBFC] rounded-[40px] p-10 flex flex-col justify-between border border-black/[0.03] group overflow-hidden">
            <div className="flex-1 flex items-center justify-center">
              <div className="bg-[#00D67D] text-white px-8 py-4 rounded-full font-black text-xl flex items-center gap-3 shadow-[0_12px_40px_rgba(0,214,125,0.3)] transition-transform duration-500 group-hover:scale-110">
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
                  <Check size={16} className="text-[#00D67D]" strokeWidth={4} />
                </div>
                Backing Up
              </div>
            </div>
            <div>
              <h3 className="text-4xl font-black tracking-tighter mb-4">Secure</h3>
              <p className="text-xl text-textMuted font-medium leading-tight">Your crypto, your control. <br /> Security at every stage.</p>
            </div>
          </div>

          {/* Fast */}
          <div className="bg-[#FBFBFC] rounded-[40px] p-10 flex flex-col justify-between border border-black/[0.03] group overflow-hidden">
            <div className="flex-1 flex flex-col justify-center space-y-6 pt-4">
              {[
                { label: "Submitted", date: "Jan 28 2026 · 14:42", done: true },
                { label: "Pending", done: true },
                { label: "Completed", date: "Jan 28 2026 · 14:48", done: false }
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-6 relative">
                  {i < 2 && <div className="absolute left-[11.5px] top-6 w-[2px] h-6 bg-blue-500"></div>}
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center z-10 ${step.done ? 'bg-blue-500 border-blue-500' : 'bg-white border-blue-500'}`}>
                    {step.done && <Check size={12} className="text-white" strokeWidth={4} />}
                  </div>
                  <div className="flex-1 flex justify-between items-center">
                    <span className={`text-lg font-black ${step.done ? 'text-blue-500' : 'text-blue-500/50'}`}>{step.label}</span>
                    {step.date && <span className="text-[10px] text-textMuted font-bold uppercase tracking-wider">{step.date}</span>}
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-4xl font-black tracking-tighter mb-4">Fast</h3>
              <p className="text-xl text-textMuted font-medium leading-tight">Uncompromising speed. <br /> Optimal performance.</p>
            </div>
          </div>

          {/* Powerful */}
          <div className="bg-[#FBFBFC] rounded-[40px] p-10 flex flex-col justify-between border border-black/[0.03] group overflow-hidden">
            <div className="flex-1 flex items-center justify-center">
              <div className="bg-white p-10 rounded-[40px] shadow-2xl border border-black/5 flex items-center gap-12 transition-transform duration-700 group-hover:scale-105">
                <div className="text-left">
                  <h4 className="text-5xl font-black tracking-tighter mb-1">Urgent</h4>
                  <p className="text-textMuted font-black text-xl">~ 15 Secs</p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500"></div>
                  <div className="w-5 h-5 rounded-full bg-[#FF9500] flex items-center justify-center">
                    <Zap size={10} className="text-white fill-white" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-4xl font-black tracking-tighter mb-4">Powerful</h3>
              <p className="text-xl text-textMuted font-medium leading-tight">Experience the full power of Bitcoin <br /> with advanced features.</p>
            </div>
          </div>

          {/* Fun */}
          <div className="bg-[#FBFBFC] rounded-[40px] p-10 flex flex-col justify-between border border-black/[0.03] group overflow-hidden">
            <div className="flex-1 flex items-center justify-center gap-4">
              {[
                { color: '#FF3B30', icon: <Globe size={36} className="text-white" /> },
                { color: '#FFCC00', icon: <Cpu size={36} className="text-white" /> },
                { color: '#FF9500', icon: <LayoutGrid size={36} className="text-white" /> }
              ].map((c, i) => (
                <div key={i} className="w-28 h-28 rounded-full flex items-center justify-center flex-shrink-0 shadow-2xl border-4 border-white transition-transform duration-700 group-hover:rotate-6 group-hover:scale-110" style={{ backgroundColor: c.color }}>
                  {c.icon}
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-4xl font-black tracking-tighter mb-4">Fun</h3>
              <p className="text-xl text-textMuted font-medium leading-tight">Bey takes fun seriously. <br /> Delightful interactions every tap.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [open, setOpen] = React.useState(null);
  const items = [
    { q: "Is Bey safe?", a: "Bey is self-custodial and has been audited by leading security firms. Your keys never leave your device, ensuring complete control over your financial freedom." },
    { q: "How do I back up my wallet?", a: "You're provided with a 12-word recovery phrase during setup. Keep it safe, offline, and never share it—it's the master key to your Bitcoin." },
    { q: "Can I use it on Android?", a: "We're currently focusing on perfecting the iOS experience to meet our high design standards. Android is in active development." }
  ];

  return (
    <section className="py-40 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-6xl font-bold tracking-tighter mb-20 text-center">Frequently Asked <br /><span className="text-textMuted">Questions.</span></h2>
        <div className="space-y-6">
          {items.map((item, i) => (
            <div key={i} className={`rounded-[32px] transition-all duration-500 ${open === i ? 'bg-[#FBFBFC] p-10 border border-black/5' : 'bg-transparent py-6 border-b border-border'}`}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center text-left group"
              >
                <span className="text-2xl font-bold tracking-tight group-hover:text-accent transition-colors">{item.q}</span>
                <motion.div
                  animate={{ rotate: open === i ? 45 : 0 }}
                  className={`transition-colors ${open === i ? 'text-textMain' : 'text-textMuted'}`}
                >
                  <ArrowUpRight size={28} />
                </motion.div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pt-8 text-xl text-textMuted font-medium leading-relaxed max-w-2xl">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WallOfLove = () => {
  const testimonials = [
    { name: "Design Enthusiast", handle: "@design_fan", text: "The smoothest crypto wallet I've ever used. The attention to detail is insane! 🚀" },
    { name: "Crypto Pro", handle: "@cryptopro", text: "Family-co is the gold standard for web3 design. Bey brings that to Bitcoin. Simply incredible." },
    { name: "Web3 Developer", handle: "@dev_builds", text: "Finally, a wallet that feels like it belongs in 2026. The scrollytelling is next level." },
    { name: "Minimalist", handle: "@minimal_vibe", text: "Less is more. Bey captures the essence of Bitcoin with unparalleled elegance." }
  ];

  return (
    <section className="py-32 overflow-hidden bg-bg">
      <div className="max-w-[1400px] mx-auto px-6 mb-16">
        <h2 className="text-5xl font-bold tracking-tighter">Loved by the community.</h2>
      </div>
      <div className="flex gap-6 animate-marquee whitespace-nowrap">
        {[...testimonials, ...testimonials].map((t, i) => (
          <div key={i} className="inline-block bg-white p-8 rounded-3xl border border-border min-w-[400px] whitespace-normal">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-100"></div>
              <div>
                <div className="font-bold text-textMain">{t.name}</div>
                <div className="text-sm text-textMuted">{t.handle}</div>
              </div>
            </div>
            <p className="text-lg text-textMain font-medium leading-relaxed">{t.text}</p>
          </div>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}} />
    </section>
  );
};

const SecuritySection = () => {
  return (
    <section className="py-40 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="relative bg-[#FBFBFC] rounded-[60px] p-16 md:p-32 border border-black/[0.03] overflow-hidden group">

          {/* Background Decorative Element */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400 rounded-full blur-[160px] mix-blend-multiply"></div>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-3 bg-blue-50 px-6 py-2.5 rounded-full text-blue-600 font-bold text-sm mb-12 shadow-sm border border-blue-100">
                <Shield size={18} fill="currentColor" className="opacity-20" />
                Trusted by 500k+ users
              </div>

              <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-[#1D1D1F] mb-10 leading-[0.9]">
                Your security <br /> <span className="text-blue-600">is our priority.</span>
              </h2>

              <p className="text-2xl text-[#86868B] font-medium leading-relaxed max-w-xl mb-16">
                Audited by industry-leading firms. Bey is self-custodial, meaning you are in complete control of your funds at all times.
              </p>

              <div className="flex flex-wrap gap-6">
                <button className="bg-[#1D1D1F] text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl">
                  Read Audit Report
                </button>
                <div className="flex items-center gap-4 px-8 py-5 rounded-full bg-white border border-black/5 font-bold text-lg text-textMuted">
                  Audited by <span className="text-black font-black italic">Zellic</span>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              {/* 3D Looking Security Visual */}
              <div className="relative w-80 h-96 bg-white rounded-[50px] shadow-[0_50px_100px_rgba(0,0,0,0.08)] border border-black/5 flex flex-col p-10 transform -rotate-6 group-hover:rotate-0 transition-transform duration-1000">
                <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center mb-10 shadow-xl shadow-blue-500/30">
                  <Shield className="text-white" size={32} />
                </div>
                <div className="space-y-6">
                  <div className="h-4 w-full bg-[#F5F5F7] rounded-full"></div>
                  <div className="h-4 w-3/4 bg-[#F5F5F7] rounded-full"></div>
                  <div className="h-4 w-5/6 bg-[#F5F5F7] rounded-full"></div>
                </div>
                <div className="mt-auto pt-10 border-t border-black/5">
                  <div className="flex justify-between items-center text-blue-600 font-black tracking-tighter text-2xl">
                    SECURE
                    <Check size={24} strokeWidth={4} />
                  </div>
                </div>
              </div>

              {/* Overlapping elements for depth */}
              <div className="absolute -bottom-10 right-20 w-64 h-64 bg-white rounded-[40px] shadow-[0_40px_80px_rgba(0,0,0,0.06)] border border-black/5 p-8 transform rotate-12 group-hover:rotate-6 transition-transform duration-1000 hidden xl:block">
                <div className="text-textMuted font-bold text-[10px] uppercase tracking-[0.2em] mb-4">Encryption</div>
                <div className="text-3xl font-black text-black tracking-tighter leading-tight">End-to-end <br /> Protected</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1.1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen bg-bg text-textMain selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <BentoGrid />
        <CardStack />
        <SecuritySection />
        <WallOfLove />
        <FAQ />
      </main>

      <footer className="pt-40 pb-20 text-center overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 mb-20 grid grid-cols-2 md:grid-cols-4 text-left gap-12">
          <div>
            <h5 className="font-bold mb-6">Developers</h5>
            <ul className="space-y-4 text-textMuted font-medium">
              <li><a href="#" className="hover:text-textMain">Documentation</a></li>
              <li><a href="#" className="hover:text-textMain">ConnectKit</a></li>
              <li><a href="#" className="hover:text-textMain">GitHub</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6">Resources</h5>
            <ul className="space-y-4 text-textMuted font-medium">
              <li><a href="#" className="hover:text-textMain">Audit Report</a></li>
              <li><a href="#" className="hover:text-textMain">Changelog</a></li>
              <li><a href="#" className="hover:text-textMain">Press Kit</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6">Company</h5>
            <ul className="space-y-4 text-textMuted font-medium">
              <li><a href="#" className="hover:text-textMain">About</a></li>
              <li><a href="#" className="hover:text-textMain">Twitter</a></li>
              <li><a href="#" className="hover:text-textMain">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6">Download</h5>
            <div className="w-24 h-24 bg-white rounded-2xl border border-border p-3">
              <div className="w-full h-full border-2 border-black rounded-lg"></div>
            </div>
          </div>
        </div>
        <h1 className="text-[25vw] font-black text-[#E8E8ED] leading-none select-none tracking-tighter mt-20">BEY</h1>
      </footer>
    </div>
  );
}

export default App;
