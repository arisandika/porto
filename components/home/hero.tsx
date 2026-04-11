import Image from "next/image";

function ScrollIndicator() {
  return (
    <div className="hero-fade">
      <div className="scroll-wrapper">
        <Image
          src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/63e206eedd964a5c5db19c91_23-icon-arrow-down.svg"
          alt="Scroll down"
          width={20}
          height={20}
          className="icon-scroll-down"
        />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    // HTML dan Style TETAP SAMA PERSIS dengan kode Anda
    <section className="relative flex flex-col justify-center pt-36 md:pt-32 pb-44 md:pb-24">
      <div className="mx-auto max-w-container md:p-4">
        <div className="container-hero-image">
          <div className="glare-item-top outer-edge"></div>
          <div className="window-outline">
            <div className="window-main">
              <div className="shine-wrapper">
                <div className="shine-small" />
                <div className="shine-big" />
              </div>
              <div className="window-bar">
                <div className="window-dots-wrapper">
                  <div className="dot dot-red" />
                  <div className="dot dot-yellow" />
                  <div className="dot dot-green" />
                </div>
                <svg className="icon-plus" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5v14M5 12h14" stroke="#f2f2f2" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div className="window-content">
                <div className="glare-inner" />
                <div className="flex flex-col gap-8 md:gap-14">
                  <h2 className="text-hero-title">
                    I build scalable products, seamless interactions & end-to-end digital <span className="text-hero-serif">experiences.</span>
                  </h2>
                  <div className="grid md:grid-cols-2">
                    <div />
                    <h1 className="text-hero-about">
                      I&apos;m Ari Sandika a fullstack web developer with a focus on building software for real business operations.
                    </h1>
                  </div>
                </div>
                <div className="window-grain" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollIndicator />
    </section>
  );
}