import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Work() {
  const projects = [
    {
      id: 1,
      title: 'FinTech Analytics Platform',
      description: 'A comprehensive redesign of a legacy financial tracking tool. The objective was to strip away superfluous UI elements, relying on a strict grid and monochromatic hierarchy to handle dense data sets without overwhelming the user.',
      category: 'Enterprise Dashboard',
      year: '2023',
      span: 'full',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
      imageAlt: 'Financial analytics dashboard with charts and data visualizations on multiple screens',
      detailImage: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=800&q=80',
      detailAlt: 'Close-up of typography and component specification sheets for a design system',
      details: {
        challenge: 'Dense financial data needed clear hierarchy',
        approach: 'Typography-first design with strict grid system',
        outcome: 'Structural logic through spacing and weight'
      }
    },
    {
      id: 2,
      title: 'Supply Chain Logistics',
      description: 'Translating complex routing algorithms into an accessible mobile interface for field operatives. Emphasizing high-contrast states and large touch targets within a strict geometric framework.',
      category: 'Mobile Application',
      year: '2023',
      span: 'half',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Mobile application interface showing logistics and route mapping on a smartphone',
    },
    {
      id: 3,
      title: 'Healthcare Portal UI Kit',
      description: 'A foundational design system built to ensure absolute consistency across a fragmented medical records ecosystem. Focused on semantic HTML patterns and low-fidelity aesthetic constraints.',
      category: 'Design System',
      year: '2022',
      span: 'half',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Healthcare digital interface showing patient records and medical data organized in a clean UI',
    }
  ]

  return (
    <div className="min-h-screen bg-newsprint sharp-corners">
      <Header />
      
      <main className="pt-24">
        {/* Hero Image - Selected Works */}
        <section className="w-full h-[614px] border-b-4 border-ink relative overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1920&q=80"
            alt="Architectural building facade with geometric patterns representing structured design work"
            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:sepia-[50%] transition-all duration-500"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-ink/40 pointer-events-none"></div>
          {/* Centered title overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="font-mono text-xs uppercase tracking-widest text-newsprint/70 mb-4">
                Portfolio — 2022–2024
              </p>
              <h2 className="font-serif text-5xl md:text-7xl font-black text-newsprint leading-[0.9] tracking-tighter">
                Selected Works
              </h2>
            </div>
          </div>
          {/* Corner brackets */}
          <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-newsprint/50 pointer-events-none"></div>
          <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-newsprint/50 pointer-events-none"></div>
        </section>

        {/* Portfolio Grid */}
        <section className="max-w-container mx-auto px-4 lg:px-16 py-32">
          {/* Page Header */}
          <div className="border-b-4 border-ink pb-8 mb-16">
            <p className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-4">
              Portfolio — 2022–2024
            </p>
            <h1 className="font-serif text-4xl lg:text-6xl font-black text-ink">
              Selected Projects
            </h1>
          </div>

          {/* Project Grid */}
          <div className="space-y-32">
            {projects.map((project, index) => (
              <article 
                key={project.id}
                className={`
                  cursor-target grid grid-cols-1 ${project.span === 'full' ? 'lg:grid-cols-12' : 'lg:grid-cols-6'} 
                  gap-8 group
                `}
              >
                {/* Project Image */}
                <div 
                  className={`
                    ${project.span === 'full' ? 'lg:col-span-12' : 'lg:col-span-6'}
                    aspect-[21/9] border border-ink 
                    relative overflow-hidden sharp-corners group/img
                  `}
                >
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover/img:sepia-[50%] transition-all duration-500 group-hover/img:scale-105"
                  />
                  {/* Subtle ink overlay */}
                  <div className="absolute inset-0 bg-ink/5 pointer-events-none"></div>
                  {/* Corner Indicators */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-newsprint/60 pointer-events-none"></div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-newsprint/60 pointer-events-none"></div>
                </div>

                {/* Project Content */}
                <div className={`${project.span === 'full' ? 'lg:col-span-12' : 'lg:col-span-6'}`}>
                  <div className="max-w-3xl">
                    {/* Metadata */}
                    <div className="flex items-center gap-4 mb-4 pb-4 border-b border-divider">
                      <span className="font-mono text-xs uppercase tracking-widest text-editorial-red">
                        {project.year}
                      </span>
                      <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="font-serif text-3xl lg:text-4xl font-bold text-ink mb-6">
                      {project.title}
                    </h2>

                    {/* Description */}
                    <p className="font-body text-lg leading-relaxed text-neutral-700 mb-8 text-editorial">
                      {project.description}
                    </p>

                    {/* Details (for full-width projects) */}
                    {project.span === 'full' && project.details && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-12 border-t border-ink">
                        {/* Detail Image */}
                        <div className="aspect-square border border-ink relative overflow-hidden sharp-corners group/detail">
                          <img
                            src={project.detailImage}
                            alt={project.detailAlt}
                            className="absolute inset-0 w-full h-full object-cover grayscale group-hover/detail:sepia-[50%] transition-all duration-500"
                          />
                          <div className="absolute inset-0 bg-ink/5 pointer-events-none"></div>
                        </div>

                        {/* Detail Text */}
                        <div className="flex flex-col justify-center">
                          <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-6 border-b border-divider pb-4">
                            Structural Logic
                          </h3>
                          <div className="space-y-4 font-body text-sm leading-relaxed text-neutral-700">
                            <p>
                              <strong className="text-ink">Challenge:</strong> {project.details.challenge}
                            </p>
                            <p>
                              <strong className="text-ink">Approach:</strong> {project.details.approach}
                            </p>
                            <p>
                              <strong className="text-ink">Outcome:</strong> {project.details.outcome}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Figure Number */}
                    <div className="mt-8 pt-8 border-t border-divider">
                      <p className="font-mono text-xs text-neutral-500">
                        Fig. 3.{index + 1} — {project.title}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Ornamental Divider */}
          <div className="py-16 text-center">
            <div className="font-serif text-2xl text-neutral-400 tracking-[1em]">
              &#x2727; &#x2727; &#x2727;
            </div>
          </div>

          {/* End Note */}
          <div className="border-4 border-ink bg-newsprint p-12 text-center sharp-corners">
            <p className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-4">
              End of Portfolio
            </p>
            <p className="font-body text-base text-neutral-700 max-w-xl mx-auto">
              Additional case studies and project details available upon request. 
              Please reach out via the contact methods provided.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Work
