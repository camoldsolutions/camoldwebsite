/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    dark: '#0B1120', // Deep Navy/Slate
                    primary: '#059669', // Emerald 600
                    secondary: '#0EA5E9', // Sky 500
                    light: '#F8FAFC', // Slate 50
                    accent: '#F59E0B', // Amber 500
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fog-flow': 'fog-flow 20s ease-in-out infinite',
                'fade-in': 'fade-in 0.5s ease-out forwards',
                'slide-up': 'slide-in-from-bottom-4 0.5s ease-out forwards',
            }
        },
    },
    plugins: [],
}
