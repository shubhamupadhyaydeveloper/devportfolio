import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./About.css";
import { Image } from "@chakra-ui/react";

const ProfileImg = () => {

  return (

    <div className="card relative ">
      <div className="content w-full">
        <div className="front rounde absolute left-0">
            <Image src="./profile.jpg" width={"340px"} height={"280px"} className=""/>
        </div>
        <div className="back bg-[#379777] text-white font-poppins font-bold">
            Hi 👋 Nice to Meet You
        </div>
      </div>
    </div>
  );
};

export default ProfileImg;
