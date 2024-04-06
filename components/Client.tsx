import React from "react";
import "../app/globals.css";
import Image from "next/image";
import clientsList from "../assets/clients";
import Marquee from "react-fast-marquee";

interface ClientItem {
  id: string;
  title: string;
  image: any;
}

const Client: React.FC = () => {
  return (
    <section className="flex flex-col gap-24 py-24 bg-[#E5E4ED]">
      <div className="flex justify-between px-16">
        <div className="text-[#202020] text-3xl font-medium leading-[120%]">
          Наши клиенты
        </div>
        <div className="text-[#202020] text-5xl font-medium leading-[110%]">
          БОЛЕЕ
          <span className="text-[#088269]"> 5000</span>
          <br />
          УСПЕШНЫХ ПРОЕКТОВ
        </div>
      </div>
      <div className="swiper swiper_horizontal min-w-[0%]">
        <div className="border bg-[#E5E4ED] rounded-lg w-full h-full relative z-[1] flex box-border">
          <Marquee>
            {clientsList.map((item: ClientItem) => (
              <div key={item.id} className="swiper-slide slide4 w-[365px] mr-5">
                <div className="border-[1px] border-[#E5E2EE]">
                  <div className="h-52 bg-white flex justify-center items-center p-3 border rounded-t-lg">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="h-auto w-auto max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="min-h-[108px] py-5 pr-[69px] pl-6 bg-[#F8F7F3] rounded-b-lg">
                    <h2 className="text-[#202020] text-base font-medium leading-[140%]">
                      {item.title}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};
export default Client;
