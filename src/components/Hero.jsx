import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Repeat, Image as ImageIcon } from 'lucide-react';

export default function Hero() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    // ANIMATION LOGIC
    const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.35], [1, 1, 0]);
    const opacity2 = useTransform(scrollYProgress, [0.3, 0.35, 0.65, 0.7], [0, 1, 1, 0]);
    const opacity3 = useTransform(scrollYProgress, [0.65, 0.7, 1], [0, 1, 1]);

    const scalePhone = useTransform(scrollYProgress, [0, 1], [1, 1.05]); // Subtle zoom on scroll

    return (
        <div className="relative">
            {/* 1. KINETIC MESH BACKGROUND */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-400/10 rounded-full blur-[150px]"></div>
                <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-purple-400/5 rounded-full blur-[100px] animate-bounce" style={{ animationDuration: '10s' }}></div>
            </div>

            {/* 2. INTRO HEADER (Static with Reveal) */}
            <div className="relative pt-56 pb-20 text-center px-6 max-w-5xl mx-auto z-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h1 className="text-8xl md:text-[10rem] font-black tracking-tighter text-[#1D1D1F] mb-8 leading-[0.85]">
                        The Bitcoin <br /> <span className="italic">Renaissance.</span>
                    </h1>
                    <p className="text-2xl md:text-3xl text-[#86868B] font-medium tracking-tight mb-12 max-w-2xl mx-auto">
                        Experience the fastest, most beautiful wallet for the next generation of BTC.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <button className="bg-[#1D1D1F] text-white px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform duration-300 shadow-2xl shadow-black/20">
                            Get Bey for iOS
                        </button>
                        <div className="flex items-center gap-2 text-[#86868B] font-bold">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            V2.0 Now Live
                        </div>
                    </div>
                </motion.div>

                {/* Floating Tokens (Kinetic Elements) */}
                <div className="absolute inset-0 pointer-events-none -z-10">
                    {[
                        { label: '₿', x: '15%', y: '20%', r: 15, s: 1.2 },
                        { label: '★', x: '80%', y: '30%', r: -10, s: 0.8 },
                        { label: '✦', x: '10%', y: '60%', r: 25, s: 1.5 },
                        { label: '⚡', x: '85%', y: '70%', r: -20, s: 1.1 }
                    ].map((token, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                y: [0, -20, 0],
                                rotate: [token.r, token.r + 5, token.r]
                            }}
                            transition={{
                                duration: 4 + i,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute font-black text-black/5 text-9xl select-none"
                            style={{ left: token.x, top: token.y, fontSize: `${token.s * 8}rem` }}
                        >
                            {token.label}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* 3. THE SCROLL ENGINE */}
            <div ref={targetRef} className="relative h-[450vh]">
                <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden z-10">
                    {/* The Phone Bezel - Enhanced Titanium Finish */}
                    <motion.div
                        style={{ scale: scalePhone }}
                        className="relative w-[360px] h-[720px] bg-[#0A0A0A] rounded-[60px] border-[10px] border-[#1C1C1E] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden"
                    >
                        {/* Dynamic Island */}
                        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[110px] h-[34px] bg-black z-50 rounded-full flex items-center justify-center border border-white/5">
                            <div className="w-2 h-2 bg-[#1C1C1E] rounded-full mr-12"></div>
                            <div className="w-1 h-1 bg-blue-500/50 rounded-full blur-[2px]"></div>
                        </div>

                        {/* --- SCREEN 1: HOME --- */}
                        <motion.div style={{ opacity: opacity1 }} className="absolute inset-0 bg-white pt-20 px-6 flex flex-col">
                            <div className="flex justify-between items-center mb-10">
                                <div className="w-10 h-10 rounded-2xl bg-[#F5F5F7] flex items-center justify-center text-black font-bold border border-black/5 shadow-sm">B</div>
                                <div className="flex gap-2">
                                    <div className="w-10 h-10 rounded-full bg-[#F5F5F7] border border-black/5 shadow-sm"></div>
                                    <div className="w-10 h-10 rounded-full bg-[#F5F5F7] border border-black/5 shadow-sm"></div>
                                </div>
                            </div>
                            <div className="mb-12">
                                <h2 className="text-textMuted font-semibold text-xs uppercase tracking-widest mb-1">Total Balance</h2>
                                <h1 className="text-5xl font-extrabold text-[#1D1D1F] tracking-tighter">$14,203.55</h1>
                                <div className="flex items-center gap-2 mt-2">
                                    <div className="w-2 h-2 rounded-full bg-[#34C759]"></div>
                                    <span className="text-[#34C759] font-bold text-sm">+5.24% today</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { name: 'Bitcoin', symbol: 'BTC', balance: '0.450', usd: '$12,450.00', color: '#F7931A' },
                                    { name: 'Ethereum', symbol: 'ETH', balance: '1.200', usd: '$1,250.45', color: '#627EEA' },
                                    { name: 'Solana', symbol: 'SOL', balance: '45.00', usd: '$503.10', color: '#14F195' }
                                ].map((token, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 rounded-3xl bg-[#FBFBFC] border border-black/[0.03] hover:scale-[1.02] transition-transform">
                                        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-[10px] shadow-lg" style={{ backgroundColor: token.color }}>
                                            {token.symbol}
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-bold text-[#1D1D1F] text-sm">{token.name}</div>
                                            <div className="text-[10px] text-[#86868B] font-medium">{token.balance} {token.symbol}</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-[#1D1D1F] text-sm">{token.usd}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* --- SCREEN 2: SWAP --- */}
                        <motion.div style={{ opacity: opacity2 }} className="absolute inset-0 bg-[#F2F2F7] flex flex-col items-center justify-center p-6 pb-20">
                            <div className="w-full bg-white p-7 rounded-[32px] shadow-sm border border-black/5 mb-2">
                                <div className="text-[#86868B] text-[10px] font-black tracking-[0.2em] mb-4">PAY</div>
                                <div className="flex justify-between items-end">
                                    <span className="text-4xl font-extrabold text-[#1D1D1F] tracking-tighter">1.5</span>
                                    <div className="flex items-center gap-2 px-3 py-1.5 bg-[#1D1D1F] text-white rounded-full font-bold shadow-xl text-xs">
                                        <div className="w-3 h-3 rounded-full bg-[#F7931A]"></div>
                                        BTC
                                    </div>
                                </div>
                            </div>
                            <div className="relative z-10 -my-4">
                                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-xl border-4 border-[#F2F2F7]">
                                    <Repeat className="w-4 h-4 text-black" />
                                </div>
                            </div>
                            <div className="w-full bg-white p-7 rounded-[32px] shadow-sm border border-black/5 mt-2">
                                <div className="text-[#86868B] text-[10px] font-black tracking-[0.2em] mb-4">RECEIVE</div>
                                <div className="flex justify-between items-end">
                                    <span className="text-4xl font-extrabold text-[#1D1D1F] tracking-tighter">4,200</span>
                                    <div className="flex items-center gap-2 px-3 py-1.5 bg-[#007AFF] text-white rounded-full font-bold shadow-xl text-xs">
                                        <div className="w-3 h-3 rounded-full bg-white/20"></div>
                                        USD
                                    </div>
                                </div>
                            </div>
                            <button className="w-full bg-[#1D1D1F] text-white font-bold py-5 rounded-[32px] mt-8 text-lg shadow-2xl">Review Swap</button>
                        </motion.div>

                        {/* --- SCREEN 3: NFT --- */}
                        <motion.div style={{ opacity: opacity3 }} className="absolute inset-0 bg-[#0A0A0A] flex flex-col">
                            <div className="flex-1 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#3B82F6_0%,_transparent_70%)] opacity-20"></div>
                                <div className="relative group">
                                    <motion.div
                                        animate={{ rotateY: 360 }}
                                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                        className="relative w-56 h-56 bg-gradient-to-br from-[#007AFF] to-[#AF52DE] rounded-[48px] shadow-[0_40px_100px_rgba(0,114,227,0.3)] border border-white/10 flex items-center justify-center overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                                        <ImageIcon className="w-20 h-20 text-white drop-shadow-2xl" />
                                    </motion.div>
                                </div>

                                <div className="absolute bottom-8 left-6 right-6">
                                    <div className="bg-white/5 backdrop-blur-2xl p-5 rounded-[28px] border border-white/10 shadow-2xl">
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="text-white font-bold text-xl tracking-tight">Cosmic Cube #042</h3>
                                            <div className="px-2 py-0.5 bg-blue-500/20 rounded text-[8px] text-blue-400 font-bold border border-blue-500/30">LEGENDARY</div>
                                        </div>
                                        <div className="flex justify-between items-center text-white/50 text-xs">
                                            <span>Last Sale: 12.5 BTC</span>
                                            <span className="text-[#007AFF] font-bold">View Asset</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* SCROLLING TEXT TRIGGERS */}
                <div className="absolute top-0 left-0 w-full">
                    {/* Trigger 1 */}
                    <div className="h-screen flex items-center">
                        <div className="w-1/2 hidden md:block"></div>
                        <div className="md:w-1/3 px-8 ml-auto md:mr-24">
                            <div className="bg-white/30 backdrop-blur-xl p-10 rounded-[40px] border border-black/5 shadow-2xl">
                                <h2 className="text-5xl font-black tracking-tighter mb-6 text-[#1D1D1F]">Flawless <br /> Basics.</h2>
                                <p className="text-xl text-[#86868B] font-medium leading-relaxed">
                                    Handcrafted essentials. Send and receive with zero friction.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Trigger 2 */}
                    <div className="h-screen flex items-center">
                        <div className="md:w-1/3 px-8 md:ml-24">
                            <div className="bg-white/30 backdrop-blur-xl p-10 rounded-[40px] border border-black/5 shadow-2xl">
                                <h2 className="text-5xl font-black tracking-tighter mb-6 text-[#1D1D1F]">Hyper-fast <br /> Swaps.</h2>
                                <p className="text-xl text-[#86868B] font-medium leading-relaxed">
                                    Trade thousands of tokens in seconds with the lowest fees in the market.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Trigger 3 */}
                    <div className="h-screen flex items-center">
                        <div className="w-1/2 hidden md:block"></div>
                        <div className="md:w-1/3 px-8 ml-auto md:mr-24">
                            <div className="bg-white/30 backdrop-blur-xl p-10 rounded-[40px] border border-black/5 shadow-2xl">
                                <h2 className="text-5xl font-black tracking-tighter mb-6 text-[#1D1D1F]">Curated <br /> Collectibles.</h2>
                                <p className="text-xl text-[#86868B] font-medium leading-relaxed">
                                    Display, trade, and experience your NFTs exactly as intended.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
