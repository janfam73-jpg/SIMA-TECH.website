import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface SimaLogoProps {
  className?: string;
  glow?: boolean;
}

export default function SimaLogo({ className, glow = true }: SimaLogoProps) {
  return (
    <div className={cn("relative group cursor-pointer flex items-center", className)}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative"
      >
        {/* SIMA TECH LOGO SVG - Recreated from User Image */}
        <svg 
          viewBox="0 0 240 80" 
          className="h-10 md:h-14 w-auto fill-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SIMA in Slanted Bold Font */}
          <g transform="skewX(-10)">
            {/* S */}
            <path d="M10 20 H50 V30 H22 L45 42 V50 H10 V40 H38 L15 28 V20 Z" />
            {/* I */}
            <rect x="58" y="20" width="12" height="30" />
            {/* M */}
            <path d="M78 20 H92 L100 35 L108 20 H122 V50 H110 V35 L100 50 L90 35 V50 H78 Z" />
            {/* A with Extended Stroke */}
            <path d="M130 50 L145 20 H155 L170 50 H158 L154 42 H142 L138 50 Z M144 34 H152 L148 26 Z" />
            <path d="M165 20 L195 20 L170 30 Z" />
          </g>
          {/* TECH - Wide Spacing */}
          <text 
            x="100" 
            y="70" 
            textAnchor="middle" 
            className="text-[12px] font-black tracking-[1.5em] uppercase"
            fill="white"
            style={{ fontFamily: 'monospace' }}
          >
            TECH
          </text>
        </svg>

        {glow && (
          <div className="absolute -inset-6 bg-cyan-400/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
        )}
      </motion.div>
    </div>
  );
}

