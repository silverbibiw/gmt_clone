import React from "react";
import "../app/globals.css";
// import Link from "next/link";
// import Image from "next/image";
// import fav from "../public/Icons/arrowright.svg";
// import logo from "../public/Logo2.svg";
// import vk from "../public/Icons/vk.svg";
// import tg from "../public/Icons/tg.svg";
// import up from "../public/Icons/whatsUp.svg";
// import mastercard from "../public/Icons/master.svg";
// import visa from "../public/Icons/visa.svg";
// import mir from "../public/Icons/mir.svg";
import FooterTop from "@/components/FooterTop";
import FooterBottom from "@/components/FooterBottom";

const Footer: React.FC = () => {
  return (
    <footer>
      <FooterTop />
      <div className="w-full h-[1px] bg-[#F8F7F3] mt-16"></div>
      <FooterBottom />
    </footer>
  );
};

export default Footer;
