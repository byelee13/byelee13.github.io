import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="min-h-screen bg-newsprint sharp-corners">
      <Header />
      
      {/* Hero Section - Split Screen */}
      <main className="min-h-screen flex flex-col md:flex-row">
        {/* Left Side - Content */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-16 py-32 md:py-16 order-2 md:order-1 border-r-0 md:border-r border-ink">
          <div className="max-w-xl w-full">
            {/* Eyebrow */}
            <div className="font-mono text-xs uppercase tracking-widest text-neutral-600 mb-8">
              Designer & Researcher
            </div>

            {/* Hero Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-black text-ink leading-[0.95] tracking-tighter mb-8">
              UX/UI Designer & Researcher
            </h1>

            {/* Description - No Drop Cap */}
            <p className="font-body text-base md:text-lg leading-relaxed text-neutral-700 mb-12">
              Designing systems, interfaces, and experiences with architectural 
              precision. Translating complex problems into low-fidelity, high-impact 
              structural solutions that prioritize clarity and function.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/work"
                className="
                  cursor-target bg-ink text-newsprint border border-ink px-8 py-3 
                  font-mono text-xs uppercase tracking-widest text-center
                  hover:bg-newsprint hover:text-ink 
                  transition-colors-newsprint sharp-corners
                "
              >
                View Work
              </Link>
              <Link
                to="/about"
                className="
                  cursor-target border border-ink bg-transparent text-ink px-8 py-3 
                  font-mono text-xs uppercase tracking-widest text-center
                  hover:bg-ink hover:text-newsprint 
                  transition-colors-newsprint sharp-corners
                "
              >
                About Me
              </Link>
            </div>

            {/* Metadata */}
            <div className="mt-12 pt-8 border-t border-divider">
              <p className="font-mono text-xs text-neutral-500">
                Fig. 1.1 — Portfolio Introduction
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Visual Placeholder with Newsprint Texture */}
        <div className="w-full md:w-1/2 relative bg-neutral-100 order-1 md:order-2 newsprint-texture overflow-hidden min-h-[400px] md:min-h-screen">
          {/* Placeholder Box */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="relative">
              {/* Halftone Pattern */}
              <div className="w-64 h-64 md:w-96 md:h-96 halftone-pattern"></div>
              
              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center border-4 border-ink bg-newsprint p-6 md:p-8 sharp-corners">
                  <p className="font-mono text-xs uppercase tracking-widest text-neutral-600 mb-2">
                    Particle Effect
                  </p>
                  <p className="font-mono text-xs text-neutral-500">
                    [Placeholder]
                  </p>
                </div>
              </div>

              {/* Corner Brackets */}
              <div className="absolute top-0 left-0 w-8 h-8 md:w-12 md:h-12 border-t-2 border-l-2 border-ink/30"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 md:w-12 md:h-12 border-b-2 border-r-2 border-ink/30"></div>
            </div>
          </div>

          {/* Grid Overlay */}
          <div 
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#111111 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          ></div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
