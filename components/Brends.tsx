import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../app/globals.css";
import Image from "next/image";
import BrendsList from "../assets/brend";
import left from "../public/Icons/left.svg";
import right from "../public/Icons/right.svg";
import Link from "next/link";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";

interface BrendsItem {
  id: number;
  title: string;
  image: any;
}

SwiperCore.use([Navigation]);

const Brends: React.FC = () => {
  return (
    <section className="py-10 px-16 flex flex-col gap-10">
      <div>
        <h2 className="text-[#202020] text-3xl font-medium leading-[120%]">
          Бренды
        </h2>
        <p className="text-[#202020] opacity-60 text-base font-medium leading-[140%]">
          Эксклюзивные поставщики
        </p>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={4.5}
        breakpoints={{
          375: {
            slidesPerView: 1.2,
          },
          768: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 4.5,
          },
        }}
        navigation={{ prevEl: ".prev", nextEl: ".next" }}
        className="mySwiper"
      >
        {BrendsList.map((item: BrendsItem) => (
          <SwiperSlide key={item.id}>
            <div className="w-[250px] mr-5 border rounded-lg border-[#E5E2EE]">
              <div className="h-52 bg-white flex justify-center items-center p-3 border-b rounded-t-lg">
                <Image
                  src={item.image}
                  alt=""
                  className="h-auto w-auto max-w-full max-h-full object-contain"
                />
              </div>
              <div className="pl-6 py-10 bg-[#F8F7F3] rounded-b-lg">
                <h2 className="text-[#202020] text-base font-medium leading-[140%]">
                  {item.title}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <div className="prev rounded-full border border-[#D5D1E1] bg-[#F8F7F3] cursor-pointer transition p-3">
            <Image src={left} alt="" />
          </div>
          <div className="next rounded-full border border-[#D5D1E1] bg-[#F8F7F3] cursor-pointer transition p-3">
            <Image src={right} alt="" />
          </div>
        </div>
        <Link href={"/"}>
          <button className="py-3 px-5 text-white bg-[#088269] text-sm font-semibold rounded-[50px] transition">
            Сертификаты
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Brends;
