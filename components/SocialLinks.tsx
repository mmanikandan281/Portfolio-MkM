import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import React from "react";

const socialData = [
  {
    title: "Github",
    icon: <Github width={20} height={20} />,
    link: "https://github.com/mmanikandan281",
  },
  {
    title: "Linkedin",
    icon: <Linkedin width={20} height={20} />,
    link: "https://www.linkedin.com/in/mmanikandan281/",
  },
  {
    title: "Facebook",
    icon: <Facebook width={20} height={20} />,
    link: "https://www.facebook.com/share/1BD4CdZnj2/?mibextid=qi2Omg",
  },
  {
    title: "Instagram",
    icon: <Instagram width={20} height={20} />,
    link: "https://www.instagram.com/mxniiiii._?igsh=MjduNnBqeXpzNWx5",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-3">
      {socialData.map((item) => (
        <div
          key={item.title}
          className="text-lightSky/80 border border-lightSky/30 p-2.5 rounded-full hover:bg-lightSky/10 hover:border-lightSky hover:text-lightSky hoverEffect"
        >
          {/* Using <a> instead of <Link> for proper external linking */}
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            {item.icon}
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;
