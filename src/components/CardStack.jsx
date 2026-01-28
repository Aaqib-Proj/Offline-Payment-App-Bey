import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Card = ({ i, title, description, color, progress, range, targetScale }) => {
    const container = useRef(null);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{
                    scale,
                    backgroundColor: '#FFFFFF',
                    top: `calc(-5% + ${i * 25}px)`
                }}
                className="flex flex-col relative h-[500px] w-[850px] rounded-[48px] p-12 border border-black/5 shadow-[0_40px_100px_rgba(0,0,0,0.04)] origin-top overflow-hidden"
            >
                <div className="flex flex-col md:flex-row h-full gap-12">
                    <div className="flex-1 flex flex-col justify-center">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-[#1D1D1F] mb-6">
                            {title}
                        </h2>
                        <p className="text-xl text-[#86868B] font-medium leading-relaxed">
                            {description}
                        </p>
                    </div>

                    <div className="flex-1 relative rounded-3xl overflow-hidden bg-[#F5F5F7] border border-black/5 flex items-center justify-center">
                        {/* Vibrant visual element for Light Theme */}
                        <div className="absolute inset-0 opacity-20" style={{
                            background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)`
                        }}></div>

                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="w-56 h-56 border border-black/5 rounded-full flex items-center justify-center absolute"
                        >
                            <div className="w-6 h-6 rounded-full shadow-lg" style={{ backgroundColor: color }}></div>
                        </motion.div>
                        <div className="text-[#1D1D1F] font-black z-10 text-3xl tracking-tighter mix-blend-overlay opacity-20">{title.split('.')[0].toUpperCase()}</div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

const CardStack = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    const cards = [
        {
            title: "Bitcoin. Reimagined.",
            description: "Experience the fastest transaction speeds with industry-leading security protocols. Built for the next billion users.",
            color: "#F7931A"
        },
        {
            title: "Self-Custody First.",
            description: "Your keys, your crypto. We never have access to your funds or personal data. True sovereignty at your fingertips.",
            color: "#007AFF"
        },
        {
            title: "Connect Everywhere.",
            description: "One wallet for all your Bitcoin apps. Seamless integration across the ecosystem with a single tap.",
            color: "#AF52DE"
        },
        {
            title: "The Future is Bey.",
            description: "Join thousands of users who have already made the switch to the modern standard of digital finance.",
            color: "#FF2D55"
        }
    ];

    return (
        <section ref={container} className="relative bg-[#F5F5F7]">
            {cards.map((card, i) => {
                const targetScale = 1 - ((cards.length - i) * 0.04);
                return (
                    <Card
                        key={i}
                        i={i}
                        {...card}
                        progress={scrollYProgress}
                        range={[i * (1 / cards.length), 1]}
                        targetScale={targetScale}
                    />
                )
            })}
        </section>
    );
};

export default CardStack;
