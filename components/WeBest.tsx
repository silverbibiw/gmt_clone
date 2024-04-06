import React from "react";
import "../app/globals.css";
import Image from "next/image";
import icon1 from "../public/Icons/symbol.svg";
import icon2 from "../public/Icons/symbol1.svg";
import icon3 from "../public/Icons/symbol2.svg";
import icon4 from "../public/Icons/symbol3.svg";

interface WeBest {
  id: number;
  title: string;
  icon: any;
}

const WeBest: React.FC = () => {
  const webestdata: WeBest[] = [
    {
      id: 1,
      title: "Быстрая доставка",
      icon: icon1,
    },
    {
      id: 2,
      title: "Весь товар сертифицирован",
      icon: icon2,
    },
    {
      id: 3,
      title: "Гибкая система скидок",
      icon: icon3,
    },
    {
      id: 4,
      title: "Летна рынке",
      icon: icon4,
    },
  ];
  return (
    <section className="flex flex-col px-16 py-16 gap-10">
      <div>
        <h2 className="text-[#202020] text-3xl font-medium leading-[120%]">
          Почему выбирают нас?
        </h2>
      </div>
      <div className="flex justify-between gap-4">
        {webestdata.map((data) => (
          <div key={data.id}>
            <div className="w-80 h-80 flex flex-col items-center justify-center gap-11 border border-[#E5E2EE] rounded-lg p-20">
              <div>
                <Image src={data.icon} alt="icons" className="w-full" />
              </div>
              <div>
                <p className="text-[#202020] text-base font-medium leading-[140%] text-center">
                  {data.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeBest;
