import type { Metadata } from "next";
import ContactForm from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ari Sandika. Let's build something great together. Available for freelance projects and full-time opportunities.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      {/* HEADER SECTION (Gaya konsisten dengan halaman About) */}
      <section className="relative flex flex-col justify-center pt-36 md:pt-32">
        <div className="w-full mx-auto max-w-container md:p-4">
          <div className="container-hero-image">
            <div className="glare-item-top outer-edge"></div>
            <div className="window-outline-contact">
              <div className="window-main">
                <div className="window-content !py-12 md:!py-16 !px-6 md:!px-12 bg-[#0e0e0e]/80">
                  <div className="glare-inner" />

                  <div className="flex flex-col text-center">
                    <h1 className="text-4xl font-medium tracking-tight text-white md:text-5xl font-neue">
                      Let&apos;s Build{" "}
                      <span className="text-hero-serif">Something</span>
                    </h1>
                    <p className="mt-4 text-sm leading-relaxed text-white/70 max-w-xl mx-auto">
                      Have a project in mind or just want to say hello? Fill out
                      the form below or reach out via my social channels.
                      I&apos;m always open to discussing new ideas and
                      opportunities.
                    </p>
                  </div>

                  <div className="w-full h-px mt-6 border-b border-dotted border-white/10"></div>

                  {/* Form Wrapper */}
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mt-6">
                    <div className="md:col-span-3">
                      <ContactForm />
                    </div>
                    <div className="md:col-span-2 flex flex-col gap-8 text-left md:pl-8">
                      <div>
                        <h3 className="text-sm text-white/50 mb-2 tracking-widest">
                          Contact Details
                        </h3>
                        <a
                          href="mailto:arisndk36@gmail.com"
                          className="text-sm text-white/80 hover:text-yellow-300 transition-colors block"
                        >
                          arisndk36@gmail.com
                        </a>
                      </div>
                      <div>
                        <h3 className="text-sm text-white/50 mb-2 tracking-widest">
                          Find me on
                        </h3>
                        <a
                          href="https://linkedin.com/in/ari-sandika"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-white/80 hover:text-yellow-300 transition-colors block"
                        >
                          LinkedIn
                        </a>
                        <a
                          href="https://github.com/arisandika"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-white/80 hover:text-yellow-300 transition-colors block mt-1"
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
