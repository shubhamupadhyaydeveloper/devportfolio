import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./About.css";
import { Image } from "@chakra-ui/react";

const ProfileImg = () => {

  return (

    <div className="card relative xl:ml-[10vw]">
      <div className="content">
        <div className="front rounded-2xl">
            <Image src="./profile.jpg" width={"340px"} height={"280px"} className="rounded-2xl"/>
        </div>
        <div className="back bg-[#379777] text-white font-poppins font-bold">
            Hi 👋 Nice to Meet You
        </div>
      </div>
    </div>
  );
};

export default ProfileImg;
