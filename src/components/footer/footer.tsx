import React from "react";
import { FloatingDock } from "../ui/floating-dock";
import { Github, Linkedin } from "lucide-react";
import MaxWidthWrapper from "../global/MaxWithContainer";

const Footer = () => {
  return (
    <div >
      <div className="flex flex-row gap-[10px] rounded-md p-[10px] w-fit ">
        <h3 className="font-poppins text-[18px]">I'm always happy to chat</h3>
        <button>
          <h3 className="text-[20px] text-blue-500 underline" style={{ fontFamily: "Space Grotesk" }}> Say hello!</h3>
        </button>
      </div>
    </div>
  );
};

export default Footer;
