/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Modern vibrant color palette
        'midnight-navy': '#0A0A1A',
        'neon-teal': '#00F5FF',
        'electric-orange': '#FF6B35',
        'deep-space': '#0D0D2A',
        'cyber-blue': '#00D4FF',
        'plasma-purple': '#A855F7',
        'neon-green': '#00FF88',
        'steel-blue': '#4682B4',
        'cloud-white': '#F5F5F5',
        'hot-pink': '#FF1493',
        'electric-yellow': '#FFFF00',
        'neon-cyan': '#00FFFF',
        'deep-purple': '#4C1D95',
        'vibrant-red': '#FF1744',
        'gold': '#FFD700',
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'source-code': ['Source Code Pro', 'monospace'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.8s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.8s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.8s ease-out forwards',
        'spin-slow': 'spin 3s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'typing': 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite',
        'slide-in': 'slideIn 0.5s ease-out forwards',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'rotate-3d': 'rotate3d 20s linear infinite',
        'wave': 'wave 2s ease-in-out infinite',
        'ripple': 'ripple 0.6s linear',
        'flip-horizontal': 'flipHorizontal 0.8s ease-in-out',
        'flip-vertical': 'flipVertical 0.8s ease-in-out',
        'rotate-3d-x': 'rotate3dX 8s linear infinite',
        'rotate-3d-y': 'rotate3dY 8s linear infinite',
        'rotate-3d-z': 'rotate3dZ 8s linear infinite',
        'float-3d': 'float3d 4s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'neon-flicker': 'neonFlicker 1.5s ease-in-out infinite',
        'matrix-rain': 'matrixRain 20s linear infinite',
        'hologram': 'hologram 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        pulseGlow: {
          '0%': {
            boxShadow: '0 0 5px #14FFEC, 0 0 10px #14FFEC, 0 0 15px #14FFEC',
          },
          '100%': {
            boxShadow: '0 0 10px #14FFEC, 0 0 20px #14FFEC, 0 0 30px #14FFEC',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        glow: {
          '0%': {
            textShadow: '0 0 5px #14FFEC, 0 0 10px #14FFEC, 0 0 15px #14FFEC',
          },
          '100%': {
            textShadow: '0 0 10px #14FFEC, 0 0 20px #14FFEC, 0 0 30px #14FFEC',
          },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#14FFEC' },
        },
        slideIn: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        bounceGentle: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        rotate3d: {
          '0%': {
            transform: 'rotateY(0deg)',
          },
          '100%': {
            transform: 'rotateY(360deg)',
          },
        },
        wave: {
          '0%, 100%': {
            transform: 'rotate(0deg)',
          },
          '50%': {
            transform: 'rotate(180deg)',
          },
        },
        ripple: {
          '0%': {
            transform: 'scale(0)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(4)',
            opacity: '0',
          },
        },
        flipHorizontal: {
          '0%': {
            transform: 'rotateY(0deg)',
          },
          '100%': {
            transform: 'rotateY(180deg)',
          },
        },
        flipVertical: {
          '0%': {
            transform: 'rotateX(0deg)',
          },
          '100%': {
            transform: 'rotateX(180deg)',
          },
        },
        rotate3dX: {
          '0%': {
            transform: 'rotateX(0deg)',
          },
          '100%': {
            transform: 'rotateX(360deg)',
          },
        },
        rotate3dY: {
          '0%': {
            transform: 'rotateY(0deg)',
          },
          '100%': {
            transform: 'rotateY(360deg)',
          },
        },
        rotate3dZ: {
          '0%': {
            transform: 'rotateZ(0deg)',
          },
          '100%': {
            transform: 'rotateZ(360deg)',
          },
        },
        float3d: {
          '0%, 100%': {
            transform: 'translateY(0px) translateZ(0px)',
          },
          '50%': {
            transform: 'translateY(-20px) translateZ(20px)',
          },
        },
        glowPulse: {
          '0%, 100%': {
            boxShadow: '0 0 20px #00F5FF, 0 0 40px #00F5FF, 0 0 60px #00F5FF',
          },
          '50%': {
            boxShadow: '0 0 40px #00F5FF, 0 0 80px #00F5FF, 0 0 120px #00F5FF',
          },
        },
        neonFlicker: {
          '0%, 100%': {
            opacity: '1',
            textShadow: '0 0 10px #00F5FF, 0 0 20px #00F5FF, 0 0 30px #00F5FF',
          },
          '50%': {
            opacity: '0.8',
            textShadow: '0 0 5px #00F5FF, 0 0 10px #00F5FF, 0 0 15px #00F5FF',
          },
        },
        matrixRain: {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(100vh)',
            opacity: '1',
          },
        },
        hologram: {
          '0%, 100%': {
            opacity: '0.8',
            filter: 'hue-rotate(0deg)',
          },
          '50%': {
            opacity: '1',
            filter: 'hue-rotate(180deg)',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(rgba(20, 255, 236, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(20, 255, 236, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
    },
  },
  plugins: [],
};