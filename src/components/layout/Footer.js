import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { footerLinkGroups, socialLinks } from "@/data/footer";
import { siteCopyrightYear, siteFooterBlurb, siteName } from "@/lib/site";

const socialIcons = {
  facebook: FaFacebookF,
  twitter: FaTwitter,
  instagram: FaInstagram,
};

const Footer = () => {
  return (
    <footer className="bg-[#F7F7F7] font-sans !important !px-4 sm:!px-6 md:!px-12 lg:!px-[150px] !py-8 sm:!py-10 md:!py-[40px] !w-[100%]">
      <div className="!max-w-[1400px] !mx-auto !h-fit">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20">
          <div className="sm:col-span-2 md:col-span-1">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 !important">
              {siteName}
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm max-w-full sm:max-w-[280px] !important">
              {siteFooterBlurb}
            </p>
          </div>

          {footerLinkGroups.map((section) => (
            <div key={section.title} className="md:col-span-1">
              <h4 className="text-orange-500 font-medium mb-6 text-sm !important">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-800 text-sm hover:text-orange-500 transition-colors !important"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="md:col-span-1">
            <h4 className="text-orange-500 font-medium mb-6 text-sm !important">
              Follow Us
            </h4>
            <ul className="space-y-4">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.id];
                return (
                  <li key={social.id}>
                    <a
                      href={social.url}
                      className="flex items-center gap-3 text-gray-800 text-sm hover:text-orange-500 transition-colors !important"
                    >
                      <span className="text-lg">{Icon ? <Icon /> : null}</span>
                      {social.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 text-xs text-gray-500 !important">
          <p>
            Copyright © {siteCopyrightYear} {siteName}
          </p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-900 !important">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-gray-900 !important">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
