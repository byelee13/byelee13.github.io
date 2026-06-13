import React from 'react'

function Footer() {
  return (
    <footer className="w-full mt-32 border-t-4 border-ink bg-newsprint sharp-corners">
      {/* Main Footer Content */}
      <div className="max-w-container mx-auto px-4 lg:px-16 py-16">
        <div className="grid grid-cols-12 gap-8 border-b border-ink pb-16">
          {/* Logo & Description */}
          <div className="col-span-12 md:col-span-4 border-r-0 md:border-r border-ink pr-0 md:pr-8">
            <h2 className="font-serif text-6xl font-black text-ink mb-4">K</h2>
            <p className="font-body text-sm leading-relaxed text-neutral-600">
              UX/UI Designer & Researcher specializing in architectural precision 
              and editorial aesthetics. Creating systems that speak for themselves.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="col-span-6 md:col-span-2">
            <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-6">
              Pages
            </h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/" 
                  className="cursor-target font-body text-sm text-ink hover:underline decoration-2 decoration-editorial-red underline-offset-4 transition-all"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="/work" 
                  className="cursor-target font-body text-sm text-ink hover:underline decoration-2 decoration-editorial-red underline-offset-4 transition-all"
                >
                  Work
                </a>
              </li>
              <li>
                <a 
                  href="/about" 
                  className="cursor-target font-body text-sm text-ink hover:underline decoration-2 decoration-editorial-red underline-offset-4 transition-all"
                >
                  About Me
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-span-6 md:col-span-3">
            <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-6">
              Connect
            </h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="cursor-target font-body text-sm text-ink hover:underline decoration-2 decoration-editorial-red underline-offset-4 transition-all"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="cursor-target font-body text-sm text-ink hover:underline decoration-2 decoration-editorial-red underline-offset-4 transition-all"
                >
                  Dribbble
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="cursor-target font-body text-sm text-ink hover:underline decoration-2 decoration-editorial-red underline-offset-4 transition-all"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-12 md:col-span-3">
            <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-6">
              Contact
            </h3>
            <div className="space-y-4">
              <div className="border border-ink p-4 sharp-corners">
                <p className="font-mono text-xs text-neutral-500 mb-1">WeChat</p>
                <p className="font-body text-sm text-ink">@k_designer</p>
              </div>
              <div className="border border-ink p-4 sharp-corners">
                <p className="font-mono text-xs text-neutral-500 mb-1">GitHub</p>
                <p className="font-body text-sm text-ink">@k-portfolio</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-neutral-600">
            Edition: Vol 1.0 | Printed in Digital Format
          </p>
          <p className="font-body text-sm text-neutral-600">
            © 2024 K. All rights reserved. Designed with architectural intent.
          </p>
        </div>
      </div>

      {/* Ornamental Divider */}
      <div className="py-8 text-center border-t border-divider">
        <div className="font-serif text-2xl text-neutral-400 tracking-[1em]">
          &#x2727; &#x2727; &#x2727;
        </div>
      </div>
    </footer>
  )
}

export default Footer
