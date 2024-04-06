import React from "react";
import "../app/globals.css";
import HeaderHead from "@/components/HeaderHead";
import HeaderMain from "@/components/HeaderMain";
import HeaderFooter from "@/components/HeaderFooter";

const Header: React.FC = () => {
  return (
    <header className="flex flex-col">
      {/* header head */}
      <HeaderHead />
      {/* header main */}
      <HeaderMain />
      {/* header footer */}
      <HeaderFooter />
    </header>
  );
};

export default Header;
