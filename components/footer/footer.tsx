import { siteConfig } from "@/app/config/site";
import CustomLink from "@/components/ui/custom-link";

const Footer = () => {
  return (
    <footer className="sticky bottom-0 flex flex-col items-center bg-[#181818] border-t border-[#f2f2f21a] w-full text-zinc-100">
      <div className="w-full px-4 py-10 md:px-12 md:py-12">
        <div className="grid grid-cols-2 gap-12 md:gap-8 md:grid-cols-12">
          {/* Version Info */}
          <div className="flex flex-col gap-2 col-span-2 md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-yellow-300 border rounded-full border-yellow-300/30">
                v2.0.1
              </span>
              <span className="text-xs uppercase text-white/40">
                Last Updated 2026-04-12
              </span>
            </div>
          </div>

          {/* Page Links */}
          <div className="flex flex-col gap-3 md:col-span-2">
            {siteConfig.navLinks.map((link) => (
              <CustomLink key={link.label} {...link} />
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-3 md:col-span-2">
            {siteConfig.socialLinks.map((link) => (
              <CustomLink key={link.label} {...link} />
            ))}
          </div>

          {/* Contact & Email */}
          <div className="flex flex-col gap-3 col-span-2 md:col-span-3">
            <p className="text-sm text-white/80">
              Let&apos;s build something together.
            </p>
            <CustomLink
              href={`mailto:${siteConfig.email}`}
              label={siteConfig.email}
              external={true}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
