import React, { useState } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

const Navbar = () => {
  const [active, SetActive] = useState<string>("Home");
  const links: string[] = [
    "Home",
    "About",
    "Stack",
    "Projects",
    "Contact",

  ];
  

  return (
    <div className="fixed z-[10] inset-x-0 top-0 flex items-center justify-center backdrop-blur-md bg-black/35 transition-all ">
      <div className="bg-gray-900 flex justify-between items-center mx-auto w-full max-w-screen-sm rounded-full mt-5 transition-all">
        {links.map((item) => (
          <a
            href="#"
            key={item}
            className={`${
              active === item
                ? "bg-[#6EACDA] rounded-full px-5 py-3 transition-colors duration-400 ease-in-out"
                : "bg-gray-900 rounded-full px-5 transition-colors duration-00 ease-in-out"
            } text-white ${active !== item && "hover:translate-y-[-4px]"}  transition-transform duration-400 ease-out font-poppins`}
            onClick={(e) => {
              e.preventDefault();
              SetActive(item);
            }}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

