/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                // Family.co Light Theme Palette
                bg: '#F5F5F7',           // The Apple-style off-white background
                surface: '#FFFFFF',      // Pure white cards
                textMain: '#1D1D1F',     // Almost black text
                textMuted: '#86868B',    // Cool grey secondary text
                border: '#E5E5EA',       // Very subtle borders
                accent: '#007AFF',       // iOS Blue (for functional links)
            },
            fontFamily: {
                sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
            },
            letterSpacing: {
                tighter: '-0.03em',      // Critical for that high-end headline look
            },
            borderRadius: {
                '4xl': '40px',           // Massive rounded corners
            }
        },
    },
    plugins: [],
}
