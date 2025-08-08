/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          spotify: '#1DB954',
          pink: '#FF6B9D',
          violet: '#8B5CF6',
          warm: '#FF8A80',
          cool: '#6C63FF'
        },
        gradient: {
          pink: 'linear-gradient(135deg, #FF6B9D 0%, #FF8A80 100%)',
          purple: 'linear-gradient(135deg, #8B5CF6 0%, #6C63FF 100%)',
          orange: 'linear-gradient(135deg, #FF8A80 0%, #FFB74D 100%)'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'Satoshi', 'Poppins', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif']
      },
      fontSize: {
        'h1': ['2rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'body': ['1rem', { lineHeight: '1.5', fontWeight: '400' }],
        'button': ['0.875rem', { lineHeight: '1.4', fontWeight: '600' }]
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem'
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'medium': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'glow': '0 0 20px rgba(139, 92, 246, 0.3)'
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' }
        }
      }
    },
  },
  plugins: [],
}
