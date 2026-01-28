import React from 'react';

export default function Navbar() {
    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-[1240px] z-[100] px-8 py-4 bg-white/70 backdrop-blur-2xl border border-black/[0.05] rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
            <div className="flex justify-between items-center">
                <div className="text-2xl font-black tracking-tighter text-[#1D1D1F]">Bey</div>

                <div className="hidden md:flex gap-10">
                    {['Developers', 'ConnectKit', 'Company'].map((item) => (
                        <a key={item} href="#" className="text-sm font-bold text-[#86868B] hover:text-[#1D1D1F] transition-colors">
                            {item}
                        </a>
                    ))}
                </div>

                <button className="bg-[#1D1D1F] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-transform shadow-lg shadow-black/10">
                    Get Started
                </button>
            </div>
        </nav>
    );
}
