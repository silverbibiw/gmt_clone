import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "../app/globals.css";
import Image from "next/image";
import left from "../public/Icons/left.svg";
import right from "../public/Icons/right.svg";
import Link from "next/link";
import NewsList from "../assets/news";

SwiperCore.use([Navigation]);

const News: React.FC = () => {
  return (
    <section className="pl-16 py-20">
      <div className="flex">
        <div className="mb-10">
          <h2 className="text-[#202020] text-3xl font-medium leading-[120%]">
            Новости компании
          </h2>
        </div>
        {/* CARDR */}
        <Swiper
          spaceBetween={10}
          slidesPerView={2.5}
          navigation={{
            prevEl: ".prevbtn",
            nextEl: ".nextbtn",
          }}
        >
          {NewsList.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-[480px] bg-cover bg-center flex-shrink-0 h-full relative transform block mr-3">
                <div className="flex flex-col border border-[#E5E2EE] rounded-lg">
                  <div className="w-full h-[40vh] rounded-r-[10px] rounded-t-[10px]">
                    <Image
                      src={item.image}
                      alt=""
                      className="rounded-t-[10px]"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-[5px] py-5 px-[15px] bg-[#F8F7F3] rounded-b-lg">
                    <Link href="temi">{item.time}</Link>
                    <h3 className="text-[#202020] text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-[#7A7687] text-sm font-normal mt-4">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* btn */}
      <div className="flex justify-between px-16">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center p-3 rounded-full border border-[#D5D1E1] bg-[#F8F7F3] cursor-pointer transition prevbtn">
            <Image src={left} alt="" />
          </div>
          <div className="flex items-center justify-center p-3 rounded-full border border-[#D5D1E1] bg-[#F8F7F3] cursor-pointer transition nextbtn">
            <Image src={right} alt="" />
          </div>
        </div>
        <Link href="/">
          <button className="flex items-center justify-center py-3 px-5 text-white bg-[#088269] text-sm font-semibold rounded-[50px] transition">
            Все новости
          </button>
        </Link>
      </div>
    </section>
  );
};

export default News;
