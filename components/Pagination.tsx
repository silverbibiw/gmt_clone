import React, { useState } from "react";
import Image from "next/image";
import left from "../public/Icons/left.svg";
import right from "../public/Icons/right.svg";
import banner from "../public/Images/banner.jpg";
import banner2 from "../public/Images/banner2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import SwiperCore from "swiper";

SwiperCore.use([Pagination, Autoplay]);

const PaginationCard: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="px-16 min-w-0">
      <div className="bg-[#E5E4ED] rounded-[10px] relative">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          loop={true}
          onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
          navigation={{
            prevEl: ".prev-button",
            nextEl: ".next-button",
          }}
          initialSlide={currentIndex}
        >
          <SwiperSlide>
            <div className="flex justify-between gap-5 pl-[50px] pt-8 pb-8 relative">
              <div className="relative flex flex-col gap-5">
                <div>
                  <h2 className="text-[#202020] text-5xl font-medium leading-[110%]">
                    GMT эксклюзивный <br />
                    поставщик Pusen в РФ
                  </h2>
                </div>
                <p className="text-[#] text-base font-medium leading-[140%]">
                  Одноразовый гибкий уретероскоп Pusen — достойная
                  <br />
                  альтернатива многоразовому эндоскопическому
                  <br />
                  инструментарию
                </p>
                <div className="flex items-center gap-4">
                  <button className="text-[#F8F7F3] bg-[#088269] flex items-center justify-center py-3 px-5 rounded-[50px] text-sm font-semibold">
                    Получить консультацию
                  </button>
                  <button className="text-[#088269] text-sm font-semibold rounded-[50px] border bg-[#F0F0F0] py-3 px-8">
                    В каталог
                  </button>
                </div>
              </div>
              <div className="relative">
                <Image
                  src={banner}
                  alt="banner"
                  className="block w-full h-full object-cover rounded-t-full"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-between gap-5 pl-[50px] pt-8 pb-8 relative">
              <div className="relative flex flex-col gap-5">
                <div>
                  <h2 className="text-[#202020] text-5xl font-medium leading-[110%]">
                    Sonoscape HD-350
                  </h2>
                </div>
                <p className="text-[#] text-base font-medium leading-[140%]">
                  Эндоскопическая видеосистема <br />
                  Sonoscape HD-350 <br />
                  <b>скидка 30%</b>
                  *Предложение действительно
                  <br />
                  по факту наличия товара
                </p>
                <div className="flex items-center gap-4">
                  <button className="text-[#F8F7F3] bg-[#088269] flex items-center justify-center py-3 px-5 rounded-[50px] text-sm font-semibold">
                    Получить консультацию
                  </button>
                  <button className="text-[#088269] text-sm font-semibold rounded-[50px] border bg-[#F0F0F0] py-3 px-8">
                    В каталог
                  </button>
                </div>
              </div>
              <div className="relative">
                <Image
                  src={banner2}
                  alt="banner"
                  className="block w-full h-full object-cover rounded-t-full"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <button className="prev-button w-[50px] h-[50px] absolute bottom-10 right-0 left-10 z-[1] transform -translate-x-1/5  flex items-center justify-center rounded-full border border-gray-300 bg-white">
          <Image src={left} alt="prev" />
        </button>
        <button className="next-button w-[50px] h-[50px] absolute bottom-10 right-0 left-28 z-[1] flex items-center justify-center rounded-full border border-gray-300 bg-white">
          <Image src={right} alt="next" />
        </button>
      </div>
    </section>
  );
};

export default PaginationCard;
