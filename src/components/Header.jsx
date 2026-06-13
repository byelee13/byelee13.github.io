import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()
  
  const isActive = (path) => location.pathname === path

  return (
    <header className="fixed top-0 w-full z-40 bg-newsprint/80 backdrop-blur-sm border-b border-ink sharp-corners">
      <div className="max-w-container mx-auto px-4 lg:px-16 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="cursor-target font-serif text-4xl font-black text-ink hover:opacity-70 transition-opacity"
          aria-label="Home"
        >
          K
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8" aria-label="Main Navigation">
          <Link
            to="/work"
            className={`
              cursor-target font-mono text-xs uppercase tracking-widest transition-colors-newsprint
              ${isActive('/work') 
                ? 'text-ink border-b-2 border-ink pb-1' 
                : 'text-neutral-600 pb-1 hover:text-ink'
              }
            `}
          >
            Work
          </Link>
          <Link
            to="/about"
            className={`
              cursor-target font-mono text-xs uppercase tracking-widest transition-colors-newsprint
              ${isActive('/about') 
                ? 'text-ink border-b-2 border-ink pb-1' 
                : 'text-neutral-600 pb-1 hover:text-ink'
              }
            `}
          >
            About Me
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="cursor-target md:hidden w-11 h-11 flex items-center justify-center border border-ink sharp-corners hover:bg-ink hover:text-newsprint transition-colors-newsprint"
          aria-label="Open Menu"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {/* Edition Metadata */}
      <div className="border-t border-ink py-1.5 bg-ink text-newsprint">
        <div className="max-w-container mx-auto px-4 lg:px-16">
          <p className="font-mono text-[11px] tracking-wide">
            Vol. 1 | {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })} | Digital Edition
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header
