import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import vertical from "../public/Icons/vertical.svg";

interface AccordionProps {
  title: string;
  answer: string;
  moredetails: string;
}

const About: React.FC<AccordionProps> = ({ title, answer, moredetails }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-10 w-[600px] border-t border-[#E1DFE7]">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full"
      >
        <span className="text-lg font-semibold">{title}</span>
        <svg
          className="fill-white shrink-0"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-[#f8f7f39f] text-base ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="py-5">{answer}</div>
          <div className="flex gap-3">
            <Link href={"/"} className="text-white">
              {moredetails}
            </Link>
            <Image src={vertical} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
