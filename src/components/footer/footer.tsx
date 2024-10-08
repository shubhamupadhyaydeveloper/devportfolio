import React from "react";
import { FloatingDock } from "../ui/floating-dock";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  const links = [
    {
      title: "Linkedin",
      icon: <Linkedin />,
      href: "#",
    }
  ];
  return (
    <div className="">
      <FloatingDock mobileClassName="translate-y-20" items={links} />
    </div>
  );
};

export default Footer;
