import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../app/globals.css";
import img1 from "../public/Images/complex1.png";
import img2 from "../public/Images/complex2.png";
import img3 from "../public/Images/complex3.png";
import left from "../public/Icons/left.svg";
import right from "../public/Icons/right.svg";
import Image from "next/image";

SwiperCore.use([Navigation]);

interface Complex {
  id: number;
  title: string;
  image: any;
}

const ComplexforRoom: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const complexforroom: Complex[] = [
    { id: 1, title: "Экспресс лаборатория", image: img1 },
    { id: 2, title: "Лазерная терапия", image: img2 },
    { id: 3, title: "Операционный блок", image: img3 },
    { id: 4, title: "Экспресс лаборатория", image: img1 },
    { id: 5, title: "Лазерная терапия", image: img2 },
    { id: 6, title: "Операционный блок", image: img3 },
  ];

  return (
    <section className="flex flex-col gap-11 py-28 px-16 relative">
      <div>
        <h2 className="text-[#202020] text-3xl font-medium leading-[120%]">
          Комплексное оснащение кабинетов
        </h2>
      </div>
      <div className="w-full">
        {/* cards */}
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          loop={true}
          onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
          navigation={{
            prevEl: ".prev-button",
            nextEl: ".next-button",
          }}
          initialSlide={currentIndex}
        >
          {complexforroom.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="w-[506px] flex flex-row items-start mb-[70px] mr-5">
                <div>
                  <Image
                    src={item.image}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                  <div className="w-full h-[15%] flex justify-start items-center px-6 py-5">
                    <h3 className="text-[#202020] text-base font-medium leading-[140%]">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Previous Button */}
        <button className="prev-button w-[50px] h-[50px] absolute bottom-12 left-20 transform -translate-y-1/2 z-[1] flex items-center justify-center rounded-full border border-gray-300 bg-white">
          <Image src={left} alt="prev" />
        </button>
        {/* Next Button */}
        <button className="next-button w-[50px] h-[50px] absolute bottom-12 left-40 transform -translate-y-1/2 z-[1] flex items-center justify-center rounded-full border border-gray-300 bg-white">
          <Image src={right} alt="next" />
        </button>

        <button className="absolute z-[100] bottom-16 right-[20%] text-[#088269] border border-[#D5D1E1] flex items-center justify-center py-3 px-8 text-sm font-semibold rounded-[50px]">
          Бесплатная консультация
        </button>
        <button className="absolute z-[100] bottom-16 right-20 text-[#F8F7F3] bg-[#088269] flex items-center justify-center py-3 px-5 text-sm font-semibold rounded-[50px]">
          Рассчитать стоимость
        </button>
      </div>
    </section>
  );
};

export default ComplexforRoom;
