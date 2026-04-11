import { siteConfig } from "@/app/config/site";
import CustomLink from "@/components/ui/custom-link";

const Footer = () => {

  return (
    <footer className="sticky bottom-0 flex flex-col items-center bg-[#181818] border-t border-[#f2f2f21a] w-full text-zinc-100">
      <div className="w-full px-3 py-10 md:px-12 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          
          <div className="flex flex-col gap-2 md:col-span-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-yellow-300 border rounded-full border-yellow-300/30">
                v1.0.0
              </span>
              <span className="text-xs uppercase text-white/40">
                Last Updated 2026-03-20
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3 md:col-span-2">
            {siteConfig.socialLinks.map((link) => (
              <CustomLink key={link.label} {...link} />
            ))}
          </div>

          <div className="flex flex-col gap-3 md:col-span-4">
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