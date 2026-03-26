export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-[#0e0e0e] text-white">
      {/* Background Overlays */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="overlay-glow-bottom absolute inset-0 z-1" />
        <div className="overlay-noise absolute inset-0 z-2 opacity-20" />
      </div>

      {/* Main Content */}
      <div className="bg-about-radial relative z-20 flex min-h-screen items-center px-3 py-8 md:items-stretch md:justify-between">
        <div className="grid w-full grid-cols-1 md:grid-cols-12 gap-x-3 gap-y-8">
          <aside className="sticky top-8 flex h-fit flex-col md:col-span-4">
            <span className="text-xs font-medium text-white">01/</span>
          </aside>

          <div className="flex flex-col md:col-span-8">
            {/* Inner Grid - Consistent with Recent Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-8">
              <p className="text-xs font-normal uppercase tracking-widest text-white/60">
                About
              </p>
              <p className="text-xs font-normal uppercase tracking-widest text-white/60">
                I’m a fullstack web developer with a focus on building software
                for real business operations. My work includes systems for ERP,
                recruitment, e-commerce, project management, and other internal
                business platforms. Previously, I collaborated with teams at
                Nexicon, RHP Cipta Digital, Toffeedev, and 1011 Group.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:col-span-12">
            <h2 className="text-hero-title">
              I build scalable products, seamless interactions, and end-to-end
              digital <span className="text-hero-serif">experiences.</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
