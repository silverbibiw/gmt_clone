import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../app/globals.css";
import catalogList from "../assets/catalog";
import fav from "../public/Icons/favourites.svg";
import comparison from "../public/Icons/comparison.svg";
import Image from "next/image";
import Link from "next/link";

interface CatalogItem {
  id: number;
  image: any;
  title: string;
  text: string;
}

const Catalog: React.FC = () => {
  return (
    <section className="py-5 pl-16">
      <div className="flex flex-col gap-3 mb-10">
        <h2 className="text-[#202020] text-3xl font-medium leading-[120%]">
          Каталог товаров
        </h2>
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={3.5}
        breakpoints={{
          375: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1440: {
            slidesPerView: 3,
          },
        }}
      >
        {catalogList.map((item: CatalogItem) => (
          <SwiperSlide key={item.id}>
            <div className="flex gap-3 rounded-lg">
              <div className="!mr-0 mb-20 flex flow-row items-start justify-center">
                <div className="w-full p-0 rounded-lg border">
                  <div className="relative flex items-center justify-center rounded-lg bg-white px-4 pt-16 pb-9">
                    <div className="absolute top-0 left-0 w-full py-4 px-3 flex justify-between">
                      <p className="py-1 px-3 text-[#088269] rounded-[60px] border border-[#088269] bg-[#E1EFE6] text-sm font-medium flex items-center justify-center">
                        Новинка
                      </p>
                      <div className="flex gap-3">
                        <Link href={"/"}>
                          <Image src={fav} alt="" className="object-contain" />
                        </Link>
                        <Link href={"/"}>
                          <Image
                            src={comparison}
                            alt=""
                            className="object-contain"
                          />
                        </Link>
                      </div>
                    </div>
                    <Image
                      src={item.image}
                      alt=""
                      className="w-[250px] h-[250px] object-cover"
                    />
                  </div>
                  <div className="rounded-[40px] w-full flex flex-col py-5 px-4 gap-3">
                    <h3 className="text-[#202020] text-lg font-semibold">
                      {item.title}
                    </h3>
                    <div className="catalof-text">
                      <p className="text-[#7A7687] text-base font-medium leading-[140%]">
                        {item.text}
                      </p>
                      <button className="text-[#088269] bg-[#F0F0F0] text-sm font-semibold rounded-[50px] border py-2 px-8 mt-3">
                        Получить КП
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Catalog;
