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
    <section className="px-4 md:px-10 lg:px-14 xl:px-16 py-10 md:py-20">
      <div className="mb-10">
        <h2 className="text-[#202020] text-3xl md:text-4xl font-medium leading-[120%]">
          Новости компании
        </h2>
      </div>
      {/* CARDS */}
      <Swiper
        spaceBetween={10}
        slidesPerView={2.5}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        navigation={{
          prevEl: ".prevbtn",
          nextEl: ".nextbtn",
        }}
      >
        {NewsList.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full md:w-[480px] bg-cover bg-center flex-shrink-0 h-full relative transform block md:mr-3 mb-6 md:mb-0">
              <div className="flex flex-col border border-[#E5E2EE] rounded-lg">
                <div className="w-full h-[40vh] rounded-t-[10px]">
                  <Image
                    src={item.image}
                    alt=""
                    className="object-cover rounded-t-[10px]"
                    width={480}
                    height={240}
                  />
                </div>
                <div className="w-full flex flex-col gap-2 py-4 md:py-5 px-4 md:px-6 bg-[#F8F7F3] rounded-b-lg">
                  <Link href="temi" passHref>
                    <p className="text-[#088269] text-xs md:text-sm font-medium">
                      {item.time}
                    </p>
                  </Link>
                  <h3 className="text-[#202020] text-base md:text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-[#7A7687] text-sm md:text-base font-normal mt-2 md:mt-4">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* BUTTONS */}
      <div className="flex justify-between items-center mt-8 md:mt-12">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center p-3 rounded-full border border-[#D5D1E1] bg-[#F8F7F3] cursor-pointer transition prevbtn">
            <Image src={left} alt="" width={20} height={20} />
          </div>
          <div className="flex items-center justify-center p-3 rounded-full border border-[#D5D1E1] bg-[#F8F7F3] cursor-pointer transition nextbtn">
            <Image src={right} alt="" width={20} height={20} />
          </div>
        </div>
        <Link href="/">
          <button className="flex items-center justify-center py-3 px-5 text-white bg-[#088269] text-sm md:text-base font-semibold rounded-[50px] transition">
            Все новости
          </button>
        </Link>
      </div>
    </section>
  );
};

export default News;
