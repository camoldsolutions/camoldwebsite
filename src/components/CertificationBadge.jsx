import React from 'react';

const MicroscopeIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 mx-auto mb-1 text-black">
        <path d="M6 14a2 2 0 012-2h1.5A2.5 2.5 0 0012 9.5V5.914l-1.793 1.793a1 1 0 01-1.414-1.414l3.5-3.5a1 1 0 011.414 0l3.5 3.5a1 1 0 01-1.414 1.414L14 5.914V9.5A2.5 2.5 0 0016.5 12H18a2 2 0 110 4h-2.5a3.48 3.48 0 01-2-2.82V14H6z M12 18a4 4 0 100-8 4 4 0 000 8z" />
        <path d="M12 21a1 1 0 100-2 1 1 0 000 2z" />
        <path d="M8 22h8v2H8z" />
    </svg>
);

const Badge = ({ title, code, subtitle, role, type = "gold" }) => {
    // Basic gold gradient defs
    const goldGradient = (
        <defs>
            <linearGradient id={`${code}-gold`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FCD580" />
                <stop offset="25%" stopColor="#D4AF37" />
                <stop offset="50%" stopColor="#FCD580" />
                <stop offset="75%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#C5A028" />
            </linearGradient>
            <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
                <feOffset dx="2" dy="2" result="offsetblur" />
                <feComponentTransfer>
                    <feFuncA type="linear" slope="0.3" />
                </feComponentTransfer>
                <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
    );

    return (
        <div className="relative w-48 h-48 flex items-center justify-center transform hover:scale-105 transition duration-300 drop-shadow-xl">
            <svg viewBox="0 0 200 200" className="w-full h-full">
                {goldGradient}

                {/* Sawtooth Seal Background */}
                <path
                    d="M100,10 L108,25 L125,22 L128,38 L144,40 L142,57 L158,63 L152,79 L166,89 L156,103 L166,117 L152,127 L158,143 L142,149 L144,166 L128,168 L125,184 L108,181 L100,196 L92,181 L75,184 L72,168 L56,166 L58,149 L42,143 L48,127 L34,117 L44,103 L34,89 L48,79 L42,63 L58,57 L56,40 L72,38 L75,22 L92,25 Z"
                    fill={`url(#${code}-gold)`}
                    filter="url(#dropShadow)"
                    stroke="#B8860B"
                    strokeWidth="1"
                />

                {/* Inner Ring */}
                <circle cx="100" cy="100" r="75" fill="none" stroke="#705000" strokeWidth="2" strokeDasharray="4 2" />

                {/* Curved Text Path - Top */}
                <path id={`${code}-curve-top`} d="M 40,100 A 60,60 0 0,1 160,100" fill="none" />
                <text className="uppercase font-bold tracking-wider" fill="#3E2723" fontSize="11" fontWeight="900" textAnchor="middle">
                    <textPath href={`#${code}-curve-top`} startOffset="50%">
                        {title}
                    </textPath>
                </text>

                {/* Center Content */}
                <g transform="translate(68, 65)">
                    {/* Simplified Microscope Path */}
                    <path d="M32,15 C32,20 28,24 28,24 L14,24 L14,40 L50,40 L50,45 L14,45 L14,48 L44,48 C44,48 48,46 48,55 L16,55 C16,55 16,63 32,63"
                        fill="none"
                        stroke="black"
                        strokeWidth="0"
                    />
                    {/* Just using text for the center code for clarity */}
                </g>

                {/* Code (CRMI etc) */}
                <text x="100" y="105" textAnchor="middle" fill="black" fontSize="32" fontWeight="900" fontFamily="sans-serif">
                    {code}
                </text>

                {/* Microscope Icon Overlay (SVGs are hard inside SVGs without nesting, approximating position) */}
                <g transform="translate(85, 60) scale(1.0)">
                    <path d="M15,0 L15,10 M10,15 L20,15" stroke="black" strokeWidth="2" />
                    <path d="M10,5 Q15,0 20,5 L20,15 Q15,20 10,15 Z" fill="black" />
                    {/* Abstract microscope shape */}
                    <path d="M12,4 L12,12 A2,2 0 0,0 14,14 L20,14" fill="none" stroke="black" strokeWidth="2.5" />
                    <rect x="8" y="14" width="14" height="3" fill="black" />
                </g>

                {/* Subtitle */}
                <text x="100" y="125" textAnchor="middle" fill="black" fontSize="5" fontWeight="bold" letterSpacing="0.2">
                    PROFESSIONAL MOLD
                </text>
                <text x="100" y="131" textAnchor="middle" fill="black" fontSize="5" fontWeight="bold" letterSpacing="0.2">
                    INSPECTION INSTITUTE
                </text>

                {/* Curved Text Path - Bottom */}
                <path id={`${code}-curve-bottom`} d="M 35,100 A 65,65 0 0,0 165,100" fill="none" />
                <text className="uppercase font-bold tracking-widest" fill="#3E2723" fontSize="10" fontWeight="900" textAnchor="middle">
                    <textPath href={`#${code}-curve-bottom`} startOffset="50%" side="left"> {/* side=left might vary based on browser, usually need to reverse path for bottom text */}
                        {role}
                    </textPath>
                </text>

                {/* Reversing path for bottom text readability */}
                <path id={`${code}-curve-bottom-rev`} d="M 35,110 A 65,65 0 0,0 165,110" fill="none" id="curve" transform="rotate(0 100 100)" />
                <path id={`${code}-curve-bottom-real`} d="M 40,105 A 60,60 0 0,0 160,105" fill="none" />

            </svg>

            {/* Overlay actual DOM text for bottom curve if SVG path is tricky, 
                but let's try a different SVG path trick for bottom text: 
                Reverse the arc direction 
            */}
        </div>
    );
};

// Fixed Badge Component with Proper Orientation
const CertificationBadge = ({ variant }) => {
    let props = {};
    switch (variant) {
        case 'CRMI':
            props = { title: "CERTIFIED RESIDENTIAL", code: "CRMI", role: "MOLD INSPECTOR" };
            break;
        case 'CMR':
            props = { title: "CERTIFIED", code: "CMR", role: "MOLD REMEDIATOR" };
            break;
        case 'CCMI':
            props = { title: "CERTIFIED COMMERCIAL", code: "CCMI", role: "MOLD INSPECTOR" };
            break;
        default:
            return null;
    }

    return (
        <div className="relative w-48 h-48 md:w-56 md:h-56 filter drop-shadow-xl hover:scale-105 transition-transform duration-300">
            <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                    <linearGradient id={`${variant}-grad`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FBDA61" />
                        <stop offset="50%" stopColor="#F76B1C" />
                        <stop offset="100%" stopColor="#FBDA61" />
                    </linearGradient>
                    <linearGradient id="gold-shine" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#FFF8DC" />
                        <stop offset="50%" stopColor="#DAA520" />
                        <stop offset="100%" stopColor="#B8860B" />
                    </linearGradient>
                </defs>

                {/* Seal Shape */}
                <path d="M100 10 L112 28 L132 25 L138 44 L158 48 L157 68 L175 78 L167 96 L182 110 L167 124 L175 142 L157 152 L158 172 L138 176 L132 195 L112 192 L100 210 L88 192 L68 195 L62 176 L42 172 L43 152 L25 142 L33 124 L18 110 L33 96 L25 78 L43 68 L42 48 L62 44 L68 25 L88 28 Z"
                    fill="url(#gold-shine)"
                    stroke="#8B4513"
                    strokeWidth="1"
                />
                <circle cx="100" cy="110" r="72" fill="none" stroke="#704214" strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />

                {/* Top Text */}
                <path id={`top-curve-${variant}`} d="M 30,110 A 70,70 0 0,1 170,110" fill="none" />
                <text fontSize="13" fontWeight="bold" fill="#3E2723" letterSpacing="1">
                    <textPath href={`#top-curve-${variant}`} startOffset="50%" textAnchor="middle">
                        {props.title}
                    </textPath>
                </text>

                {/* Bottom Text */}
                <path id={`bottom-curve-${variant}`} d="M 30,110 A 70,70 0 0,0 170,110" fill="none" />
                <text fontSize="12" fontWeight="bold" fill="#3E2723" letterSpacing="1">
                    <textPath href={`#bottom-curve-${variant}`} startOffset="50%" textAnchor="middle">
                        {props.role}
                    </textPath>
                </text>

                {/* Center Microscope Icon (Simplified) */}
                <g transform="translate(82, 65) scale(1.2)">
                    <path d="M15 3 C15 3 25 3 25 10 C25 17 15 17 15 17" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
                    <rect x="8" y="17" width="14" height="3" fill="black" />
                    <path d="M15 12 L15 22 L25 22 L25 25 L5 25 L5 22 L15 22" fill="none" stroke="black" strokeWidth="2.5" />
                </g>

                {/* Center Code */}
                <text x="100" y="112" textAnchor="middle" fontSize="34" fontWeight="900" fill="black" fontFamily="Arial Black, sans-serif">
                    {props.code}
                </text>

                {/* Tiny Subtext */}
                <text x="100" y="126" textAnchor="middle" fontSize="4.5" fontWeight="bold" fill="black">PROFESSIONAL MOLD</text>
                <text x="100" y="131" textAnchor="middle" fontSize="4.5" fontWeight="bold" fill="black">INSPECTION INSTITUTE</text>

            </svg>
        </div>
    );
}

export default CertificationBadge;
