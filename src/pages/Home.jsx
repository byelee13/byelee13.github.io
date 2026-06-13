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

        {/* Right Side - Designer Workspace Photo */}
        <div className="w-full md:w-1/2 relative order-1 md:order-2 overflow-hidden min-h-[400px] md:min-h-screen group/hero">
          <img
            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80"
            alt="Designer's workspace with colorful pencils, wireframes and design tools"
            className="absolute inset-0 w-full h-full object-cover grayscale group-hover/hero:grayscale-0 transition-all duration-700"
          />
          {/* Light overlay — fades out on hover to let color breathe */}
          <div className="absolute inset-0 bg-newsprint/10 group-hover/hero:bg-transparent transition-all duration-700 pointer-events-none"></div>
          {/* Corner brackets */}
          <div className="absolute top-6 left-6 w-10 h-10 border-t-2 border-l-2 border-newsprint/60 pointer-events-none"></div>
          <div className="absolute bottom-6 right-6 w-10 h-10 border-b-2 border-r-2 border-newsprint/60 pointer-events-none"></div>
          {/* Fig caption */}
          <div className="absolute bottom-6 left-6 pointer-events-none">
            <p className="font-mono text-[10px] uppercase tracking-widest text-newsprint/70">
              Fig. 1.2 — Design Studio
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
