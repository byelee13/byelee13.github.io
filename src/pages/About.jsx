import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function About() {
  const experiences = [
    {
      company: 'Studio Nexus',
      role: 'Lead Product Designer',
      period: '2022 — Present',
      projects: [
        'Nexus Global Design System',
        'Merchant Portal Redesign'
      ]
    },
    {
      company: 'Architrave Digital',
      role: 'Senior UX Designer',
      period: '2020 — 2022',
      projects: [
        'Fintech Dashboard Application',
        'Mobile App for Editorial Brand'
      ]
    },
    {
      company: 'Framework Agency',
      role: 'UI Designer',
      period: '2018 — 2020',
      projects: [
        'E-commerce Platform Overhaul',
        'Brand Identity Digitization'
      ]
    },
    {
      company: 'Freelance',
      role: 'Digital Designer',
      period: '2016 — 2018',
      projects: [
        'Various Boutique Websites',
        'Interactive Installations'
      ]
    }
  ]

  const socialLinks = [
    { name: 'WeChat', handle: '@k_designer' },
    { name: 'GitHub', handle: '@k-portfolio' },
    { name: 'Xiaohongshu', handle: '@k_design' }
  ]

  return (
    <div className="min-h-screen bg-newsprint sharp-corners">
      <Header />
      
      <main className="max-w-container mx-auto px-4 lg:px-16 pt-32 pb-32">
        {/* Page Header */}
        <div className="border-b-4 border-ink pb-8 mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-4">
            About — Professional Background
          </p>
          <h1 className="font-serif text-4xl lg:text-5xl font-black text-ink">
            Hello, I'm K.
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          {/* Left Column - Profile */}
          <div className="col-span-12 lg:col-span-5 border-r-0 lg:border-r border-ink pr-0 lg:pr-16">
            {/* Avatar */}
            <div className="mb-12">
              <div className="w-48 h-48 border-2 border-ink overflow-hidden sharp-corners group/avatar">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
                  alt="Professional portrait of designer K"
                  className="w-full h-full object-cover object-top grayscale group-hover/avatar:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="mb-12">
              <h2 className="font-serif text-2xl font-bold text-ink mb-6">
                Multidisciplinary Designer
              </h2>
              <div className="font-body text-base leading-relaxed text-neutral-700 space-y-4">
                <p>
                  I am a multidisciplinary designer focused on creating structural, 
                  minimal, and highly intentional digital experiences. My approach 
                  blends systematic thinking with editorial aesthetics.
                </p>
                <p>
                  Drawing from principles of architecture and print design, I craft 
                  interfaces that prioritize hierarchy, clarity, and timeless visual 
                  structure.
                </p>
              </div>
            </div>

            {/* Contact Links */}
            <div className="border-t border-ink pt-8">
              <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-6">
                Connect
              </h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="cursor-target group flex items-center gap-4 hover:opacity-70 transition-opacity"
                  >
                    <div className="w-12 h-12 border border-ink bg-newsprint flex items-center justify-center sharp-corners group-hover:bg-ink group-hover:text-newsprint transition-colors-newsprint">
                      <span className="font-mono text-lg font-bold">
                        {link.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-mono text-xs text-neutral-500">
                        {link.name}
                      </p>
                      <p className="font-body text-sm text-ink">
                        {link.handle}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Experience */}
          <div className="col-span-12 lg:col-span-7">
            <div className="mb-12">
              <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-8 border-b border-divider pb-4">
                Professional Experience
              </h2>
              
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <article 
                    key={index}
                    className="border-l-4 border-ink pl-8 pb-12 border-b border-divider last:border-b-0"
                  >
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-baseline mb-3">
                      <h3 className="font-serif text-2xl lg:text-3xl font-bold text-ink">
                        {exp.company}
                      </h3>
                      <span className="font-mono text-xs text-neutral-500 mt-2 lg:mt-0">
                        {exp.period}
                      </span>
                    </div>

                    {/* Role */}
                    <p className="font-mono text-xs uppercase tracking-widest text-neutral-600 mb-6">
                      {exp.role}
                    </p>

                    {/* Projects Box */}
                    <div className="bg-neutral-100 border border-ink p-6 sharp-corners">
                      <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-4">
                        Key Projects
                      </h4>
                      <ul className="space-y-2">
                        {exp.projects.map((project, pIndex) => (
                          <li 
                            key={pIndex}
                            className="font-body text-sm text-ink flex items-start"
                          >
                            <span className="text-editorial-red mr-2">■</span>
                            {project}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Edition Number */}
            <div className="mt-12 pt-8 border-t border-ink">
              <p className="font-mono text-xs text-neutral-500">
                Fig. 2.1 — Professional Timeline
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default About
