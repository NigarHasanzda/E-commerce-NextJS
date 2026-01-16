import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // 'npm install react-icons' tələb olunur

const Footer = () => {
  const footerLinks = [
    {
      title: "Services",
      links: ["Email Marketing", "Campaigns", "Branding"]
    },
    {
      title: "Furniture",
      links: ["Beds", "Chair", "All"]
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: <FaFacebookF />, url: "#" },
    { name: "Twitter", icon: <FaTwitter />, url: "#" },
    { name: "Instagram", icon: <FaInstagram />, url: "#" }
  ];

  return (
    <footer className="bg-[#F7F7F7] font-sans !important !px-[150px]  !py-[40px] !w-[100%]">
      <div className=" !h-fit  mx-auto ">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 !important">Panto</h2>
            <p className="text-gray-600 leading-relaxed text-sm max-w-[280px] !important">
              The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.
            </p>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index} className="md:col-span-1">
              <h4 className="text-orange-500 font-medium mb-6 text-sm !important">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-800 text-sm hover:text-orange-500 transition-colors !important">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="md:col-span-1">
            <h4 className="text-orange-500 font-medium mb-6 text-sm !important">Follow Us</h4>
            <ul className="space-y-4">
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <a href={social.url} className="flex items-center gap-3 text-gray-800 text-sm hover:text-orange-500 transition-colors !important">
                    <span className="text-lg">{social.icon}</span>
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 text-xs text-gray-500 !important">
          <p>Copyright © 2021</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-900 !important">Terms & Conditions</a>
            <a href="#" className="hover:text-gray-900 !important">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;