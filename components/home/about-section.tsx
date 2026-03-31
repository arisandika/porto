export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-[#0e0e0e] text-white">
      {/* Background Overlays */}
      <div className="fixed top-0 left-0 z-0 w-full h-screen overflow-hidden pointer-events-none">
        <div className="overlay-glow-top absolute inset-[96px_24px_auto] z-[1] h-screen md:h-[50%]" />
        <div className="overlay-noise absolute inset-0 z-[2] h-auto w-full opacity-20" />
      </div>

      {/* Main Content */}
      <div className="bg-hero-radial relative z-20 flex flex-col items-center justify-center px-3 py-8 h-[90vh] md:h-[100vh]">
        <div className="grid w-full grid-cols-1 md:grid-cols-12 gap-x-3 gap-y-8 content-center">
          <aside className="flex flex-col md:col-span-4 h-fit">
            <span className="text-xs font-medium text-white">01/</span>
          </aside>

          <div className="flex flex-col md:col-span-8 h-fit">
            {/* Inner Grid - Consistent with Recent Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-8">
              <p className="text-xs font-normal uppercase tracking-widest text-white/60">
                About
              </p>
              <p className="text-xs font-normal uppercase tracking-widest text-white/60">
                I’m Ari Sandika a fullstack web developer with a focus on
                building software for real business operations. My work includes
                systems for ERP, recruitment, e-commerce, project management,
                and other internal business platforms. Previously, I
                collaborated with teams at Nexicon, RHP Cipta Digital,
                Toffeedev, and 1011.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:col-span-12 h-fit">
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
